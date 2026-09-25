import React, { useState, useMemo } from 'react';
import { VOCABULARY_DATA } from '../data/vocabularyData';
import type { VocabularyWord } from '../types';
import { soundService } from '../services/soundService';
import { 
  Volume2, 
  Search, 
  Sparkles, 
  Layers, 
  Shuffle, 
  Gauge
} from 'lucide-react';

export const ReadingPracticeTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeWordId, setActiveWordId] = useState<string>(VOCABULARY_DATA[0].id);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(0.85); // 0.85 normal, 0.6 slow
  const [syllableMode, setSyllableMode] = useState<boolean>(true);

  // Filtered vocabulary list
  const filteredWords = useMemo(() => {
    return VOCABULARY_DATA.filter((item) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        item.arabic.includes(q) ||
        item.transliteration.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q);

      if (!matchesSearch) return false;
      if (selectedCategory === 'all') return true;
      return item.category === selectedCategory;
    });
  }, [selectedCategory, searchQuery]);

  const activeWord = VOCABULARY_DATA.find(w => w.id === activeWordId) || filteredWords[0] || VOCABULARY_DATA[0];

  const handlePlayWord = (word: VocabularyWord) => {
    soundService.speakArabic(word.audioText, playbackSpeed);
  };

  const handlePlaySyllable = (syllableText: string, e: React.MouseEvent) => {
    e.stopPropagation();
    soundService.speakArabic(syllableText, 0.8);
  };

  const handleRandomWord = () => {
    soundService.playClick();
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    const chosen = filteredWords[randomIndex];
    if (chosen) {
      setActiveWordId(chosen.id);
      handlePlayWord(chosen);
    }
  };

  return (
    <div className="tab-pane-container">
      {/* Hero Header */}
      <div className="section-hero-card">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Çok Örnekli Okuma Kütüphanesi</span>
          </div>
          <h2 className="hero-title">İnteraktif Arapça Okuma ve Heceleme</h2>
          <p className="hero-desc">
            Harekeli hecelerden başlayıp 3 harfli fiillere, cezmli-şeddeli kelimelerden Kur'an ayet kelimelerine kadar 
            zengin örnekleri inceleyin. Heceleme moduyla kelimeleri parça parça dinleyebilirsiniz.
          </p>
        </div>
      </div>

      {/* Featured Word Interactive Master Card */}
      {activeWord && (
        <div className="active-word-spotlight">
          <div className="spotlight-top-bar">
            <span className="spotlight-category-tag">{activeWord.categoryLabel}</span>
            <div className="spotlight-controls">
              {/* Speed toggle */}
              <button
                className={`speed-toggle-btn ${playbackSpeed < 0.8 ? 'slow' : ''}`}
                onClick={() => {
                  soundService.playClick();
                  setPlaybackSpeed(playbackSpeed === 0.85 ? 0.6 : 0.85);
                }}
                title="Ses Hızını Değiştir"
              >
                <Gauge size={16} />
                <span>{playbackSpeed === 0.85 ? 'Normal Hız' : 'Yavaş Okunuş'}</span>
              </button>

              <button
                className={`syllables-toggle-btn ${syllableMode ? 'active' : ''}`}
                onClick={() => {
                  soundService.playClick();
                  setSyllableMode(!syllableMode);
                }}
                title="Heceleme Modunu Aç/Kapat"
              >
                <Layers size={16} />
                <span>Heceleme Modu</span>
              </button>

              <button
                className="random-word-btn"
                onClick={handleRandomWord}
                title="Rastgele Farklı Bir Kelime Seç"
              >
                <Shuffle size={16} />
                <span>Rastgele Kelime</span>
              </button>
            </div>
          </div>

          {/* Big Arabic Display */}
          <div className="spotlight-arabic-wrap" onClick={() => handlePlayWord(activeWord)}>
            <span className="spotlight-arabic-text">{activeWord.arabic}</span>
            <button className="spotlight-play-fab" title="Tüm Kelimeyi Dinle">
              <Volume2 size={24} />
            </button>
          </div>

          {/* Syllable Breakdown */}
          {syllableMode && activeWord.syllables && activeWord.syllables.length > 0 && (
            <div className="syllables-breakdown-container">
              <span className="syllables-guide-lbl">Heceleri Dinlemek İçin Dokunun:</span>
              <div className="syllables-cards-list">
                {activeWord.syllables.map((syl, sIdx) => (
                  <button
                    key={sIdx}
                    className="syllable-pill-btn"
                    onClick={(e) => handlePlaySyllable(syl.arabic, e)}
                  >
                    <span className="syl-arabic">{syl.arabic}</span>
                    <span className="syl-translit">{syl.transliteration}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Meaning & Transliteration */}
          <div className="spotlight-meaning-row">
            <div className="meaning-item">
              <span className="meaning-label">Okunuş (Türkçe):</span>
              <span className="meaning-val translit">{activeWord.transliteration}</span>
            </div>
            <div className="meaning-item">
              <span className="meaning-label">Anlamı:</span>
              <span className="meaning-val">{activeWord.meaning}</span>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Controls */}
      <div className="controls-row">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Kelime ara (Arapça, Türkçe okunuş veya anlam)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button className="search-clear-btn" onClick={() => setSearchQuery('')}>×</button>
          )}
        </div>

        <div className="filter-chips-scroll">
          <button
            className={`chip-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => { soundService.playClick(); setSelectedCategory('all'); }}
          >
            Tüm Kelimeler ({VOCABULARY_DATA.length})
          </button>
          <button
            className={`chip-btn ${selectedCategory === 'hece' ? 'active' : ''}`}
            onClick={() => { soundService.playClick(); setSelectedCategory('hece'); }}
          >
            1. Seviye: 2 Harfli Heceler
          </button>
          <button
            className={`chip-btn ${selectedCategory === '3harfli' ? 'active' : ''}`}
            onClick={() => { soundService.playClick(); setSelectedCategory('3harfli'); }}
          >
            2. Seviye: 3 Harfli Kelimeler
          </button>
          <button
            className={`chip-btn ${selectedCategory === 'cezm_sedde' ? 'active' : ''}`}
            onClick={() => { soundService.playClick(); setSelectedCategory('cezm_sedde'); }}
          >
            3. Seviye: Cezmli & Şeddeli
          </button>
          <button
            className={`chip-btn ${selectedCategory === 'gunluk' ? 'active' : ''}`}
            onClick={() => { soundService.playClick(); setSelectedCategory('gunluk'); }}
          >
            4. Seviye: Günlük Hayat
          </button>
          <button
            className={`chip-btn ${selectedCategory === 'kuran' ? 'active' : ''}`}
            onClick={() => { soundService.playClick(); setSelectedCategory('kuran'); }}
          >
            5. Seviye: Kur'an Kelimeleri
          </button>
        </div>
      </div>

      {/* Words Grid Cards */}
      <div className="vocab-grid">
        {filteredWords.map((word) => {
          const isCurrentActive = word.id === activeWord.id;
          return (
            <div
              key={word.id}
              className={`vocab-card ${isCurrentActive ? 'selected' : ''}`}
              onClick={() => {
                setActiveWordId(word.id);
                handlePlayWord(word);
              }}
            >
              <div className="vocab-card-header">
                <span className="vocab-tag">{word.categoryLabel}</span>
                <button
                  className="vocab-audio-icon"
                  title="Dinle"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayWord(word);
                  }}
                >
                  <Volume2 size={16} />
                </button>
              </div>

              <div className="vocab-arabic-center">
                <span className="vocab-ar-text">{word.arabic}</span>
              </div>

              <div className="vocab-meta-footer">
                <span className="vocab-translit">{word.transliteration}</span>
                <span className="vocab-meaning">{word.meaning}</span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredWords.length === 0 && (
        <div className="empty-results-box">
          <p>Arama kriterinize uygun kelime bulunamadı.</p>
          <button className="btn-secondary" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
            Tüm Kelimeleri Göster
          </button>
        </div>
      )}
    </div>
  );
};
