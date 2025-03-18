import React from "react";
import { Text, StyleSheet, TouchableOpacity, Alert, BackHandler } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
  return (
    <TouchableOpacity style={styles.button} onPress={handleExit}>
      <Icon name="logout" size={24} color="green" style={styles.icon} />
      <Text style={styles.buttonText}>Sair</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 12,
  },
  buttonText: {
    fontSize: 16,
    color: "#555",
    fontWeight: "500",
  },
});

export default LogoutButton;
