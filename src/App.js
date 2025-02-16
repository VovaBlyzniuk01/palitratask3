import React, { useState } from 'react';
import Header from './components/Header';
import ColorPalettes from './components/ColorPalettes';
import PaletteView from './components/PaletteView';
import './App.css';

function App() {
  const [selectedPalette, setSelectedPalette] = useState(null);
  const [fullscreenColor, setFullscreenColor] = useState(null);

  const handleColorClick = (color) => {
    setFullscreenColor(color);
    setTimeout(() => setFullscreenColor(null), 1500); // Прибрати повноекранний режим через 1.5 секунди
  };

  return (
    <div className="app">
      <Header />
      {fullscreenColor && (
        <div 
          className="fullscreen-color"
          style={{ backgroundColor: fullscreenColor.color }}
        >
          <div className="color-info">
            <h2>{fullscreenColor.name}</h2>
            <p>{fullscreenColor.color}</p>
          </div>
        </div>
      )}
      {!fullscreenColor && (
        selectedPalette ? (
          <PaletteView 
            palette={selectedPalette}
            onBack={() => setSelectedPalette(null)}
            onColorClick={handleColorClick}
          />
        ) : (
          <ColorPalettes onSelectPalette={setSelectedPalette} />
        )
      )}
    </div>
  );
}

export default App;
