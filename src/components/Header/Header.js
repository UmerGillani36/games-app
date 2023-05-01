import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
const Header = () => {
  const [screenWidth, setScreenWidth] = useState(getCurrentDimension());
console.log('width', screenWidth.width)
  function getCurrentDimension(){
    return {
      	width: window.innerWidth,
    }
}
useEffect(() => {
  const updateDimension = () => {
    setScreenWidth(getCurrentDimension())
  }
  window.addEventListener('resize', updateDimension);
  
  return(() => {
      window.removeEventListener('resize', updateDimension);
  })
}, [screenWidth])
  return (
    <div className={classes.navbar}>
            <div className={classes.logoWrapper}>
                <span className={classes.logo}>Logo</span>
            </div>
        <div className={classes.actionWrapper}>
          <NavLink to="/" className={classes.action} >
           {screenWidth.width > 800 ? 'Home' : 'H'} 
          </NavLink>
          <span className={classes.divider}>|</span>
          <NavLink to="/wordColour" className={classes.action} >
          {screenWidth.width > 800 ? 'Word Colour' : 'W'} 
          </NavLink>
          <span className={classes.divider}>|</span>
          <NavLink to="/frogger" className={classes.action} >
          {screenWidth.width > 800 ? 'Frogger' : 'F'} 
          </NavLink>
          <span className={classes.divider}>|</span>
          <NavLink to="/find-a-word" className={classes.action} >
          {screenWidth.width > 800 ? 'FindAWord' : 'F'}
          </NavLink>
        </div>
    </div>
  )
}

export default Header
