import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import type { ArabicLetter, VocabularyWord } from '../types';
import { soundService } from '../services/soundService';
import { 
  RotateCcw, 
  Trash2, 
  Download, 
  Volume2, 
  Eye, 
  EyeOff, 
  PenTool, 
  Eraser, 
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  FileText,
  HelpCircle,
  XCircle,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface WritingCanvasProps {
  letters: ArabicLetter[];
  vocabulary?: VocabularyWord[];
  initialLetterId?: string;
  onLetterComplete?: (letterId: string) => void;
  onScoreUpdate?: (points: number) => void;
}

type ExerciseType = 'letter' | 'word';
type PositionMode = 'isolated' | 'initial' | 'medial' | 'final';
type TracingStage = 'shadow' | 'free';

interface Point {
  x: number;
  y: number;
}

interface Stroke {
  points: Point[];
  color: string;
  width: number;
  isEraser?: boolean;
}

interface EvaluationResult {
  score: number;
  status: 'excellent' | 'good' | 'retry';
  title: string;
  message: string;
  advice: string;
}

const COLORS = [
  { name: 'Zümrüt Yeşili', value: '#059669' },
  { name: 'Altın Sarısı', value: '#d97706' },
  { name: 'Safir Mavi', value: '#2563eb' },
  { name: 'Yakut Kırmızı', value: '#dc2626' },
  { name: 'Koyu İndigo', value: '#1e1b4b' }
];

const BRUSH_SIZES = [
  { name: 'İnce', value: 6 },
  { name: 'Normal', value: 12 },
  { name: 'Kalın', value: 20 }
];

export const WritingCanvas: React.FC<WritingCanvasProps> = ({
  letters,
  vocabulary = [],
  initialLetterId = 'alif',
  onLetterComplete,
  onScoreUpdate
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Exercise Mode: Harf veya Kelime
  const [exerciseType, setExerciseType] = useState<ExerciseType>('letter');
  
  // Letter mode states
  const [selectedLetterId, setSelectedLetterId] = useState<string>(initialLetterId);
  const [positionMode, setPositionMode] = useState<PositionMode>('isolated');

  // Word mode states
  const [selectedWordCategory, setSelectedWordCategory] = useState<string>('all');
  const [selectedWordIndex, setSelectedWordIndex] = useState<number>(0);

  // Tracing Stages: 'shadow' (Önce gölgeden git) vs 'free' (Sonra kendin yaz)
  const [tracingStage, setTracingStage] = useState<TracingStage>('shadow');
  const [showGuide, setShowGuide] = useState<boolean>(true);

  // Drawing tools
  const [activeColor, setActiveColor] = useState<string>(COLORS[0].value);
  const [brushWidth, setBrushWidth] = useState<number>(12);
  const [isEraser, setIsEraser] = useState<boolean>(false);

  // Evaluation / Error Warning State
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);

  // Persistent memory for drawings across all letters & words:
  // Key format: "letter_ba_initial" or "word_w1_standard"
  const savedDrawingsRef = useRef<Record<string, Stroke[]>>({});

  // Active strokes for current item
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const currentStroke = useRef<Point[]>([]);
  const isDrawing = useRef<boolean>(false);

  // Current Letter
  const currentLetter = letters.find(l => l.id === selectedLetterId) || letters[0];

  // Filtered Words for Word Mode
  const filteredWords = useMemo(() => {
    if (selectedWordCategory === 'all') return vocabulary;
    return vocabulary.filter(w => w.category === selectedWordCategory);
  }, [vocabulary, selectedWordCategory]);

  const currentWord = filteredWords[selectedWordIndex] || filteredWords[0] || vocabulary[0];

  // Helper: Get Unique Key for Current Item to save/load strokes
  const getCurrentKey = useCallback((): string => {
    if (exerciseType === 'letter') {
      return `letter_${selectedLetterId}_${positionMode}`;
    }
    return `word_${currentWord?.id || 'w0'}`;
  }, [exerciseType, selectedLetterId, positionMode, currentWord]);

  // Target Text to display and write
  const getTargetText = useCallback((): string => {
    if (exerciseType === 'word') {
      return currentWord ? currentWord.arabic : 'كَتَبَ';
    }
    switch (positionMode) {
      case 'initial':
        return currentLetter.initial;
      case 'medial':
        return currentLetter.medial;
      case 'final':
        return currentLetter.final;
      case 'isolated':
      default:
        return currentLetter.isolated;
    }
  }, [exerciseType, currentWord, currentLetter, positionMode]);

  // Switch Target Item while safely preserving strokes
  const switchTarget = useCallback((action: () => void) => {
    // 1. Save current drawing into memory
    const currentKey = getCurrentKey();
    savedDrawingsRef.current[currentKey] = strokes;
    setEvaluation(null);

    // 2. Perform target switch
    action();
  }, [getCurrentKey, strokes]);

  // Sync when initialLetterId changes from parent
  useEffect(() => {
    if (initialLetterId && initialLetterId !== selectedLetterId) {
      switchTarget(() => {
        setExerciseType('letter');
        setSelectedLetterId(initialLetterId);
        const newKey = `letter_${initialLetterId}_${positionMode}`;
        setStrokes(savedDrawingsRef.current[newKey] || []);
      });
    }
  }, [initialLetterId, positionMode, selectedLetterId, switchTarget]);

  // Auto-load saved strokes whenever current key changes
  const loadStrokesForTarget = (newKey: string) => {
    setStrokes(savedDrawingsRef.current[newKey] || []);
  };

  // Redraw canvas content
  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    // Reset transform & clear
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(dpr, dpr);

    // Draw baseline / calligraphy guide grid
    ctx.save();
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 6]);

    // Baseline (Arapça ana yazı çizgisi)
    const baselineY = rect.height * 0.65;
    ctx.beginPath();
    ctx.moveTo(10, baselineY);
    ctx.lineTo(rect.width - 10, baselineY);
    ctx.stroke();

    // Top guide line
    const topLineY = rect.height * 0.28;
    ctx.beginPath();
    ctx.moveTo(10, topLineY);
    ctx.lineTo(rect.width - 10, topLineY);
    ctx.stroke();
    ctx.restore();

    // Draw background shadow guide if enabled
    const targetText = getTargetText();
    const shouldDrawGuide = showGuide && (tracingStage === 'shadow');

    if (shouldDrawGuide) {
      ctx.save();
      ctx.fillStyle = '#cbd5e1';
      // Dynamically size font depending on word length
      const isWord = exerciseType === 'word';
      const baseFontSize = isWord 
        ? Math.min(rect.width / (targetText.length * 0.7), rect.height * 0.45)
        : Math.min(rect.width * 0.48, rect.height * 0.6);

      ctx.font = `bold ${Math.max(baseFontSize, 36)}px "Amiri", "Traditional Arabic", serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      ctx.direction = 'rtl';
      ctx.fillText(targetText, rect.width / 2, baselineY);
      ctx.restore();
    }

    // Reset line dash for crisp user strokes
    ctx.setLineDash([]);

    // Render user strokes & dots
    strokes.forEach((stroke) => {
      if (!stroke.points || stroke.points.length === 0) return;
      ctx.save();
      ctx.fillStyle = stroke.isEraser ? '#ffffff' : stroke.color;
      ctx.strokeStyle = stroke.isEraser ? '#ffffff' : stroke.color;

      if (stroke.points.length === 1) {
        // Single tap dot / Nokta
        const pt = stroke.points[0];
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, stroke.width / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.lineWidth = stroke.width;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
        for (let i = 1; i < stroke.points.length; i++) {
          ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
        }
        ctx.stroke();
      }
      ctx.restore();
    });
  }, [strokes, showGuide, tracingStage, getTargetText, exerciseType]);

  // Keep a ref to latest redraw
  const redrawRef = useRef<() => void>(() => {});
  redrawRef.current = redraw;

  // Resize canvas when container size changes with mobile-first proportions
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    const isMobile = window.innerWidth < 640;
    const targetWidth = Math.max(Math.floor(rect.width), 260);
    // On mobile screens, constrain canvas height so toolbar & check buttons fit in viewport
    const targetHeight = isMobile
      ? Math.max(Math.min(Math.floor(targetWidth * 0.58), 240), 200)
      : Math.max(Math.floor(Math.min(targetWidth * 0.72, 420)), 280);

    const pixelW = Math.floor(targetWidth * dpr);
    const pixelH = Math.floor(targetHeight * dpr);

    if (canvas.width !== pixelW || canvas.height !== pixelH) {
      canvas.width = pixelW;
      canvas.height = pixelH;
      canvas.style.width = `${targetWidth}px`;
      canvas.style.height = `${targetHeight}px`;
    }
    redrawRef.current();
  }, []);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('orientationchange', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('orientationchange', resizeCanvas);
    };
  }, [resizeCanvas]);

  useEffect(() => {
    redraw();
  }, [redraw]);

  // Bulletproof native touch prevention to stop iOS Safari & Android bounce/pull-to-refresh
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const preventDefaultTouch = (e: TouchEvent) => {
      if (e.target === canvas) {
        // Stop screen scroll and gesture cancellation
        if (e.cancelable) {
          e.preventDefault();
        }
      }
    };

    canvas.addEventListener('touchstart', preventDefaultTouch, { passive: false });
    canvas.addEventListener('touchmove', preventDefaultTouch, { passive: false });

    return () => {
      canvas.removeEventListener('touchstart', preventDefaultTouch);
      canvas.removeEventListener('touchmove', preventDefaultTouch);
    };
  }, []);

  // Get canvas coordinates with subpixel DPR and bounding rect compensation
  const getCanvasCoords = (clientX: number, clientY: number): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    // Subpixel scaling factor between bounding rect and canvas logical dimensions
    const scaleX = rect.width > 0 ? (canvas.width / dpr) / rect.width : 1;
    const scaleY = rect.height > 0 ? (canvas.height / dpr) / rect.height : 1;

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  const drawInstantDot = (point: Point, color: string, width: number, isEraserMode: boolean) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;

    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = isEraserMode ? '#ffffff' : color;
    ctx.beginPath();
    ctx.arc(point.x, point.y, width / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      canvas.setPointerCapture(e.pointerId);
    } catch {
      // Ignore
    }

    isDrawing.current = true;
    const coord = getCanvasCoords(e.clientX, e.clientY);
    currentStroke.current = [coord];
    drawInstantDot(coord, activeColor, brushWidth, isEraser);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current) return;
    e.preventDefault();

    const coord = getCanvasCoords(e.clientX, e.clientY);
    currentStroke.current.push(coord);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const points = currentStroke.current;
    if (points.length < 2) return;

    const dpr = window.devicePixelRatio || 1;
    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.beginPath();
    ctx.strokeStyle = isEraser ? '#ffffff' : activeColor;
    ctx.lineWidth = brushWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.moveTo(points[points.length - 2].x, points[points.length - 2].y);
    ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
    ctx.stroke();
    ctx.restore();
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current) return;
    e.preventDefault();
    isDrawing.current = false;

    const canvas = canvasRef.current;
    if (canvas) {
      try {
        if (canvas.hasPointerCapture(e.pointerId)) {
          canvas.releasePointerCapture(e.pointerId);
        }
      } catch {
        // Ignore
      }
    }

    if (currentStroke.current.length > 0) {
      const newStroke: Stroke = {
        points: [...currentStroke.current],
        color: activeColor,
        width: brushWidth,
        isEraser
      };
      setStrokes(prev => {
        const next = [...prev, newStroke];
        // Automatically save to memory
        savedDrawingsRef.current[getCurrentKey()] = next;
        return next;
      });
      currentStroke.current = [];
    }
  };

  // Undo
  const handleUndo = () => {
    soundService.playClick();
    setStrokes(prev => {
      const next = prev.slice(0, -1);
      savedDrawingsRef.current[getCurrentKey()] = next;
      return next;
    });
    setEvaluation(null);
  };

  // Clear canvas for current item
  const handleClear = () => {
    soundService.playClick();
    delete savedDrawingsRef.current[getCurrentKey()];
    setStrokes([]);
    setEvaluation(null);
  };

  // Play target sound
  const handlePlaySound = () => {
    const textToSpeak = exerciseType === 'word' 
      ? (currentWord?.audioText || currentWord?.arabic || 'كَتَبَ') 
      : getTargetText();
    soundService.speakArabic(textToSpeak);
  };

  // =========================================================================
  // AKILLI DOĞRULUK VE HATA ANALİZİ (Evaluation & Error Feedback Engine)
  // =========================================================================
  const evaluateWriting = () => {
    soundService.playClick();
    setIsEvaluating(true);

    if (strokes.length === 0) {
      soundService.playWrong();
      setEvaluation({
        score: 0,
        status: 'retry',
        title: 'Tuval Henüz Boş!',
        message: 'Henüz hiçbir çizim yapmadınız.',
        advice: 'Önce parmağınız veya farenizle harfi yazın, ardından tekrar "Kontrol Et" butonuna dokunun.'
      });
      setIsEvaluating(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      setIsEvaluating(false);
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const targetText = getTargetText();

    // 1. Offscreen canvas for Ideal Target
    const offCanvas = document.createElement('canvas');
    offCanvas.width = canvas.width;
    offCanvas.height = canvas.height;
    const offCtx = offCanvas.getContext('2d');
    if (!offCtx) {
      setIsEvaluating(false);
      return;
    }

    const baselineY = rect.height * 0.65;
    const isWord = exerciseType === 'word';
    const baseFontSize = isWord 
      ? Math.min(rect.width / (targetText.length * 0.7), rect.height * 0.45)
      : Math.min(rect.width * 0.48, rect.height * 0.6);

    offCtx.scale(dpr, dpr);
    offCtx.fillStyle = '#000000';
    offCtx.font = `bold ${Math.max(baseFontSize, 36)}px "Amiri", "Traditional Arabic", serif`;
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'alphabetic';
    offCtx.direction = 'rtl';
    offCtx.fillText(targetText, rect.width / 2, baselineY);

    const targetImgData = offCtx.getImageData(0, 0, offCanvas.width, offCanvas.height);
    const targetData = targetImgData.data;

    // 2. Offscreen canvas for User's actual strokes
    const userCanvas = document.createElement('canvas');
    userCanvas.width = canvas.width;
    userCanvas.height = canvas.height;
    const userCtx = userCanvas.getContext('2d');
    if (!userCtx) {
      setIsEvaluating(false);
      return;
    }

    userCtx.scale(dpr, dpr);
    strokes.forEach((stroke) => {
      if (!stroke.points || stroke.points.length === 0) return;
      userCtx.fillStyle = stroke.isEraser ? '#ffffff' : '#000000';
      userCtx.strokeStyle = stroke.isEraser ? '#ffffff' : '#000000';

      if (stroke.points.length === 1) {
        const pt = stroke.points[0];
        userCtx.beginPath();
        userCtx.arc(pt.x, pt.y, stroke.width / 2, 0, Math.PI * 2);
        userCtx.fill();
      } else {
        userCtx.lineWidth = stroke.width;
        userCtx.lineCap = 'round';
        userCtx.lineJoin = 'round';
        userCtx.beginPath();
        userCtx.moveTo(stroke.points[0].x, stroke.points[0].y);
        for (let i = 1; i < stroke.points.length; i++) {
          userCtx.lineTo(stroke.points[i].x, stroke.points[i].y);
        }
        userCtx.stroke();
      }
    });

    const userImgData = userCtx.getImageData(0, 0, userCanvas.width, userCanvas.height);
    const userData = userImgData.data;

    // 3. Pixel comparison with spatial tolerance (dilation sample)
    let totalTargetPixels = 0;
    let coveredPixels = 0;
    let totalUserPixels = 0;
    let strayPixels = 0;

    // Sample every 4th pixel for speed & accuracy
    const step = 4;
    const width = userCanvas.width;
    const height = userCanvas.height;

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const idx = (y * width + x) * 4;
        const targetAlpha = targetData[idx + 3];
        const userAlpha = userData[idx + 3];

        const isTarget = targetAlpha > 50;
        const isUser = userAlpha > 50;

        if (isTarget) {
          totalTargetPixels++;
          if (isUser) {
            coveredPixels++;
          }
        }

        if (isUser) {
          totalUserPixels++;
          if (!isTarget) {
            // Check nearby 12px neighborhood to forgive slight misalignment
            let foundNearbyTarget = false;
            const searchR = 12 * dpr;
            for (let ny = Math.max(0, y - searchR); ny <= Math.min(height - 1, y + searchR); ny += 4) {
              for (let nx = Math.max(0, x - searchR); nx <= Math.min(width - 1, x + searchR); nx += 4) {
                const nIdx = (ny * width + nx) * 4;
                if (targetData[nIdx + 3] > 50) {
                  foundNearbyTarget = true;
                  break;
                }
              }
              if (foundNearbyTarget) break;
            }
            if (!foundNearbyTarget) {
              strayPixels++;
            }
          }
        }
      }
    }

    // Safety checks
    if (totalTargetPixels === 0) totalTargetPixels = 1;
    if (totalUserPixels === 0) totalUserPixels = 1;

    const coverageRate = Math.min(100, (coveredPixels / totalTargetPixels) * 100);
    const strayRatio = strayPixels / totalUserPixels;
    const strayPenalty = Math.min(45, strayRatio * 60);

    let finalScore = Math.round(Math.max(0, Math.min(100, (coverageRate * 1.1) - strayPenalty)));

    // Bonus for completed multi-stroke with high overlap
    if (coverageRate > 65 && strayRatio < 0.25) {
      finalScore = Math.min(100, Math.round(finalScore * 1.15));
    }

    setTimeout(() => {
      setIsEvaluating(false);

      if (finalScore >= 75) {
        soundService.playCelebration();
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
        if (onScoreUpdate) onScoreUpdate(50);
        if (exerciseType === 'letter' && onLetterComplete) {
          onLetterComplete(currentLetter.id);
        }

        setEvaluation({
          score: finalScore,
          status: 'excellent',
          title: `🌟 Mükemmel Yazım! (%${finalScore})`,
          message: 'Harika bir el yazısı! Çizgiler ve noktalar şablonla tam uyumlu.',
          advice: 'Tebrikler! +50 Puan kazandınız. Şimdi bir sonraki alıştırmaya geçebilirsiniz.'
        });
      } else if (finalScore >= 50) {
        soundService.playSuccess();
        if (onScoreUpdate) onScoreUpdate(20);

        setEvaluation({
          score: finalScore,
          status: 'good',
          title: `👍 Güzel Deneme! (%${finalScore})`,
          message: 'Harfin ana hatlarını doğru yakaladınız fakat bazı kıvrımlar eksik kaldı veya biraz taştı.',
          advice: 'İpucu: "Gölgeden Takip Et" modunu açarak kılavuz çizgilerinin üzerinden bir kez daha geçin.'
        });
      } else {
        soundService.playWrong();
        setEvaluation({
          score: finalScore,
          status: 'retry',
          title: `⚠️ Hatalı / Eksik Yazım (%${finalScore})`,
          message: 'Çiziminiz harfin şablonundan çok saptı veya bazı noktalar/kıvrımlar unutuldu.',
          advice: 'Dert etmeyin! 1. Aşama olan "Gölgeden Takip Et" butonuna basarak silik şablonun üzerinden tekrar yazın.'
        });
      }
    }, 300);
  };

  // Navigation handlers
  const handlePrev = () => {
    switchTarget(() => {
      if (exerciseType === 'letter') {
        const prevIdx = (letters.findIndex(l => l.id === selectedLetterId) - 1 + letters.length) % letters.length;
        const target = letters[prevIdx];
        setSelectedLetterId(target.id);
        loadStrokesForTarget(`letter_${target.id}_${positionMode}`);
        soundService.speakArabic(target.isolated);
      } else {
        const prevIdx = (selectedWordIndex - 1 + filteredWords.length) % filteredWords.length;
        setSelectedWordIndex(prevIdx);
        const target = filteredWords[prevIdx];
        loadStrokesForTarget(`word_${target.id}`);
        soundService.speakArabic(target.arabic);
      }
    });
  };

  const handleNext = () => {
    switchTarget(() => {
      if (exerciseType === 'letter') {
        const nextIdx = (letters.findIndex(l => l.id === selectedLetterId) + 1) % letters.length;
        const target = letters[nextIdx];
        setSelectedLetterId(target.id);
        loadStrokesForTarget(`letter_${target.id}_${positionMode}`);
        soundService.speakArabic(target.isolated);
      } else {
        const nextIdx = (selectedWordIndex + 1) % filteredWords.length;
        setSelectedWordIndex(nextIdx);
        const target = filteredWords[nextIdx];
        loadStrokesForTarget(`word_${target.id}`);
        soundService.speakArabic(target.arabic);
      }
    });
  };

  // Download user artwork
  const handleDownload = () => {
    soundService.playClick();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    if (tempCtx) {
      tempCtx.fillStyle = '#ffffff';
      tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
      tempCtx.drawImage(canvas, 0, 0);

      const link = document.createElement('a');
      const filename = exerciseType === 'letter'
        ? `arapca-harf-${currentLetter.name}-${positionMode}.png`
        : `arapca-kelime-${currentWord.transliteration}.png`;
      link.download = filename;
      link.href = tempCanvas.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <div className="writing-studio-container">
      {/* 1. Main Mode Selector: Harfler vs Kelimeler */}
      <div className="exercise-category-selector-card">
        <div className="exercise-types-tabs">
          <button
            className={`exercise-tab-btn ${exerciseType === 'letter' ? 'active' : ''}`}
            onClick={() => {
              soundService.playClick();
              switchTarget(() => {
                setExerciseType('letter');
                loadStrokesForTarget(`letter_${selectedLetterId}_${positionMode}`);
              });
            }}
          >
            <BookOpen size={18} />
            <span>Harf Alıştırmaları (29 Harf)</span>
          </button>

          <button
            className={`exercise-tab-btn ${exerciseType === 'word' ? 'active' : ''}`}
            onClick={() => {
              soundService.playClick();
              switchTarget(() => {
                setExerciseType('word');
                loadStrokesForTarget(`word_${currentWord.id}`);
              });
            }}
          >
            <FileText size={18} />
            <span>Kelime & Hece Yazımı ({vocabulary.length}+ Kelime)</span>
          </button>
        </div>

        {/* 2-Stage Pedagogy: Tracing vs Free */}
        <div className="tracing-stage-pill-box">
          <span className="stage-box-lbl">Öğrenme Aşaması:</span>
          <div className="stage-switch-btns">
            <button
              className={`stage-btn ${tracingStage === 'shadow' ? 'active' : ''}`}
              onClick={() => {
                soundService.playClick();
                setTracingStage('shadow');
                setShowGuide(true);
              }}
              title="Şablon üzerinden giderek pratik yapın"
            >
              <span>1. Gölgeden Takip Et</span>
            </button>

            <button
              className={`stage-btn ${tracingStage === 'free' ? 'active' : ''}`}
              onClick={() => {
                soundService.playClick();
                setTracingStage('free');
                setShowGuide(false);
              }}
              title="Rehbersiz kendi hafızanızdan yazın"
            >
              <span>2. Kendin Yaz (Sınav)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Top Header Navigation (Letter vs Word) */}
      <div className="studio-header">
        <div className="letter-nav-group">
          <button 
            className="icon-btn-circle" 
            onClick={handlePrev}
            title="Önceki Alıştırma"
            aria-label="Önceki Alıştırma"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Current Target Badge */}
          <div className="current-letter-badge" onClick={handlePlaySound}>
            <span className="badge-ar">{getTargetText()}</span>
            <div className="badge-info">
              {exerciseType === 'letter' ? (
                <>
                  <span className="badge-name">{currentLetter.name}</span>
                  <span className="badge-sub">{currentLetter.arabicName} ({currentLetter.type})</span>
                </>
              ) : (
                <>
                  <span className="badge-name">{currentWord.transliteration}</span>
                  <span className="badge-sub">{currentWord.meaning}</span>
                </>
              )}
            </div>
            <Volume2 size={18} className="badge-speaker" />
          </div>

          <button 
            className="icon-btn-circle" 
            onClick={handleNext}
            title="Sonraki Alıştırma"
            aria-label="Sonraki Alıştırma"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Position Selectors (Only in Letter Mode) */}
        {exerciseType === 'letter' ? (
          <div className="position-pills">
            {(['isolated', 'initial', 'medial', 'final'] as PositionMode[]).map((pos) => {
              const labels = {
                isolated: 'Yalın',
                initial: 'Başta',
                medial: 'Ortada',
                final: 'Sonda'
              };
              const chars = {
                isolated: currentLetter.isolated,
                initial: currentLetter.initial,
                medial: currentLetter.medial,
                final: currentLetter.final
              };

              return (
                <button
                  key={pos}
                  className={`position-pill ${positionMode === pos ? 'active' : ''}`}
                  onClick={() => {
                    soundService.playClick();
                    switchTarget(() => {
                      setPositionMode(pos);
                      loadStrokesForTarget(`letter_${selectedLetterId}_${pos}`);
                    });
                  }}
                >
                  <span className="pill-char">{chars[pos]}</span>
                  <span className="pill-text">{labels[pos]}</span>
                </button>
              );
            })}
          </div>
        ) : (
          /* Word Category Chips (in Word Mode) */
          <div className="word-category-chips">
            {[
              { id: 'all', label: 'Tüm Kelimeler' },
              { id: 'hece', label: '2 Harfli Hece' },
              { id: '3harfli', label: '3 Harfli Kelime' },
              { id: 'cezm_sedde', label: 'Cezm & Şedde' },
              { id: 'gunluk', label: 'Günlük Hayat' },
              { id: 'kuran', label: 'Kur’an' }
            ].map((cat) => (
              <button
                key={cat.id}
                className={`word-cat-chip ${selectedWordCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  soundService.playClick();
                  switchTarget(() => {
                    setSelectedWordCategory(cat.id);
                    setSelectedWordIndex(0);
                    const newFiltered = cat.id === 'all' 
                      ? vocabulary 
                      : vocabulary.filter(w => w.category === cat.id);
                    const firstWord = newFiltered[0] || vocabulary[0];
                    loadStrokesForTarget(`word_${firstWord.id}`);
                  });
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 3. Main Interactive Canvas */}
      <div className="canvas-wrapper-outer" ref={containerRef}>
        <div className="canvas-badge-tip">
          {tracingStage === 'shadow' ? (
            <span>👣 1. Aşama: Gölgenin üzerinden giderek yazılışı öğrenin</span>
          ) : (
            <span>✍️ 2. Aşama: Kılavuzsuz, hafızanızdan kendi başınıza yazın</span>
          )}
        </div>

        <canvas
          ref={canvasRef}
          className="interactive-drawing-canvas"
          style={{ touchAction: 'none' }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerUp}
        />

        {/* Floating Quick Action Overlay */}
        <div className="canvas-floating-controls">
          <button 
            className={`tool-action-btn ${showGuide ? 'active' : ''}`}
            onClick={() => {
              soundService.playClick();
              setShowGuide(!showGuide);
            }}
            title={showGuide ? 'Kılavuz Gölgeyi Gizle' : 'Kılavuz Gölgeyi Göster'}
          >
            {showGuide ? <Eye size={18} /> : <EyeOff size={18} />}
            <span className="btn-label">{showGuide ? 'Gölge Açık' : 'Gölge Gizli'}</span>
          </button>

          <button 
            className="tool-action-btn"
            onClick={handleUndo}
            disabled={strokes.length === 0}
            title="Son Çizgiyi Geri Al"
          >
            <RotateCcw size={18} />
            <span className="btn-label">Geri Al</span>
          </button>

          <button 
            className="tool-action-btn danger"
            onClick={handleClear}
            disabled={strokes.length === 0}
            title="Tuvali Temizle"
          >
            <Trash2 size={18} />
            <span className="btn-label">Temizle</span>
          </button>
        </div>
      </div>

      {/* 4. Bottom Controls: Colors, Sizes, Evaluate / Check Writing */}
      <div className="drawing-toolbar">
        {/* Pen / Eraser toggle */}
        <div className="tool-group">
          <button
            className={`tool-mode-btn ${!isEraser ? 'selected' : ''}`}
            onClick={() => {
              soundService.playClick();
              setIsEraser(false);
            }}
          >
            <PenTool size={16} />
            <span>Kalem</span>
          </button>
          <button
            className={`tool-mode-btn ${isEraser ? 'selected' : ''}`}
            onClick={() => {
              soundService.playClick();
              setIsEraser(true);
            }}
          >
            <Eraser size={16} />
            <span>Silgi</span>
          </button>
        </div>

        {/* Color Palette */}
        <div className="colors-group">
          {COLORS.map((c) => (
            <button
              key={c.value}
              className={`color-dot ${activeColor === c.value && !isEraser ? 'selected' : ''}`}
              style={{ backgroundColor: c.value }}
              onClick={() => {
                soundService.playClick();
                setActiveColor(c.value);
                setIsEraser(false);
              }}
              title={c.name}
            />
          ))}
        </div>

        {/* Brush Sizes */}
        <div className="brush-sizes-group">
          {BRUSH_SIZES.map((b) => (
            <button
              key={b.value}
              className={`size-btn ${brushWidth === b.value ? 'selected' : ''}`}
              onClick={() => {
                soundService.playClick();
                setBrushWidth(b.value);
              }}
              title={b.name}
            >
              <div 
                className="size-indicator-circle"
                style={{ width: `${b.value}px`, height: `${b.value}px` }} 
              />
            </button>
          ))}
        </div>

        {/* Actions: Evaluate & Download */}
        <div className="action-buttons-group">
          <button 
            className="btn-download"
            onClick={handleDownload}
            title="Yazını PNG Resmi Olarak İndir"
          >
            <Download size={16} />
            <span className="hide-mobile">Resmi İndir</span>
          </button>

          {/* AKILLI DEĞERLENDİRME BUTONU */}
          <button 
            className="btn-evaluate"
            onClick={evaluateWriting}
            disabled={isEvaluating}
            title="Yazımını Yapay Zeka / Piksel Analiziyle Kontrol Et"
          >
            <Award size={18} />
            <span>{isEvaluating ? 'İnceleniyor...' : 'Kontrol Et'}</span>
          </button>
        </div>
      </div>

      {/* 5. Evaluation & Error Warning Banner */}
      {evaluation && (
        <div className={`evaluation-result-card ${evaluation.status}`}>
          <div className="eval-card-header">
            <div className="eval-status-icon">
              {evaluation.status === 'excellent' && <CheckCircle2 size={24} />}
              {evaluation.status === 'good' && <Sparkles size={24} />}
              {evaluation.status === 'retry' && <XCircle size={24} />}
            </div>
            <div className="eval-text-block">
              <h4 className="eval-title">{evaluation.title}</h4>
              <p className="eval-message">{evaluation.message}</p>
            </div>
            <div className="eval-score-ring">
              <span className="ring-score">%{evaluation.score}</span>
              <span className="ring-lbl">Doğruluk</span>
            </div>
          </div>

          <div className="eval-advice-bar">
            <HelpCircle size={16} className="advice-ico" />
            <span>{evaluation.advice}</span>
          </div>

          {evaluation.status === 'retry' && (
            <div className="eval-actions-row">
              <button 
                className="btn-retry-action"
                onClick={() => {
                  setTracingStage('shadow');
                  setShowGuide(true);
                  handleClear();
                }}
              >
                👣 Gölge Modunu Aç ve Tekrar Dene
              </button>
            </div>
          )}
        </div>
      )}

      {/* 6. Contextual Makhraj & Letter/Word Tips */}
      <div className="makhraj-advice-box">
        {exerciseType === 'letter' ? (
          <>
            <div className="advice-title">
              <CheckCircle2 size={18} className="advice-icon" />
              <strong>Mahreç ve Yazım İpucu:</strong> {currentLetter.name} ({currentLetter.transliteration})
            </div>
            <p className="advice-desc">{currentLetter.makhraj}</p>
            <div className="advice-tips">
              <span className="tip-badge">{currentLetter.connectsNext ? 'Kendinden sonrakine bitişir' : '⚠️ Kendinden sonrakine BİTİŞMEZ'}</span>
              {currentLetter.isPeltek && <span className="tip-badge warning">👅 Peltek Harf</span>}
              <span className="tip-badge info">{currentLetter.type === 'kalın' ? 'Dolgun / Kalın Harf' : 'Zarif / İnce Harf'}</span>
            </div>
          </>
        ) : (
          <>
            <div className="advice-title">
              <CheckCircle2 size={18} className="advice-icon" />
              <strong>Kelime Alıştırması:</strong> {currentWord.transliteration} &bull; Anlamı: "{currentWord.meaning}"
            </div>
            <p className="advice-desc">
              Kelimeleri yazarken harflerin başta, ortada ve sonda birleşme noktalarına dikkat edin. 
              Önce "1. Gölgeden Takip Et" modunda harflerin birbirine nasıl bağlandığını elinizle hissedin, ardından "2. Kendin Yaz" modunda hafızanızı test edin.
            </p>
            <div className="advice-tips">
              <span className="tip-badge info">Kategori: {currentWord.categoryLabel}</span>
              <span className="tip-badge">Seviye: {currentWord.level}. Seviye</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
