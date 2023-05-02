import React, { useState, useEffect } from 'react';
import classes from './Home.module.css';
import Footer from '../../components/Footer/Footer';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
const Home = () => {
  const [score, setScore] = useState(0);

  const getScore = () => {
    const s = localStorage.getItem('score');
    if (s) {
      if (JSON.parse(s).score === 0) {
        alert('Congratulations!');
        localStorage.setItem('score', { score: 5 });
        setScore(5);
      } else {
        setScore(JSON.parse(s).score);
      }
    }
  };

  const handleReset = () => {
    localStorage.setItem('score', { score: 5 });
    setScore(5);
  };

  useEffect(() => {
    getScore();
  }, []);

  return (
    <div>
      <LeftSidebar />
      <div className={classes.container}>
        <div className={classes.lineOne}>
          Wins to achieve: {score} (
          <span className={classes.resetButton} onClick={handleReset}>
            reset
          </span>
          )
        </div>
        <div className={classes.lineTwo}>Let's go!.</div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
