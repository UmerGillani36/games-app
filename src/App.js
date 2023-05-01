import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import WordColour from './pages/Home/WordColour/WordColour';
import Frogger from './pages/Frogger/Frogger';
import FindAWord from './pages/FindAWord/FindAWord';

function App () {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gameOne" element={<WordColour />} />
      <Route path="/gameTwo" element={<Frogger />} />
      <Route path="/gameThree" element={<FindAWord />} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
