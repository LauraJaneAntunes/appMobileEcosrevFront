// App.js
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import { FontSettingsProvider } from "./src/contexts/FontContext";
import LoadingScreen from "./src/screens/LoadingScreen";
import { AppStack, AuthStack } from "./src/configs/navigation";
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    // "Roboto": require("./assets/fonts/Roboto-Regular.ttf"),
    // "OpenSans": require("./assets/fonts/OpenSans-Regular.ttf"),
    // "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading || !fontsLoaded) {
    return (
      <ThemeProvider>
        <FontSettingsProvider>
          <PaperProvider>
            <LoadingScreen />
          </PaperProvider>
        </FontSettingsProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <FontSettingsProvider>
        <PaperProvider>
          <NavigationContainer>
            {isAuthenticated ? <AppStack /> : <AuthStack />}
          </NavigationContainer>
        </PaperProvider>
      </FontSettingsProvider>
    </ThemeProvider>
  );
}