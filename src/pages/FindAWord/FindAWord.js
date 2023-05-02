import React, { useState } from 'react';

const wordlist = [
	{
		words: ['feed','farm','eat','rat'],
		grid: [
			[['F',[0,1] ],['E',[0]],['E',[0,2] ],['D',[0] ]],
			[['A',[1] ],['Z',[]],['A',[2] ],['D',[] ]],
			[['R',[1,3] ],['A',[3]],['T',[2,3] ],['D',[] ]],
			[['M',[1] ],['G',[]],['R',[]],['D',[] ]],
		]
	},
	{
		words: ['monk','near','eel','more'],
		grid: [
			[['M',[0] ],['O',[0]],['N',[0,1]],['K',[0]]],
			[['C',[] ],['E',[2]],['E',[1,2]],['L',[2]]],
			[['B',[] ],['K',[]],['A',[1]],['L',[]]],
			[['M',[3] ],['O',[3]],['R',[1,3]],['E',[3]]],
		]
	},
	{
		words: ['firm','ramp','damp'],
		grid: [
			[['F',[0] ],['I',[0]],['R',[0,1]],['M',[0]]],
			[['B',[] ],['F',[]],['A',[1]],['O',[]]],
			[['D',[2] ],['A',[2]],['M',[1,2]],['P',[2]]],
			[['E',[] ],['R',[]],['P',[1]],['T',[]]],
		]
	}
]

const gridWidth = 300;
const cellWidth = 75;

const FindAWord = () => {
  // initialize the grid with the first set of data from the wordlist
  const [grid, setGrid] = useState(wordlist[0].grid);
  const [highlightedCells, setHighlightedCells] = useState(new Set());

  const handleCellClick = (row, col) => {
    // do nothing if the cell has already been highlighted or there is no letter in the cell
    if (highlightedCells.has(`${row}-${col}`) || !grid[row][col][0]) return;

    // add the cell to the set of highlighted cells
    setHighlightedCells((prev) => new Set(prev).add(`${row}-${col}`));
  };

  const handleCellDoubleClick = (row, col) => {
    // do nothing if the cell has not been highlighted or there is no letter in the cell
    if (!highlightedCells.has(`${row}-${col}`) || !grid[row][col][0]) return;

    // remove the cell from the set of highlighted cells
    setHighlightedCells((prev) => {
      const newHighlightedCells = new Set(prev);
      newHighlightedCells.delete(`${row}-${col}`);
      return newHighlightedCells;
    });
  };

  return (
    <div>
      {/* render the grid */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: gridWidth,
          height: gridWidth,
          margin: '0 auto',
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map(([letter, words], colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                width: cellWidth,
                height: cellWidth,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: highlightedCells.has(`${rowIndex}-${colIndex}`)
                  ? 'rgb(255, 255, 200)'
                  : '#ccc',
                cursor: 'pointer',
              }}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              onDoubleClick={() => handleCellDoubleClick(rowIndex, colIndex)}
            >
              <span style={{ fontWeight: 'bold' }}>{letter}</span>
            </div>
          ))
        )}
      </div>

      {/* render the list of words */}
{/* render the list of words */}
<div style={{ width: 100, margin: '0 auto' }}>
  {wordlist.map(({ words }, i) => (
    <div key={i}>
      {words.map((word, j) => (
        <React.Fragment key={j}>
          <span>{word}</span>
          {j % 4 === 3 && <br />} {/* add a line break after every 4th word */}
        </React.Fragment>
      ))}
    </div>
  ))}
</div>

    </div>
  );
};

export default FindAWord;
