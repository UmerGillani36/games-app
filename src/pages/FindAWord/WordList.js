import React, { useState } from 'react';

function WordList(props) {
    const [wordList, setWordList] = useState(props.words.map(word => ({ text: word, found: false })));
  
    function handleWordClick(wordIndex) {
      const updatedWordList = [...wordList];
      updatedWordList[wordIndex].found = !updatedWordList[wordIndex].found;
      setWordList(updatedWordList);
    }
  
    return (
      <div className="word-list">
        {wordList.map((word, index) => (
          <div
            key={index}
            className={`word ${word.found ? 'found' : ''}`}
            onClick={() => handleWordClick(index)}
          >
            {word.text}
          </div>
        ))}
      </div>
    );
  }
  