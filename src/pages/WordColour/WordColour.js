import React, { useState, useEffect } from "react";
import "./WordColour.module.css";



const WordColour = () => {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [won, setWon] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      startGame();
    }, 2000);
  }, []);

  const startGame = () => {
    const colorOptions = ["red", "blue", "orange", "yellow", "green", "purple", "pink"];
    const selectedColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    const randomColors = Array.from({ length: 4 }, () => getRandomColor());
    randomColors[Math.floor(Math.random() * randomColors.length)] = selectedColor;
    setColors(randomColors);
    setSelectedColor(selectedColor);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleColorClick = (color) => {
    if (color === selectedColor) {
      if (colors.filter((c) => c === selectedColor).length === 1) {
        setWon(true);
        alert("You have won!");
        setWon(false);
        startGame();
      } else {
        startGame();
      }
    }
  };

  return (
    <div className="word-colour-container">
      <div className="left-section">
        <h1 style={{ color: selectedColor, fontSize: "2em", display: won ? "none" : "block" }}>
          {selectedColor.toUpperCase()}
        </h1>
      </div>
      <div className="right-section">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color, display: won ? "none" : "block" }}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </div>
    </div>
  );
};


export default WordColour