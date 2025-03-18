import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { User, LogOut } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    console.log("Usuário deslogado");
    navigation.replace("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <User size={80} color="#4CAF50" />
        <Text style={styles.userName} testID="profile-username">Usuário Exemplo</Text>
        <Text style={styles.userEmail} testID="profile-email">usuario@email.com</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} testID="logout-button">
        <LogOut size={24} color="#FFF" />
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  profileInfo: {
    alignItems: "center",
    marginBottom: 30,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "#333",
  },
  userEmail: {
    fontSize: 16,
    color: "#666",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E53935",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ProfileScreen;
