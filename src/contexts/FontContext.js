// src/contexts/FontContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FontContext = createContext();

const FONT_SIZE_KEY = "app_font_size";
const FONT_FAMILY_KEY = "app_font_family";

// Fonte padrão do app
const defaultFont = "Poppins-Regular";
//const availableFonts = ["Poppins-Regular", "Roboto", "OpenSans", "Lato-Regular"];

const defaultFontSizes = {
  small: { sm: 12, md: 14, lg: 16 },
  medium: { sm: 14, md: 16, lg: 18 },
  large: { sm: 16, md: 18, lg: 20 },
};

export const FontSettingsProvider = ({ children }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [fontPreference, setFontPreference] = useState("medium");
  const [fontSize, setFontSize] = useState(defaultFontSizes.medium);
  const [fontFamily, setFontFamily] = useState(defaultFont);

  useEffect(() => {
    const loadFontPreferences = async () => {
      try {
        const savedSize = await AsyncStorage.getItem(FONT_SIZE_KEY);
        const savedFont = await AsyncStorage.getItem(FONT_FAMILY_KEY);

        if (savedSize) {
          setFontPreference(savedSize);
          setFontSize(defaultFontSizes[savedSize] || defaultFontSizes.medium);
        }

        setFontFamily(savedFont || defaultFont);
        setFontLoaded(true);
      } catch (error) {
        console.log("Erro ao carregar preferências de fonte:", error);
      }
    };

    loadFontPreferences();
  }, []);

  const updateFontSize = async (newSize) => {
    setFontPreference(newSize);
    setFontSize(defaultFontSizes[newSize] || defaultFontSizes.medium);

    try {
      await AsyncStorage.setItem(FONT_SIZE_KEY, newSize);
    } catch (error) {
      console.log("Erro ao salvar a preferência de tamanho da fonte:", error);
    }
  };

  const updateFontPreference = async (newSize, newFont = defaultFont) => {
    setFontPreference(newSize);
    setFontSize(defaultFontSizes[newSize] || defaultFontSizes.medium);
    setFontFamily(newFont);

    try {
      await AsyncStorage.setItem(FONT_SIZE_KEY, newSize);
      await AsyncStorage.setItem(FONT_FAMILY_KEY, newFont);
    } catch (error) {
      console.log("Erro ao salvar a preferência de fonte:", error);
    }
  };

  return (
    <FontContext.Provider value={{ fontSize, fontFamily, updateFontSize, fontPreference, updateFontPreference, fontLoaded }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFontSettings = () => {
  return useContext(FontContext);
};