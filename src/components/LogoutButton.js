//src\components\LogoutButton.js
import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { LogOut } from "lucide-react-native";
import { useTheme } from "../contexts/ThemeContext";
import { useFontSettings } from "../contexts/FontContext";
import CustomAlert from "./CustomAlert";
import { BackHandler } from "react-native";

const LogoutButton = () => {
  const theme = useTheme();
  const { fontSize, fontFamily } = useFontSettings();
  const [alertVisible, setAlertVisible] = useState(false);

  const handleExit = () => {
    setAlertVisible(true);
  };

  const confirmExit = () => {
    setAlertVisible(false);
    BackHandler.exitApp();
  };

  return (
    <>
      <TouchableOpacity
        style={[
          styles.button,
        ]}
        onPress={handleExit}
      >
        <LogOut
          size={fontSize.md}
          color={theme.colors.primary}
          style={styles.icon}
        />
        <Text
          style={[
            styles.buttonText,
            {
              color: theme.colors.text.primary,
              fontSize: fontSize.md,
              fontFamily,
            },
          ]}
        >
          Sair
        </Text>
      </TouchableOpacity>

      <CustomAlert
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
        onConfirm={confirmExit}
        title="Sair do App"
        message="Tem certeza de que deseja sair?"
      />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 0,
  },
  icon: {
    marginRight: 12,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default LogoutButton;