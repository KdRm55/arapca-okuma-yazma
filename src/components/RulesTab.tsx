import React, { useState } from 'react';
import { HAREKE_RULES } from '../data/rulesData';
import { soundService } from '../services/soundService';
import { Volume2, BookOpen, Sparkles, CheckCircle } from 'lucide-react';

export const RulesTab: React.FC = () => {
  const [selectedRuleId, setSelectedRuleId] = useState<string>(HAREKE_RULES[0].id);

  const currentRule = HAREKE_RULES.find(r => r.id === selectedRuleId) || HAREKE_RULES[0];

  const handlePlaySound = (text: string) => {
    soundService.speakArabic(text);
  };

  return (
    <div className="tab-pane-container">
      {/* Hero Banner */}
      <div className="section-hero-card">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Harekeler ve Okuma Kuralları</span>
          </div>
          <h2 className="hero-title">Sesli Harfler ve Tecvid Temelleri</h2>
          <p className="hero-desc">
            Arapçada sesli harfler (harekeler) harflerin üzerine veya altına konur. 
            Aşağıdan bir hareke seçerek nasıl okunduğunu inceleyin ve örnek harflere tıklayarak seslerini canlı dinleyin.
          </p>
        </div>
      </div>

      {/* Rule Selection Nav Buttons */}
      <div className="rules-selector-strip">
        {HAREKE_RULES.map((rule) => (
          <button
            key={rule.id}
            className={`rule-nav-tab ${selectedRuleId === rule.id ? 'active' : ''}`}
            onClick={() => {
              soundService.playClick();
              setSelectedRuleId(rule.id);
            }}
          >
            <span className="rule-tab-sample">{rule.symbolSample}</span>
            <div className="rule-tab-text">
              <span className="rule-tab-name">{rule.turkishName}</span>
              <span className="rule-tab-sub">{rule.name.split(' ')[0]}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Active Rule Presentation Card */}
      <div className="active-rule-showcase">
        <div className="rule-header-card">
          <div className="rule-symbol-hero">
            <span className="rule-big-symbol">{currentRule.symbolSample}</span>
            <span className="rule-tag-pill">{currentRule.soundEffectTr}</span>
          </div>

          <div className="rule-description-block">
            <h3 className="rule-title-main">{currentRule.name}</h3>
            <p className="rule-explanation">{currentRule.description}</p>
            <div className="rule-benefit">
              <CheckCircle size={18} className="benefit-icon" />
              <span>Aşağıdaki harf ve hecelere dokunarak ses farklarını dinleyebilirsiniz.</span>
            </div>
          </div>
        </div>

        {/* Interactive Alphabet Sound Board with this Hareke */}
        <div className="hareke-interactive-board">
          <div className="board-header">
            <h4 className="board-title">
              <BookOpen size={18} />
              <span>{currentRule.turkishName} ile Harflerin Okunuşu ({currentRule.examples.length} Örnek)</span>
            </h4>
            <span className="board-hint">Kartlara tıklayarak dinleyin</span>
          </div>

          <div className="hareke-tiles-grid">
            {currentRule.examples.map((item, index) => (
              <div
                key={index}
                className="hareke-tile-card"
                onClick={() => handlePlaySound(item.harekeli)}
              >
                <span className="tile-arabic-glyph">{item.harekeli}</span>
                <span className="tile-reading-txt">{item.reading}</span>
                <button 
                  className="tile-sound-btn"
                  title="Dinle"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlaySound(item.harekeli);
                  }}
                >
                  <Volume2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
