import React, { useState, useEffect } from 'react';

const GRID_SIZE = 11;
const CELL_SIZE = Math.floor((window.innerWidth * 0.9) / GRID_SIZE);

const CAR_START_POS = [  [1, 5, 9],
  [2, 6, 10],
  [3, 7, 11]
];

const FROG_START_POS = [GRID_SIZE / 2, 6];

const Frogger = () => {
  const [grid, setGrid] = useState([]);
  const [frogPos, setFrogPos] = useState(FROG_START_POS);

  const moveCars = () => {
    // Copy the grid to make changes
    const newGrid = [...grid];
    for (let row = 2; row <= 10; row += 3) {
      for (let col = 0; col < CAR_START_POS[0].length; col++) {
        const carCol = CAR_START_POS[row / 3][col];
        if (newGrid[row][carCol] === '🚗') {
          newGrid[row][carCol] = '';
          if (carCol === GRID_SIZE - 1) {
            newGrid[row][0] = '🚗';
          } else {
            newGrid[row][carCol + 1] = '🚗';
          }
        }
      }
    }
    setGrid(newGrid);
  };

  const handleKeyDown = (e) => {
    const [row, col] = frogPos;
    switch (e.key) {
      case 'ArrowUp':
        if (row > 0) {
          setFrogPos([row - 1, col]);
        }
        break;
      case 'ArrowDown':
        if (row < GRID_SIZE - 1) {
          setFrogPos([row + 1, col]);
        }
        break;
      case 'ArrowLeft':
        if (col > 0) {
          setFrogPos([row, col - 1]);
        }
        break;
      case 'ArrowRight':
        if (col < GRID_SIZE - 1) {
          setFrogPos([row, col + 1]);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // Initialize grid
    const newGrid = new Array(GRID_SIZE).fill().map(() => new Array(GRID_SIZE).fill(''));
    for (let row = 2; row <= 10; row += 3) {
      for (let col = 0; col < CAR_START_POS[0].length; col++) {
        newGrid[row][CAR_START_POS[row / 3][col]] = '🚗';
      }
    }
    newGrid[frogPos[0]][frogPos[1]] = '🐸';
    setGrid(newGrid);

    // Move cars every second
    const interval = setInterval(moveCars, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Update frog position in grid when it moves
    const newGrid = [...grid];
    newGrid[frogPos[0]][frogPos[1]] = '🐸';
    setGrid(newGrid);

    // Check if frog has reached top row
    if (frogPos[0] === 0) {
      alert('You won!');
    }
  }, [frogPos]);

  
};

export default Frogger;
