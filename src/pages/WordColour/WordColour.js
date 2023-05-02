import React, { useState, useEffect } from 'react';
import './WordColour.css';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import Footer from '../../components/Footer/Footer';

const WordColour = () => {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [winTimes, setWinTimes] = useState(0);
  const [won, setWon] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      startGame();
    }, 2000);
  }, []);

  const startGame = () => {
    const colorOptions = [
      'red',
      'blue',
      'orange',
      'yellow',
      'green',
      'purple',
      'pink',
    ];
    const selectedColor =
      colorOptions[Math.floor(Math.random() * colorOptions.length)];
    const randomColors = Array.from({ length: 4 }, () => getRandomColor());
    randomColors[Math.floor(Math.random() * randomColors.length)] =
      selectedColor;
    setColors(randomColors);
    setSelectedColor(selectedColor);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleColorClick = (color) => {
    if (color === selectedColor) {
      if (colors.filter((c) => c === selectedColor).length === 1) {
        console.log('Color Clicked True ');
        setWon(true);
        setWinTimes(winTimes + 1);
        if (winTimes === 2) {
          setWinTimes(0);
          alert('You have won!');
          const score = localStorage.getItem('score');
          if (score) {
            localStorage.setItem(
              'score',
              JSON.stringify({ score: JSON.parse(score).score - 1 })
            );
          }
        }
        setWon(false);
        startGame();
      } else {
        console.log('Color Clicked Wrong ');
        startGame();
      }
    }
  };

  return (
    <>
      <LeftSidebar />
      <div className='word-colour-container'>
        <div className='left-section'>
          <h1
            style={{
              color: selectedColor,
              fontSize: '2em',
              display: won ? 'none' : 'block',
            }}
          >
            {selectedColor.toUpperCase()}
          </h1>
        </div>
        <div className='right-section'>
          {colors.map((color, index) => (
            <div
              key={index}
              className='color-box'
              style={{
                backgroundColor: color,
                display: won ? 'none' : 'block',
                marginBottom: 10,
                marginTop: 10,
              }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WordColour;
