import React from 'react';
import type { ArabicLetter } from '../types';
import { soundService } from '../services/soundService';
import { X, Volume2, Edit3, AlertCircle } from 'lucide-react';

interface LetterDetailModalProps {
  letter: ArabicLetter | null;
  onClose: () => void;
  onGoToWrite: (letterId: string) => void;
}

export const LetterDetailModal: React.FC<LetterDetailModalProps> = ({
  letter,
  onClose,
  onGoToWrite
}) => {
  if (!letter) return null;

  const handlePlaySound = (text: string) => {
    soundService.speakArabic(text);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-left">
            <span className="modal-index-tag">Harf #{letter.index}</span>
            <h3 className="modal-title">{letter.name} Harfi ({letter.arabicName})</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Kapat">
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body-scroll">
          {/* Top Highlight Banner */}
          <div className="letter-jumbo-card">
            <div className="jumbo-glyph-box">
              <span className="jumbo-arabic-glyph">{letter.isolated}</span>
              <button
                className="jumbo-audio-btn"
                onClick={() => handlePlaySound(letter.isolated)}
                title="Sesi Dinle"
              >
                <Volume2 size={22} />
              </button>
            </div>

            <div className="jumbo-details">
              <div className="jumbo-title-row">
                <span className="jumbo-latin-name">{letter.name}</span>
                <span className="jumbo-translit">({letter.transliteration})</span>
              </div>
              <p className="jumbo-makhraj-text">{letter.makhraj}</p>

              <div className="jumbo-badges-row">
                <span className={`status-badge ${letter.type}`}>
                  {letter.type === 'kalın' ? 'Dolgun / Kalın' : 'Zarif / İnce'}
                </span>
                {letter.isPeltek && <span className="status-badge peltek">👅 Peltek Harf</span>}
                <span className={`status-badge ${letter.connectsNext ? 'connect' : 'no-connect'}`}>
                  {letter.connectsNext ? '✓ Kendinden sonrakine bitişir' : '⚠️ Kendinden sonrakine bitişmez'}
                </span>
              </div>
            </div>
          </div>

          {/* 4 Writing Forms Interactive Table */}
          <div className="section-block">
            <h4 className="section-block-title">Kelime Konumuna Göre 4 Yazılış Hali</h4>
            <div className="four-forms-grid">
              <div className="form-card">
                <div className="form-header-badge">Yalın (Tek Başına)</div>
                <div className="form-glyph">{letter.isolated}</div>
                <button 
                  className="form-sound-btn"
                  onClick={() => handlePlaySound(letter.isolated)}
                >
                  <Volume2 size={14} /> Dinle
                </button>
              </div>

              <div className="form-card">
                <div className="form-header-badge">Başta Yazılışı</div>
                <div className="form-glyph">{letter.initial}</div>
                <button 
                  className="form-sound-btn"
                  onClick={() => handlePlaySound(letter.initial)}
                >
                  <Volume2 size={14} /> Dinle
                </button>
              </div>

              <div className="form-card">
                <div className="form-header-badge">Ortada Yazılışı</div>
                <div className="form-glyph">{letter.medial}</div>
                <button 
                  className="form-sound-btn"
                  onClick={() => handlePlaySound(letter.medial)}
                >
                  <Volume2 size={14} /> Dinle
                </button>
              </div>

              <div className="form-card">
                <div className="form-header-badge">Sonda Yazılışı</div>
                <div className="form-glyph">{letter.final}</div>
                <button 
                  className="form-sound-btn"
                  onClick={() => handlePlaySound(letter.final)}
                >
                  <Volume2 size={14} /> Dinle
                </button>
              </div>
            </div>
          </div>

          {/* Practical Examples */}
          <div className="section-block">
            <h4 className="section-block-title">Örnek Kelimeler ve Anlamları</h4>
            <div className="examples-list-cards">
              {letter.examples.map((ex, idx) => (
                <div 
                  key={idx} 
                  className="example-word-card"
                  onClick={() => handlePlaySound(ex.word)}
                >
                  <div className="ex-card-left">
                    <span className="ex-word-arabic">{ex.word}</span>
                    <div className="ex-word-meta">
                      <span className="ex-translit">{ex.transliteration}</span>
                      <span className="ex-meaning">{ex.meaning}</span>
                    </div>
                  </div>
                  <div className="ex-card-right">
                    <span className="ex-pos-tag">
                      {ex.position === 'initial' && 'Başta'}
                      {ex.position === 'medial' && 'Ortada'}
                      {ex.position === 'final' && 'Sonda'}
                      {ex.position === 'isolated' && 'Yalın'}
                    </span>
                    <button className="ex-audio-icon" title="Dinle">
                      <Volume2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Tip / Rule */}
          <div className="notice-box">
            <AlertCircle size={18} className="notice-icon" />
            <div className="notice-content">
              <strong>Önemli Kural:</strong> {letter.tips}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>
            Kapat
          </button>
          <button 
            className="btn-primary-glow"
            onClick={() => {
              onClose();
              onGoToWrite(letter.id);
            }}
          >
            <Edit3 size={18} />
            <span>Bu Harfi Yazma Tahtasında Çiz</span>
          </button>
        </div>
      </div>
    </div>
  );
};
