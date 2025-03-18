// Header.js
import React from "react";
import { StyleSheet, View, TouchableOpacity, StatusBar, Image } from "react-native";
import { Menu } from "lucide-react-native";
import Logo from "../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";

const Header = ({ testID }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header} testID={testID}>
      <StatusBar backgroundColor="green" barStyle="light-content" />
      
      {/* Ícone do Menu Hambúrguer que abre o Drawer */}
      <TouchableOpacity onPress={() => navigation.openDrawer()} testID="hamburger-menu">
        <Menu size={30} color="#fff" />
      </TouchableOpacity>

      {/* Logo do Projeto */}
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "green",
    width: "100%",
    elevation: 4, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logo: {
    width: 40,
    height: 40,
  },
});

export default Header;
