//src\contexts\FontContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FontContext = createContext();
const FONT_SIZE_KEY = 'app_font_size';

const defaultFontSizes = {
  small: { sm: 12, md: 14, lg: 16 },
  medium: { sm: 14, md: 16, lg: 18 },
  large: { sm: 16, md: 18, lg: 20 },
};

export const FontSettingsProvider = ({ children }) => {
  const [fontPreference, setFontPreference] = useState('medium');
  const [fontSize, setFontSize] = useState(defaultFontSizes.medium);

  useEffect(() => {
    const loadFontSizePreference = async () => {
      try {
        const savedSize = await AsyncStorage.getItem(FONT_SIZE_KEY);
        if (savedSize) {
          setFontPreference(savedSize);
          setFontSize(defaultFontSizes[savedSize] || defaultFontSizes.medium);
        }
      } catch (error) {
        console.log('Erro ao carregar a preferência de tamanho da fonte:', error);
      }
    };

    loadFontSizePreference();
  }, []);

  const updateFontSize = async (newSize) => {
    setFontPreference(newSize);
    setFontSize(defaultFontSizes[newSize] || defaultFontSizes.medium);
    try {
      await AsyncStorage.setItem(FONT_SIZE_KEY, newSize);
    } catch (error) {
      console.log('Erro ao salvar a preferência de tamanho da fonte:', error);
    }
  };

  const updateFontPreference = async (newSize) => {
    setFontPreference(newSize);
    setFontSize(defaultFontSizes[newSize] || defaultFontSizes.medium);
    try {
      await AsyncStorage.setItem(FONT_SIZE_KEY, newSize);
    } catch (error) {
      console.log('Erro ao salvar a preferência de tamanho da fonte:', error);
    }
  };

  return (
    <FontContext.Provider value={{ fontSize, updateFontSize, fontPreference, updateFontPreference }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFontSettings = () => {
  return useContext(FontContext);
};