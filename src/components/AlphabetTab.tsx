import React, { useState, useMemo } from 'react';
import type { ArabicLetter } from '../types';
import { soundService } from '../services/soundService';
import { Search, Volume2, Edit3, Info, Sparkles } from 'lucide-react';

interface AlphabetTabProps {
  letters: ArabicLetter[];
  onSelectLetterForWrite: (letterId: string) => void;
  onOpenLetterDetail: (letter: ArabicLetter) => void;
  completedLetters?: string[];
}

type FilterType = 'all' | 'kalin' | 'ince' | 'peltek' | 'non_connecting';

export const AlphabetTab: React.FC<AlphabetTabProps> = ({
  letters,
  onSelectLetterForWrite,
  onOpenLetterDetail,
  completedLetters = []
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredLetters = useMemo(() => {
    return letters.filter((l) => {
      // Search
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        l.name.toLowerCase().includes(q) ||
        l.transliteration.toLowerCase().includes(q) ||
        l.arabicName.includes(q) ||
        l.isolated.includes(q);

      if (!matchesSearch) return false;

      // Category filter
      if (activeFilter === 'kalin') return l.type === 'kalın';
      if (activeFilter === 'ince') return l.type === 'ince';
      if (activeFilter === 'peltek') return !!l.isPeltek;
      if (activeFilter === 'non_connecting') return !l.connectsNext;

      return true;
    });
  }, [letters, searchQuery, activeFilter]);

  const handleCardClick = (letter: ArabicLetter, e: React.MouseEvent) => {
    e.stopPropagation();
    soundService.speakArabic(letter.isolated);
    onOpenLetterDetail(letter);
  };

  const handleQuickWrite = (letterId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    soundService.playClick();
    onSelectLetterForWrite(letterId);
  };

  return (
    <div className="tab-pane-container">
      {/* Intro Hero Banner */}
      <div className="section-hero-card">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Elifba Temeli</span>
          </div>
          <h2 className="hero-title">Arap Alfabesi ve Mahreç Rehberi</h2>
          <p className="hero-desc">
            Arap alfabesinde 28 harf bulunur ve sağdan sola yazılır. Harflerin üzerine tıklayarak doğru telaffuzunu dinleyebilir, 
            yazılış formlarını inceleyebilir ve yazma tahtasında pratik yapabilirsiniz.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="controls-row">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Harf adı veya sesi ara (örn: Elif, Ba, ث)..."
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
            className={`chip-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => { soundService.playClick(); setActiveFilter('all'); }}
          >
            Tümü ({letters.length})
          </button>
          <button
            className={`chip-btn ${activeFilter === 'kalin' ? 'active' : ''}`}
            onClick={() => { soundService.playClick(); setActiveFilter('kalin'); }}
          >
            Kalın Harfler
          </button>
          <button
            className={`chip-btn ${activeFilter === 'ince' ? 'active' : ''}`}
            onClick={() => { soundService.playClick(); setActiveFilter('ince'); }}
          >
            İnce Harfler
          </button>
          <button
            className={`chip-btn ${activeFilter === 'peltek' ? 'active' : ''}`}
            onClick={() => { soundService.playClick(); setActiveFilter('peltek'); }}
          >
            👅 Peltekler (ث, ذ, ظ)
          </button>
          <button
            className={`chip-btn ${activeFilter === 'non_connecting' ? 'active' : ''}`}
            onClick={() => { soundService.playClick(); setActiveFilter('non_connecting'); }}
          >
            🔗 Bitişmeyenler (6 Harf)
          </button>
        </div>
      </div>

      {/* Letters Grid */}
      <div className="alphabet-grid">
        {filteredLetters.map((letter) => {
          const isCompleted = completedLetters.includes(letter.id);
          return (
            <div
              key={letter.id}
              className={`letter-card ${isCompleted ? 'completed' : ''}`}
              onClick={(e) => handleCardClick(letter, e)}
            >
              <div className="card-top-row">
                <span className="letter-index">#{letter.index}</span>
                <div className="card-badges">
                  {letter.isPeltek && <span className="mini-tag peltek">Peltek</span>}
                  <span className={`mini-tag ${letter.type}`}>{letter.type === 'kalın' ? 'Kalın' : 'İnce'}</span>
                  {!letter.connectsNext && <span className="mini-tag no-conn">Bitişmez</span>}
                </div>
              </div>

              {/* Main Arabic Glyphs */}
              <div className="card-glyph-container">
                <span className="arabic-isolated-glyph">{letter.isolated}</span>
              </div>

              {/* Letter Name & Subtitle */}
              <div className="card-naming">
                <div className="name-primary">{letter.name}</div>
                <div className="name-arabic">{letter.arabicName} &bull; {letter.transliteration}</div>
              </div>

              {/* 4 Forms Preview Row */}
              <div className="card-forms-row">
                <div className="form-item" title="Yalın">
                  <span className="form-lbl">Yalın</span>
                  <span className="form-ar">{letter.isolated}</span>
                </div>
                <div className="form-item" title="Başta">
                  <span className="form-lbl">Başta</span>
                  <span className="form-ar">{letter.initial}</span>
                </div>
                <div className="form-item" title="Ortada">
                  <span className="form-lbl">Ortada</span>
                  <span className="form-ar">{letter.medial}</span>
                </div>
                <div className="form-item" title="Sonda">
                  <span className="form-lbl">Sonda</span>
                  <span className="form-ar">{letter.final}</span>
                </div>
              </div>

              {/* Quick Actions Footer */}
              <div className="card-footer-actions">
                <button
                  className="card-action-btn sound"
                  onClick={(e) => {
                    e.stopPropagation();
                    soundService.speakArabic(letter.isolated);
                  }}
                  title="Seslendir"
                >
                  <Volume2 size={16} />
                  <span>Dinle</span>
                </button>

                <button
                  className="card-action-btn write"
                  onClick={(e) => handleQuickWrite(letter.id, e)}
                  title="Bu harfi çiz / yaz"
                >
                  <Edit3 size={16} />
                  <span>Yaz</span>
                </button>

                <button
                  className="card-action-btn detail"
                  onClick={(e) => handleCardClick(letter, e)}
                  title="Detaylı İncele"
                >
                  <Info size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredLetters.length === 0 && (
        <div className="empty-results-box">
          <p>Aradığınız kriterlere uygun harf bulunamadı.</p>
          <button className="btn-secondary" onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}>
            Filtreleri Temizle
          </button>
        </div>
      )}
    </div>
  );
};
