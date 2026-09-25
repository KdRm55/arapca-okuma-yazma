export type LetterType = 'ince' | 'kalın';

export interface LetterExample {
  word: string;
  transliteration: string;
  meaning: string;
  position: 'isolated' | 'initial' | 'medial' | 'final';
}

export interface ArabicLetter {
  id: string;
  index: number;
  name: string;
  arabicName: string;
  transliteration: string;
  isolated: string;
  initial: string;
  medial: string;
  final: string;
  type: LetterType;
  isPeltek?: boolean;
  connectsNext: boolean; // Kendinden sonrasına bitişir mi?
  makhraj: string; // Mahreç / Telaffuz yeri açıklaması
  tips: string;
  examples: LetterExample[];
}

export interface HarekeRule {
  id: string;
  name: string;
  turkishName: string;
  symbol: string;
  symbolSample: string;
  description: string;
  soundEffectTr: string;
  examples: {
    letter: string;
    harekeli: string;
    reading: string;
  }[];
}

export interface SyllablePart {
  arabic: string;
  transliteration: string;
  meaning?: string;
  isMain?: boolean;
}

export interface VocabularyWord {
  id: string;
  arabic: string;
  transliteration: string;
  meaning: string;
  category: '3harfli' | '4harfli' | 'cezm_sedde' | 'gunluk' | 'kuran';
  categoryLabel: string;
  level: 1 | 2 | 3 | 4 | 5;
  syllables: SyllablePart[];
  audioText: string;
}

export type ActiveTab = 'letters' | 'write' | 'rules' | 'read' | 'games';

export interface UserProgress {
  stars: number;
  completedLetters: string[];
  gamesPlayed: number;
  highScore: number;
}
