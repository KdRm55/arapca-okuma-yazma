import { useState, useEffect } from 'react';
import type { ActiveTab, ArabicLetter } from './types';
import { ALPHABET_DATA } from './data/alphabetData';
import { VOCABULARY_DATA } from './data/vocabularyData';
import { soundService } from './services/soundService';

import { Navbar } from './components/Navbar';
import { AlphabetTab } from './components/AlphabetTab';
import { WritingCanvas } from './components/WritingCanvas';
import { RulesTab } from './components/RulesTab';
import { ReadingPracticeTab } from './components/ReadingPracticeTab';
import { GamesTab } from './components/GamesTab';
import { LetterDetailModal } from './components/LetterDetailModal';

export function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('letters');
  const [selectedLetterForWrite, setSelectedLetterForWrite] = useState<string>('alif');
  const [detailLetter, setDetailLetter] = useState<ArabicLetter | null>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [totalPoints, setTotalPoints] = useState<number>(() => {
    const saved = localStorage.getItem('elifba_points');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [completedLetters, setCompletedLetters] = useState<string[]>(() => {
    const saved = localStorage.getItem('elifba_completed_letters');
    return saved ? JSON.parse(saved) : [];
  });

  // Save points to localStorage
  useEffect(() => {
    localStorage.setItem('elifba_points', totalPoints.toString());
  }, [totalPoints]);

  useEffect(() => {
    localStorage.setItem('elifba_completed_letters', JSON.stringify(completedLetters));
  }, [completedLetters]);

  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    soundService.setSoundEnabled(nextState);
  };

  const handleSelectLetterForWrite = (letterId: string) => {
    setSelectedLetterForWrite(letterId);
    setActiveTab('write');
  };

  const handleLetterComplete = (letterId: string) => {
    if (!completedLetters.includes(letterId)) {
      setCompletedLetters(prev => [...prev, letterId]);
      setTotalPoints(p => p + 30);
    }
  };

  const handleScoreAdd = (points: number) => {
    setTotalPoints(p => p + points);
  };

  return (
    <div className="app-layout-root">
      {/* Top Navbar & Mobile Bottom Bar */}
      <Navbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        totalPoints={totalPoints}
      />

      {/* Main Content Area */}
      <main className="app-main-viewport">
        <div className="main-content-wrapper">
          <div style={{ display: activeTab === 'letters' ? 'block' : 'none' }}>
            <AlphabetTab
              letters={ALPHABET_DATA}
              onSelectLetterForWrite={handleSelectLetterForWrite}
              onOpenLetterDetail={(letter) => setDetailLetter(letter)}
              completedLetters={completedLetters}
            />
          </div>

          <div style={{ display: activeTab === 'write' ? 'block' : 'none' }}>
            <WritingCanvas
              letters={ALPHABET_DATA}
              vocabulary={VOCABULARY_DATA}
              initialLetterId={selectedLetterForWrite}
              onLetterComplete={handleLetterComplete}
              onScoreUpdate={handleScoreAdd}
            />
          </div>

          <div style={{ display: activeTab === 'rules' ? 'block' : 'none' }}>
            <RulesTab />
          </div>

          <div style={{ display: activeTab === 'read' ? 'block' : 'none' }}>
            <ReadingPracticeTab />
          </div>

          <div style={{ display: activeTab === 'games' ? 'block' : 'none' }}>
            <GamesTab
              letters={ALPHABET_DATA}
              vocabulary={VOCABULARY_DATA}
              onScoreUpdate={handleScoreAdd}
            />
          </div>
        </div>
      </main>

      {/* Detail Modal */}
      <LetterDetailModal
        letter={detailLetter}
        onClose={() => setDetailLetter(null)}
        onGoToWrite={handleSelectLetterForWrite}
      />
    </div>
  );
}

export default App;
