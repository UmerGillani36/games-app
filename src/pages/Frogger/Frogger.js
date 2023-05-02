import React, { useState, useEffect } from "react";
import "./Frogger.module.css";

const FROG_BASE64 = "data:image/png;base64,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"; // Replace with your own frog image
const CAR_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJUlEQVR4nO2W709TVxjHq2/8B5zGd/Ol7bBskMyozJ4bjLplmW+GWnTZkrHAdJEXmgwhc6AI2UQjP6IRFuGe2y3bpCQuMSTTF8QfGSKogHUWXFZk7dbbH/eWFbI24zHntr3c3h8VWloac5/km5Pbmz7n+dzz/DgGg2666aabbrq9xErwvxsQ5roomnNTmAN1BdXFBDTk15DPjRi2swR7NxiWw7Z/F3qNwvwEhXmIKesAQISwz7nDFlqbMQDCfDMJ/J3LLLx18imYax6D+URMm2UqEDSepDdq5RoDk0zGhOrGoKDhMZR0umMgmD2TMQBF838SgKKGSTDXOLIOYKwbBXPj77FTYFhXRsHvpIMbSfCW7iAUCsHHAL5os8PYr4chPFgmrIdb7QqA+qYvYbJjnaCvm2oUAJ+3XYXRGzEfZK1q6xUBTHWjYOnxChA7fgi+njYAovlPCMD2jr/jwTvgSGsv/D/0vkJH238SAcrre4C7tEpU8OJqsDbQIkBV28+qPo50/CgAEG29NJ2oh48zAOC6CcCWb6dEgNH+TyH62y6FHvZXiACNzceSAIhONR8XAR5p+HjQXyECFJ/7I17M7JXM879+QgQIDOyB/+4ghcjvCQBrPa1yAlgESOXDGAcoOO3IrA6k+f+mmP8OePCLFeYGtik0fO2grAZq4Fn7epjsWA8nm04k1cCIho/71w6KAMbF1gHC3F2xjzMBQIx/Gtm870rzf6GAHVDVYoPwzSKFKs99v+gu9Nl5RtVHxXmbGPwmWR1YMP8eorm/FmaLn7TZ24aF4SR5wbDPpfkvBSBdqPIshntXPwDv9SJhrWzBS26jFS00DMZ9kJU8J7pQAkBaBwhz08o4fUDy/LnaC2n+ywGyPQeMcQBpHah9aKE+KIbfg2huSgGAeUDx/F8pAKOkDuQAiPG5LDb/LmVNdM+YEA6FF+4+cuXmLkQpxM4h+h9zys6z+wKsoTA/TuEQ5CEAUNg7vvu6c40mAIX56ljweQrACBBHUwCEhvIdAGHvoDYAzc9KAax9MzDiicJcdB6GPVE4YJ/JOoC1LwAjnkh8zwgc6AskAzBsONUJgBSABC+1YXc06wAjnkjynp5IcgoxLCwaYDY6n+QsHJnPOsCs2p7pApAvLrWhHJzAsOwEhtwZnMB++4wQNPkKZN3Xm/0a2N8XEIKO7RmBffZA+gAv60JFDYlrdvJklk5ktQksnbqbTz9ZWhtdToBtre6MAba0T60cAOoJQmHtk7QBTF+NAaJ9KwdA9PY3rrQBis8+W/okXm4AyxU/FJ+aAHPt4gFMdeNQeMYJlh525QFyfhdiXmWA0k5X3gOUdjm1AfZWN0PpZVfeApR2OWFvdaM2QFn5R5BKhhxZWbpx6AB5cAK3tP70YfmhgRwC3MqHOHTTTTdD9u0FUpjqOG1LwVQAAAAASUVORK5CYII="; // Replace with your own car image

const CELL_SIZE = "10%";
const GRID_SIZE = 11;
const FROG_START_ROW = 10;
const FROG_START_COL = 5;
const CAR_START_POSITIONS = [
  [1, 5, 9],
  [2, 6, 10],
  [3, 7, 11],
];

function Frogger() {
  const [frogPosition, setFrogPosition] = useState([
    FROG_START_ROW,
    FROG_START_COL,
  ]);
  const [carPositions, setCarPositions] = useState([]);

  useEffect(() => {
    // Move the cars every second
    const interval = setInterval(() => {
      setCarPositions(moveCars);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const moveCars = () => {
    return CAR_START_POSITIONS.map((row, rowIndex) => {
      return row.map((colIndex) => {
        const currentPos = [rowIndex + 2, colIndex];
        const newPos = [rowIndex + 2, colIndex - 1];
        return newPos[1] < 1 ? [newPos[0], GRID_SIZE] : newPos;
      });
    }).flat();
  };

  const handleKeyPress = (event) => {
    const direction = event.key.slice(5).toLowerCase();
    const [row, col] = frogPosition;
    switch (direction) {
      case "up":
        if (row > 1) setFrogPosition([row - 1, col]);
        break;
      case "down":
        if (row < FROG_START_ROW) setFrogPosition([row + 1, col]);
        break;
      case "left":
        if (col > 1) setFrogPosition([row, col - 1]);
        break;
      case "right":
        if (col < GRID_SIZE) setFrogPosition([row, col + 1]);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // Check if the frog has reached the top row
    if (frogPosition[0] === 1) {
      alert("You win!");
      setFrogPosition([FROG_START_ROW, FROG_START_COL]);
    }
  }, [frogPosition]);

  useEffect(() => {
    // Check if the frog collided with any of the cars
    if (
      carPositions.some(
        (carPos) =>
          carPos[0] === frogPosition[0] && carPos[1] === frogPosition[1]
      )
    ) {
      alert("Game over!");
      setFrogPosition([FROG_START_ROW, FROG_START_COL]);
    }
  }, [carPositions, frogPosition]);

  return (
    <div className="frogger-container" tabIndex="0" onKeyDown={handleKeyPress}>
      {Array.from(Array(GRID_SIZE)).map((_, rowIndex) => (
        <div className="frogger-row" key={`row-${rowIndex}`}>
          {Array.from(Array(GRID_SIZE)).map((_2, colIndex) => {
            const isFrog =
              rowIndex === frogPosition[0] && colIndex === frogPosition[1];
            const isCar = carPositions.some(
              (pos) => pos[0] === rowIndex && pos[1] === colIndex
            );
            return (
              <div
                key={`cell-${rowIndex}-${colIndex}`}
                className={`frogger-cell ${isFrog ? "frog" : ""}`}
                style={{ width: CELL_SIZE, height: CELL_SIZE }}
              >
                {isFrog && <img src={FROG_BASE64} alt="Frog" />}
                {isCar && <img src={CAR_BASE64} alt="Car" />}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Frogger;
