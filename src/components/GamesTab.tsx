import React, { useState, useEffect, useCallback } from 'react';
import type { ArabicLetter, VocabularyWord } from '../types';
import { soundService } from '../services/soundService';
import { 
  Volume2, 
  Sparkles, 
  Trophy, 
  RotateCcw, 
  CheckCircle, 
  XCircle,
  HelpCircle,
  Zap,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface GamesTabProps {
  letters: ArabicLetter[];
  vocabulary: VocabularyWord[];
  onScoreUpdate?: (points: number) => void;
}

type GameMode = 'listen' | 'position' | 'builder' | 'memory';

interface MemoryCard {
  id: string;
  uniqueId: number;
  content: string;
  type: 'letter' | 'name';
  matched: boolean;
  flipped: boolean;
}

export const GamesTab: React.FC<GamesTabProps> = ({
  letters,
  vocabulary,
  onScoreUpdate
}) => {
  const [activeGame, setActiveGame] = useState<GameMode>('listen');
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);

  // --- OYUN 1: Sesi Dinle, Harfi Bul ---
  const [listenTarget, setListenTarget] = useState<ArabicLetter | null>(null);
  const [listenOptions, setListenOptions] = useState<ArabicLetter[]>([]);
  const [listenAnswered, setListenAnswered] = useState<string | null>(null);
  const [listenResult, setListenResult] = useState<'correct' | 'wrong' | null>(null);

  const initListenRound = useCallback(() => {
    setListenAnswered(null);
    setListenResult(null);

    // Pick random letter as target
    const target = letters[Math.floor(Math.random() * letters.length)];
    // Pick 3 other random distinct letters
    const otherLetters = letters.filter(l => l.id !== target.id);
    const shuffledOthers = [...otherLetters].sort(() => 0.5 - Math.random()).slice(0, 3);
    const allOptions = [target, ...shuffledOthers].sort(() => 0.5 - Math.random());

    setListenTarget(target);
    setListenOptions(allOptions);

    // Auto play target sound after short delay
    setTimeout(() => {
      soundService.speakArabic(target.isolated);
    }, 200);
  }, [letters]);

  const handleListenGuess = (selectedLetter: ArabicLetter) => {
    if (listenAnswered || !listenTarget) return;

    setListenAnswered(selectedLetter.id);
    if (selectedLetter.id === listenTarget.id) {
      soundService.playSuccess();
      setListenResult('correct');
      setScore(s => s + 10);
      setStreak(st => st + 1);
      confetti({ particleCount: 40, spread: 50 });
      if (onScoreUpdate) onScoreUpdate(10);
    } else {
      soundService.playWrong();
      setListenResult('wrong');
      setStreak(0);
    }
  };

  // --- OYUN 2: Konum Eşleştirme (Başta/Ortada/Sonda) ---
  const [posTargetLetter, setPosTargetLetter] = useState<ArabicLetter | null>(null);
  const [posTargetPosition, setPosTargetPosition] = useState<'initial' | 'medial' | 'final'>('initial');
  const [posOptions, setPosOptions] = useState<string[]>([]);
  const [posCorrectOption, setPosCorrectOption] = useState<string>('');
  const [posAnswered, setPosAnswered] = useState<string | null>(null);
  const [posResult, setPosResult] = useState<'correct' | 'wrong' | null>(null);

  const initPosRound = useCallback(() => {
    setPosAnswered(null);
    setPosResult(null);

    // Pick target letter that connects to next (so it has clear distinct forms)
    const connectableLetters = letters.filter(l => l.connectsNext && l.id !== 'alif');
    const target = connectableLetters[Math.floor(Math.random() * connectableLetters.length)];

    const positions: Array<'initial' | 'medial' | 'final'> = ['initial', 'medial', 'final'];
    const chosenPos = positions[Math.floor(Math.random() * positions.length)];

    let correctChar = target.initial;
    if (chosenPos === 'medial') correctChar = target.medial;
    if (chosenPos === 'final') correctChar = target.final;

    // Distractor options from other forms of same letter or other letters
    const distractors = [
      target.isolated,
      chosenPos !== 'initial' ? target.initial : target.final,
      letters[Math.floor(Math.random() * letters.length)].medial
    ].filter(ch => ch !== correctChar);

    const options = Array.from(new Set([correctChar, ...distractors])).slice(0, 4);
    while (options.length < 4) {
      options.push(letters[Math.floor(Math.random() * letters.length)].isolated);
    }

    setPosTargetLetter(target);
    setPosTargetPosition(chosenPos);
    setPosCorrectOption(correctChar);
    setPosOptions(options.sort(() => 0.5 - Math.random()));
  }, [letters]);

  const handlePosGuess = (char: string) => {
    if (posAnswered) return;
    setPosAnswered(char);

    if (char === posCorrectOption) {
      soundService.playSuccess();
      setPosResult('correct');
      setScore(s => s + 15);
      setStreak(st => st + 1);
      confetti({ particleCount: 40, spread: 50 });
      if (onScoreUpdate) onScoreUpdate(15);
    } else {
      soundService.playWrong();
      setPosResult('wrong');
      setStreak(0);
    }
  };

  // --- OYUN 3: Harf Sıralama & Kelime Kurma (Word Builder) ---
  const [builderWord, setBuilderWord] = useState<VocabularyWord | null>(null);
  const [scrambledLetters, setScrambledLetters] = useState<string[]>([]);
  const [userLetters, setUserLetters] = useState<string[]>([]);
  const [builderComplete, setBuilderComplete] = useState<boolean>(false);

  const initBuilderRound = useCallback(() => {
    setUserLetters([]);
    setBuilderComplete(false);

    // Pick 3-letter word from vocabulary
    const simpleWords = vocabulary.filter(w => w.category === '3harfli');
    const word = simpleWords[Math.floor(Math.random() * simpleWords.length)] || vocabulary[0];

    // Split word's syllables or letters
    const rawLetters = word.syllables.map(s => s.arabic);
    const shuffled = [...rawLetters].sort(() => 0.5 - Math.random());

    setBuilderWord(word);
    setScrambledLetters(shuffled);
  }, [vocabulary]);

  const handlePickBuilderLetter = (char: string, index: number) => {
    if (builderComplete || !builderWord) return;
    soundService.playClick();

    const newUserLetters = [...userLetters, char];
    setUserLetters(newUserLetters);

    // Remove from scrambled pool
    const newScrambled = [...scrambledLetters];
    newScrambled.splice(index, 1);
    setScrambledLetters(newScrambled);

    // Check if finished
    const expected = builderWord.syllables.map(s => s.arabic).join('');
    const current = newUserLetters.join('');

    if (newScrambled.length === 0) {
      if (current === expected) {
        soundService.playCelebration();
        setBuilderComplete(true);
        setScore(s => s + 25);
        setStreak(st => st + 1);
        confetti({ particleCount: 60, spread: 70 });
        if (onScoreUpdate) onScoreUpdate(25);
      } else {
        soundService.playWrong();
      }
    }
  };

  const handleResetBuilder = () => {
    if (!builderWord) return;
    soundService.playClick();
    setUserLetters([]);
    const rawLetters = builderWord.syllables.map(s => s.arabic);
    setScrambledLetters([...rawLetters].sort(() => 0.5 - Math.random()));
    setBuilderComplete(false);
  };

  // --- OYUN 4: Hafıza Kartları (Memory Match) ---
  const [memoryCards, setMemoryCards] = useState<MemoryCard[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [memoryMoves, setMemoryMoves] = useState<number>(0);
  const [memoryComplete, setMemoryComplete] = useState<boolean>(false);

  const initMemoryGame = useCallback(() => {
    setFlippedIndices([]);
    setMemoryMoves(0);
    setMemoryComplete(false);

    // Pick 6 random letters
    const sample = [...letters].sort(() => 0.5 - Math.random()).slice(0, 6);
    const cards: MemoryCard[] = [];

    sample.forEach((item, idx) => {
      // Letter card
      cards.push({
        id: item.id,
        uniqueId: idx * 2,
        content: item.isolated,
        type: 'letter',
        matched: false,
        flipped: false
      });
      // Name card
      cards.push({
        id: item.id,
        uniqueId: idx * 2 + 1,
        content: item.name,
        type: 'name',
        matched: false,
        flipped: false
      });
    });

    setMemoryCards(cards.sort(() => 0.5 - Math.random()));
  }, [letters]);

  const handleFlipCard = (cardIdx: number) => {
    if (flippedIndices.length === 2) return;
    const card = memoryCards[cardIdx];
    if (card.flipped || card.matched) return;

    soundService.playClick();
    if (card.type === 'letter') {
      soundService.speakArabic(card.content);
    }

    const newCards = [...memoryCards];
    newCards[cardIdx].flipped = true;
    setMemoryCards(newCards);

    const newFlipped = [...flippedIndices, cardIdx];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setMemoryMoves(m => m + 1);
      const card1 = newCards[newFlipped[0]];
      const card2 = newCards[newFlipped[1]];

      if (card1.id === card2.id) {
        // MATCH!
        setTimeout(() => {
          soundService.playSuccess();
          const matchedCards = memoryCards.map(c => 
            c.id === card1.id ? { ...c, matched: true, flipped: true } : c
          );
          setMemoryCards(matchedCards);
          setFlippedIndices([]);
          setScore(s => s + 20);

          if (matchedCards.every(c => c.matched)) {
            soundService.playCelebration();
            setMemoryComplete(true);
            confetti({ particleCount: 70, spread: 80 });
          }
        }, 500);
      } else {
        // NO MATCH
        setTimeout(() => {
          const resetCards = memoryCards.map((c, idx) => 
            idx === newFlipped[0] || idx === newFlipped[1] ? { ...c, flipped: false } : c
          );
          setMemoryCards(resetCards);
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  // Init games on mount & tab switch
  useEffect(() => {
    if (activeGame === 'listen') initListenRound();
    if (activeGame === 'position') initPosRound();
    if (activeGame === 'builder') initBuilderRound();
    if (activeGame === 'memory') initMemoryGame();
  }, [activeGame, initListenRound, initPosRound, initBuilderRound, initMemoryGame]);

  return (
    <div className="tab-pane-container">
      {/* Game Mode Selector & Score Tracker Header */}
      <div className="games-meta-header">
        <div className="game-modes-pills">
          <button
            className={`game-nav-tab ${activeGame === 'listen' ? 'active' : ''}`}
            onClick={() => setActiveGame('listen')}
          >
            <Volume2 size={16} />
            <span>Sesi Dinle, Harfi Bul</span>
          </button>
          <button
            className={`game-nav-tab ${activeGame === 'position' ? 'active' : ''}`}
            onClick={() => setActiveGame('position')}
          >
            <Layers size={16} />
            <span>Yazılış Eşleştir</span>
          </button>
          <button
            className={`game-nav-tab ${activeGame === 'builder' ? 'active' : ''}`}
            onClick={() => setActiveGame('builder')}
          >
            <Zap size={16} />
            <span>Kelime Kur</span>
          </button>
          <button
            className={`game-nav-tab ${activeGame === 'memory' ? 'active' : ''}`}
            onClick={() => setActiveGame('memory')}
          >
            <Sparkles size={16} />
            <span>Hafıza Kartları</span>
          </button>
        </div>

        <div className="score-badge-card">
          <div className="score-item">
            <Trophy size={18} className="score-icon gold" />
            <span className="score-val">{score} Puan</span>
          </div>
          {streak > 1 && (
            <div className="streak-item">
              <span className="streak-flame">🔥</span>
              <span className="streak-val">{streak} Seri!</span>
            </div>
          )}
        </div>
      </div>

      {/* GAME 1: Sesi Dinle, Harfi Bul */}
      {activeGame === 'listen' && listenTarget && (
        <div className="game-stage-card">
          <div className="game-prompt-box">
            <span className="game-stage-tag">İşitsel Test</span>
            <h3 className="game-question-text">Okunan harf hangisidir?</h3>
            <p className="game-help-sub">Sesi tekrar duymak için aşağıdaki hoparlöre dokunun.</p>
            <button
              className="game-audio-big-btn"
              onClick={() => soundService.speakArabic(listenTarget.isolated)}
              title="Sesi Tekrar Çal"
            >
              <Volume2 size={36} />
              <span>Sesi Dinle</span>
            </button>
          </div>

          <div className="game-options-grid four">
            {listenOptions.map((opt) => {
              const isSelected = listenAnswered === opt.id;
              const isTarget = opt.id === listenTarget.id;
              let btnClass = 'quiz-opt-btn';

              if (listenAnswered) {
                if (isTarget) btnClass += ' correct';
                else if (isSelected) btnClass += ' wrong';
              }

              return (
                <button
                  key={opt.id}
                  className={btnClass}
                  onClick={() => handleListenGuess(opt)}
                  disabled={listenAnswered !== null}
                >
                  <span className="opt-ar">{opt.isolated}</span>
                  {listenAnswered && <span className="opt-name">{opt.name}</span>}
                </button>
              );
            })}
          </div>

          {listenAnswered && (
            <div className="game-feedback-footer">
              <div className={`feedback-alert ${listenResult}`}>
                {listenResult === 'correct' ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Harika! Doğru cevap: <strong>{listenTarget.name} ({listenTarget.isolated})</strong></span>
                  </>
                ) : (
                  <>
                    <XCircle size={20} />
                    <span>Yanlış! Doğru cevap <strong>{listenTarget.name} ({listenTarget.isolated})</strong> olmalıydı.</span>
                  </>
                )}
              </div>
              <button className="btn-next-round" onClick={initListenRound}>
                Sonraki Soru &rarr;
              </button>
            </div>
          )}
        </div>
      )}

      {/* GAME 2: Yazılış Eşleştir (Başta, Ortada, Sonda) */}
      {activeGame === 'position' && posTargetLetter && (
        <div className="game-stage-card">
          <div className="game-prompt-box">
            <span className="game-stage-tag">Yazılış Kuralları Testi</span>
            <h3 className="game-question-text">
              <strong>{posTargetLetter.name} ({posTargetLetter.isolated})</strong> harfinin{' '}
              <span className="highlight-pos">
                {posTargetPosition === 'initial' && 'BAŞTA'}
                {posTargetPosition === 'medial' && 'ORTADA'}
                {posTargetPosition === 'final' && 'SONDA'}
              </span>{' '}
              yazılışı hangisidir?
            </h3>
            <button
              className="btn-hear-letter"
              onClick={() => soundService.speakArabic(posTargetLetter.isolated)}
            >
              <Volume2 size={16} /> Harfi Dinle
            </button>
          </div>

          <div className="game-options-grid four">
            {posOptions.map((optChar, idx) => {
              const isSelected = posAnswered === optChar;
              const isTarget = optChar === posCorrectOption;
              let btnClass = 'quiz-opt-btn';

              if (posAnswered) {
                if (isTarget) btnClass += ' correct';
                else if (isSelected) btnClass += ' wrong';
              }

              return (
                <button
                  key={idx}
                  className={btnClass}
                  onClick={() => handlePosGuess(optChar)}
                  disabled={posAnswered !== null}
                >
                  <span className="opt-ar">{optChar}</span>
                </button>
              );
            })}
          </div>

          {posAnswered && (
            <div className="game-feedback-footer">
              <div className={`feedback-alert ${posResult}`}>
                {posResult === 'correct' ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Tebrikler! Doğru form: <strong>{posCorrectOption}</strong></span>
                  </>
                ) : (
                  <>
                    <XCircle size={20} />
                    <span>Yanlış! Doğru form <strong>{posCorrectOption}</strong> idi.</span>
                  </>
                )}
              </div>
              <button className="btn-next-round" onClick={initPosRound}>
                Sonraki Soru &rarr;
              </button>
            </div>
          )}
        </div>
      )}

      {/* GAME 3: Harf Sıralama & Kelime Kurma */}
      {activeGame === 'builder' && builderWord && (
        <div className="game-stage-card">
          <div className="game-prompt-box">
            <span className="game-stage-tag">Kelime Oluşturma</span>
            <h3 className="game-question-text">Harfleri Sırasıyla Seçerek Kelimeyi Oluşturun</h3>
            <div className="builder-target-badge">
              <span className="meaning">{builderWord.meaning}</span>
              <span className="translit">({builderWord.transliteration})</span>
            </div>
          </div>

          {/* User's Assembled Word Display (RTL) */}
          <div className="assembled-word-box">
            <span className="assembled-guide">Oluşturulan Kelime (Sağdan Sola):</span>
            <div className="assembled-slots-row">
              {userLetters.length === 0 ? (
                <span className="empty-hint">Harflere dokunarak buraya ekleyin...</span>
              ) : (
                userLetters.map((char, uIdx) => (
                  <span key={uIdx} className="slot-char">{char}</span>
                ))
              )}
            </div>
          </div>

          {/* Scrambled Pickable Letters */}
          <div className="scrambled-letters-row">
            {scrambledLetters.map((char, cIdx) => (
              <button
                key={cIdx}
                className="scrambled-char-chip"
                onClick={() => handlePickBuilderLetter(char, cIdx)}
              >
                {char}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="builder-actions-row">
            <button className="btn-secondary" onClick={handleResetBuilder}>
              <RotateCcw size={16} /> Sıfırla
            </button>
            <button 
              className="btn-hear-letter"
              onClick={() => soundService.speakArabic(builderWord.audioText)}
            >
              <Volume2 size={16} /> Kelimeyi Dinle
            </button>
          </div>

          {builderComplete && (
            <div className="game-feedback-footer">
              <div className="feedback-alert correct">
                <CheckCircle size={20} />
                <span>Harika! <strong>{builderWord.arabic}</strong> kelimesini başarıyla kurdunuz! (+25 Puan)</span>
              </div>
              <button className="btn-next-round" onClick={initBuilderRound}>
                Yeni Kelime &rarr;
              </button>
            </div>
          )}
        </div>
      )}

      {/* GAME 4: Hafıza Kartları Oyunu */}
      {activeGame === 'memory' && (
        <div className="game-stage-card">
          <div className="game-prompt-box">
            <span className="game-stage-tag">Hafıza Eşleştirme</span>
            <h3 className="game-question-text">Harf ile Türkçe Adını Eşleştirin</h3>
            <div className="memory-stats-strip">
              <span>Hamle Sayısı: <strong>{memoryMoves}</strong></span>
              {memoryComplete && <span className="winner-tag">🏆 Tebrikler, tamamladınız!</span>}
            </div>
          </div>

          <div className="memory-cards-grid">
            {memoryCards.map((card, idx) => (
              <div
                key={card.uniqueId}
                className={`memory-card-flipper ${card.flipped ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`}
                onClick={() => handleFlipCard(idx)}
              >
                <div className="card-face card-front">
                  <HelpCircle size={24} className="card-qmark" />
                </div>
                <div className="card-face card-back">
                  <span className={`card-content ${card.type}`}>
                    {card.content}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="memory-footer-row">
            <button className="btn-secondary" onClick={initMemoryGame}>
              <RotateCcw size={16} /> Yeni Oyun Başlat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
