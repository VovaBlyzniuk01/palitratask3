import React from 'react';
import './PaletteView.css';

function PaletteView({ palette, onBack, onColorClick }) {
  const playSound = () => {
    const audio = new Audio('/src_notify.mp3');
    audio.volume = 0.5; // Устанавливаем громкость на 50%
    audio.play().catch(error => {
      console.log('Ошибка воспроизведения звука:', error);
    });
  };

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    playSound();
  };

  return (
    <div className="palette-view">
      <div className="palette-header">
        <button className="back-button" onClick={onBack}>
          ← Назад
        </button>
        <h2>{palette.paletteName} {palette.emoji}</h2>
      </div>
      <div className="colors-grid">
        {palette.colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color.color }}
            onClick={() => {
              onColorClick(color);
              copyToClipboard(color.color);
            }}
          >
            <div className="color-info">
              <span className="color-name">{color.name}</span>
              <span className="color-code">{color.color}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaletteView; 