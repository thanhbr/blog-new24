import React from 'react'
import { useDarkMode } from '../../context/DarkModeContext';

const Home = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  console.log('isDarkMode', isDarkMode);
  return (
    <div>Home</div>
  )
}

export default Home