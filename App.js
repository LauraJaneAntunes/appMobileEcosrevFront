import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import { FontSettingsProvider } from "./src/contexts/FontContext";
import LoadingScreen from "./src/screens/LoadingScreen";
import { AppStack, AuthStack } from "./src/configs/navigation";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider>
        <FontSettingsProvider>
          <LoadingScreen />
        </FontSettingsProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <FontSettingsProvider>
        <NavigationContainer>
          {isAuthenticated ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      </FontSettingsProvider>
    </ThemeProvider>
  );
}