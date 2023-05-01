import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LeftSidebar.css';

function LeftSidebar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (windowWidth < 800) {
      setIsSidebarCollapsed(true);
    } else {
      setIsSidebarCollapsed(false);
    }
  }, [windowWidth]);

  return (
    <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <Link to="/home">Home</Link>
      <Link to="/wordcolour">Word Colour</Link>
      <Link to="/find-a-word">Find a word</Link>
      <Link to="/frogger">Frogger</Link>
      <div className="logo"></div>
    </div>
  );
}

export default LeftSidebar;
