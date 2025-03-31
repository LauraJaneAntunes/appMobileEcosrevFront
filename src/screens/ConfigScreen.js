//src\screens\ConfigScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { useFontSettings } from "../contexts/FontContext";
import { SafeAreaView } from "react-native-safe-area-context";

const ConfigScreen = () => {
  const { colors, themeMode, updateThemeMode, spacing } = useTheme();
  const { fontSize } = useFontSettings();
  const [currentThemeMode, setCurrentThemeMode] = useState(themeMode);
  const appVersion = "0.1.0-beta";

  useEffect(() => {
    setCurrentThemeMode(themeMode);
  }, [themeMode]);

  const handleThemeChange = (mode) => {
    setCurrentThemeMode(mode);
    updateThemeMode(mode);
  };

  const handleFontSizeChange = (size) => {
    updateFontSize(size);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.primary, fontSize: fontSize.lg }]}>Configurações</Text>

      {/* Opção de Tema */}
      <View style={[styles.section, { backgroundColor: colors.surface }]}>
        <Text style={[styles.sectionTitle, { color: colors.text.primary, fontSize: fontSize.md }]}>Tema</Text>
        <View style={[styles.optionRow, { borderColor: colors.border }]}> {/* Usando o tema para a borda */}
          <Text style={[styles.optionText, { color: colors.text.primary, fontSize: fontSize.sm }]}>Automático</Text>
          <TouchableOpacity
            style={[
              styles.radioButton,
              currentThemeMode === "automatic" && { borderColor: colors.primary, backgroundColor: colors.primary },
            ]}
            onPress={() => handleThemeChange("automatic")}
          />
        </View>
        <View style={[styles.optionRow, { borderColor: colors.border }]}>
          <Text style={[styles.optionText, { color: colors.text.primary, fontSize: fontSize.sm }]}>Claro</Text>
          <TouchableOpacity
            style={[
              styles.radioButton,
              currentThemeMode === "light" && { borderColor: colors.primary, backgroundColor: colors.primary },
            ]}
            onPress={() => handleThemeChange("light")}
          />
        </View>
        <View style={[styles.optionRow, { borderColor: colors.border }]}>
          <Text style={[styles.optionText, { color: colors.text.primary, fontSize: fontSize.sm }]}>Escuro</Text>
          <TouchableOpacity
            style={[
              styles.radioButton,
              currentThemeMode === "dark" && { borderColor: colors.primary, backgroundColor: colors.primary },
            ]}
            onPress={() => handleThemeChange("dark")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  optionText: {},
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ConfigScreen;