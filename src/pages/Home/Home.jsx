import React from 'react'
import { useDarkMode } from '../../context/DarkModeContext';
import Header from '../../components/Header/Header';

const Home = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  console.log('isDarkMode', isDarkMode);

  return (
    <Header />
  )
}

export default Home