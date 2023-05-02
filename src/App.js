import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Frogger from './pages/Frogger/Frogger';
import FindAWord from './pages/FindAWord/FindAWord';
import WordColour from './pages/WordColour/WordColour';
function App() {
  const setScore = () => {
    const score = localStorage.getItem('score');
    if (score === null) {
      console.log('Set Score');
      localStorage.setItem('score', JSON.stringify({ score: 5 }));
    }
  };

  useEffect(() => {
    setScore();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/wordColour' element={<WordColour />} />
          <Route path='/frogger' element={<Frogger />} />
          <Route path='/find-a-word' element={<FindAWord />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
