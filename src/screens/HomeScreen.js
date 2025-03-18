// HomeScreen.js
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.content}>Bem-vindo à Home!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    fontSize: 18,
  },
});

export default HomeScreen;
