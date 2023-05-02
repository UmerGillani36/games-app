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
      <Link to="/home">{windowWidth < 1400 ? 'H': 'Home'}</Link>
      <Link to="/wordcolour">{windowWidth < 1400 ? 'W': 'Word Colour'}</Link>
      <Link to="/find-a-word">{windowWidth < 1400 ? 'Fi': 'Find-a-word'}</Link>
      <Link to="/frogger">{windowWidth < 1400 ? 'Fr': 'Frogger'}</Link>
      <div className="logo"></div>
    </div>
  );
}

export default LeftSidebar;
