import React from 'react';
import './ColorPalettes.css';
import palettes from '../pallete.json';

function ColorPalettes({ onSelectPalette }) {
  return (
    <div className="palettes-container">
      <h2>Оберіть палітру</h2>
      <div className="palettes-grid">
        {palettes.map(palette => (
          <div 
            key={palette.id} 
            className="palette-card"
            onClick={() => onSelectPalette(palette)}
          >
            <h3>
              {palette.paletteName} {palette.emoji}
            </h3>
            <div className="color-strip">
              {palette.colors.slice(0, 5).map((color, index) => (
                <div
                  key={index}
                  className="color-sample"
                  style={{ backgroundColor: color.color }}
                >
                  <span className="color-code">
                    {color.name}
                    <br />
                    {color.color}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorPalettes; 