//src\screens\ConfigScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { useFontSettings } from "../contexts/FontContext";
import { SafeAreaView } from "react-native-safe-area-context";

const ConfigScreen = () => {
  const { colors, themeMode, updateThemeMode, spacing } = useTheme();
  const { fontSize, updateFontSize, fontPreference, updateFontPreference } = useFontSettings();
  const [currentThemeMode, setCurrentThemeMode] = useState(themeMode);
  const [currentFontPreference, setCurrentFontPreference] = useState(fontPreference);
  const appVersion = "0.1.0-beta";

  useEffect(() => {
    setCurrentThemeMode(themeMode);
    setCurrentFontPreference(fontPreference);
  }, [themeMode, fontPreference]);

  const handleThemeChange = (mode) => {
    setCurrentThemeMode(mode);
    updateThemeMode(mode);
  };

  const handleFontSizeChange = (size) => {
    updateFontSize(size);
  };

  const handleFontPreferenceChange = (font) => {
    setCurrentFontPreference(font);
    updateFontPreference(font);
  };

  const getRadioButtonStyle = (isSelected) => {
    const borderColor = themeMode === 'dark' ? '#fff' : '#000';
    const backgroundColor = isSelected ? colors.primary : 'transparent';

    return {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 2,
      alignItems: "center",
      justifyContent: "center",
      borderColor: borderColor,
      backgroundColor: backgroundColor,
    };
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView>
        <Text style={[styles.title, { color: colors.primary, fontSize: fontSize.lg }]}>Configurações</Text>

        {/* Opção de Tema */}
        <View style={[styles.section, { backgroundColor: colors.surface }]}>
          <Text style={[styles.sectionTitle, { color: colors.text.primary, fontSize: fontSize.md }]}>Tema</Text>
          <View style={[styles.optionRow, { borderColor: colors.border }]}>
            <Text style={[styles.optionText, { color: colors.text.primary, fontSize: fontSize.sm }]}>Automático</Text>
            <TouchableOpacity
              style={getRadioButtonStyle(currentThemeMode === "automatic")}
              onPress={() => handleThemeChange("automatic")}
            />
          </View>
          <View style={[styles.optionRow, { borderColor: colors.border }]}>
            <Text style={[styles.optionText, { color: colors.text.primary, fontSize: fontSize.sm }]}>Claro</Text>
            <TouchableOpacity
              style={getRadioButtonStyle(currentThemeMode === "light")}
              onPress={() => handleThemeChange("light")}
            />
          </View>
          <View style={[styles.optionRow, { borderColor: colors.border }]}>
            <Text style={[styles.optionText, { color: colors.text.primary, fontSize: fontSize.sm }]}>Escuro</Text>
            <TouchableOpacity
              style={getRadioButtonStyle(currentThemeMode === "dark")}
              onPress={() => handleThemeChange("dark")}
            />
          </View>
        </View>

        {/* Opção de Tamanho da Fonte */}
        <View style={[styles.section, { backgroundColor: colors.surface }]}>
          <Text style={[styles.sectionTitle, { color: colors.text.primary, fontSize: fontSize.md }]}>Tamanho da Fonte</Text>
          <View style={[styles.optionRow, { borderColor: colors.border }]}>
            <Text style={[styles.optionText, { color: colors.text.primary, fontSize: fontSize.sm }]}>Pequeno</Text>
            <TouchableOpacity
              style={getRadioButtonStyle(currentFontPreference === "small")}
              onPress={() => handleFontPreferenceChange("small")}
            />
          </View>
          <View style={[styles.optionRow, { borderColor: colors.border }]}>
            <Text style={[styles.optionText, { color: colors.text.primary, fontSize: fontSize.sm }]}>Médio</Text>
            <TouchableOpacity
              style={getRadioButtonStyle(currentFontPreference === "medium")}
              onPress={() => handleFontPreferenceChange("medium")}
            />
          </View>
          <View style={[styles.optionRow, { borderColor: colors.border }]}>
            <Text style={[styles.optionText, { color: colors.text.primary, fontSize: fontSize.sm }]}>Grande</Text>
            <TouchableOpacity
              style={getRadioButtonStyle(currentFontPreference === "large")}
              onPress={() => handleFontPreferenceChange("large")}
            />
          </View>
        </View>

        {/* Versão do App */}
        <View style={[styles.section, { backgroundColor: colors.surface }]}>
          <Text style={[styles.sectionTitle, { color: colors.text.primary, fontSize: fontSize.md }]}>Versão do App</Text>
          <Text style={[styles.optionText, { color: colors.text.secondary, fontSize: fontSize.sm }]}>{appVersion}</Text>
        </View>
      </ScrollView>
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
});

export default ConfigScreen;