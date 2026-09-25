import React from 'react';
import type { ActiveTab } from '../types';
import { 
  BookOpen, 
  Edit3, 
  Bookmark, 
  Layers, 
  Gamepad2, 
  Volume2, 
  VolumeX, 
  Trophy
} from 'lucide-react';
import { soundService } from '../services/soundService';

interface NavbarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  totalPoints: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  soundEnabled,
  onToggleSound,
  totalPoints
}) => {
  const tabs = [
    { id: 'letters', label: 'Harfler', icon: BookOpen, tag: '29 Harf' },
    { id: 'write', label: 'Yazma Tahtası', icon: Edit3, tag: 'Çizim' },
    { id: 'rules', label: 'Harekeler', icon: Bookmark, tag: 'Kurallar' },
    { id: 'read', label: 'Okuma & Hece', icon: Layers, tag: 'Örnekler' },
    { id: 'games', label: 'Oyunlar', icon: Gamepad2, tag: '4 Oyun' },
  ] as const;

  const handleTabClick = (tabId: ActiveTab) => {
    soundService.playClick();
    onTabChange(tabId);
  };

  return (
    <>
      {/* Desktop / Tablet Top Header */}
      <header className="main-header">
        <div className="header-inner">
          <div className="brand-group" onClick={() => handleTabClick('letters')}>
            <div className="brand-logo-icon">
              <span className="brand-ar-char">ض</span>
            </div>
            <div className="brand-text">
              <div className="brand-title">
                <span>ElifBa</span>
                <span className="brand-badge-pro">PRO</span>
              </div>
              <span className="brand-subtitle">Arapça İnteraktif Okuma & Yazma</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="header-desktop-nav">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  className={`nav-link-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleTabClick(tab.id as ActiveTab)}
                >
                  <Icon size={18} />
                  <span className="link-title">{tab.label}</span>
                  {tab.tag && <span className="link-pill">{tab.tag}</span>}
                </button>
              );
            })}
          </nav>

          {/* Header Right Utility Actions */}
          <div className="header-actions">
            {/* Score pill */}
            <div className="points-pill" title="Kazanılan Puanlar">
              <Trophy size={16} className="trophy-icon" />
              <span>{totalPoints} Puan</span>
            </div>

            {/* Audio Toggle */}
            <button
              className={`sound-toggle-btn ${soundEnabled ? 'on' : 'off'}`}
              onClick={onToggleSound}
              title={soundEnabled ? 'Sesi Kapat' : 'Sesi Aç'}
              aria-label="Ses Ayarı"
            >
              {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sticky Bottom Navigation Bar (No screen cutoff, touch safe-area) */}
      <nav className="mobile-bottom-nav">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              className={`bottom-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id as ActiveTab)}
              aria-label={tab.label}
            >
              <div className="nav-icon-wrap">
                <Icon size={20} />
              </div>
              <span className="bottom-nav-label">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
