//src\components\LogoutButton.js
import React from "react";
import { Text, StyleSheet, TouchableOpacity, Alert, BackHandler } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "../contexts/ThemeContext"

// Função para confirmar a saída do app
const handleExit = () => {
  Alert.alert(
    "Sair do App",
    "Tem certeza de que deseja sair?",
    [
      { text: "Cancelar", style: "cancel" },
      { text: "Sair", onPress: () => BackHandler.exitApp() },
    ]
  );
};

const LogoutButton = () => {
  const theme = useTheme();
  
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: theme.colors.surface },
      ]}
      onPress={handleExit}
    >
      <Icon
        name="logout"
        size={24}
        color={theme.colors.primary}
        style={styles.icon}
      />
      <Text
        style={[
          styles.buttonText,
          { color: theme.colors.text.primary },
        ]}
      >
        Sair
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  icon: {
    marginRight: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default LogoutButton;