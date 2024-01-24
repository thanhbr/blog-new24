import { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/actions/darkModeActions';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.isDarkMode);

  const toggleDarkModeLocal = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode: toggleDarkModeLocal }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};