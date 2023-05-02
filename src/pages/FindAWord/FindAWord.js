import React, { useState, useEffect } from "react";
import ('./FindAWord.module.css');

const FindAWord = ({ words, gridSize }) => {
  const [grid, setGrid] = useState([]);
  const [selectedWord, setSelectedWord] = useState("");
  const [foundWords, setFoundWords] = useState([]);

  useEffect(() => {
    const generateGrid = () => {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const grid = [];

      for (let i = 0; i < gridSize; i++) {
        const row = [];
        for (let j = 0; j < gridSize; j++) {
          const letter = letters[Math.floor(Math.random() * letters.length)];
          row.push(letter);
        }
        grid.push(row);
      }

      setGrid(grid);
    };

    generateGrid();
  }, [gridSize]);

  const handleSelect = (rowIndex, colIndex) => {
    const newSelectedWord = selectedWord + grid[rowIndex][colIndex];
    setSelectedWord(newSelectedWord);

    const wordFound = words.find((word) => word === newSelectedWord);

    if (wordFound) {
      setFoundWords([...foundWords, wordFound]);
      setSelectedWord("");
    }
  };

  return (
    <div>
      <h2>Find-A-Word Game</h2>
      <p>Select the words hidden in the grid:</p>
      <p>Found words: {foundWords.join(", ")}</p>
      <table>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((col, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`}>
                  <button onClick={() => handleSelect(rowIndex, colIndex)}>
                    {col}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FindAWord;
