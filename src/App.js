import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function App () {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/gameOne" element={<GameOne />} /> */}
      {/* <Route path="/gameTwo" element={<GameTwo />} /> */}
      {/* <Route path="/gameThree" element={<GameThree />} /> */}
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
