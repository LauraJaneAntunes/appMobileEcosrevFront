//src\contexts\ThemeContext.js
import React, { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from '../utils/theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};