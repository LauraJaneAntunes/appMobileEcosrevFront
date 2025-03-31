//src\components\BottomNavigation.js
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { House, ArrowRightLeft, History, UserCog, Info } from "lucide-react-native";
import { CommonActions, useNavigation } from '@react-navigation/native';
// import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useFontSettings } from "../contexts/FontContext";

const BottomNavigation = ({ state, navigation }) => {
  // const { isAuthenticated } = useAuth();
  const theme = useTheme();
  const nav = useNavigation();
  const { fontSize } = useFontSettings();

  const tabs = [
    { name: "HomeTab", icon: House, label: "Início", drawerScreen: "Home" },
    { name: "BeneficiosTab", icon: ArrowRightLeft, label: "Troca", drawerScreen: "Troca" },
    { name: "HistoricoTab", icon: History, label: "Histórico", drawerScreen: "Historico" },
    { name: "SobreTab", icon: Info, label: "Sobre", drawerScreen: "Sobre" },
    { name: "PerfilTab", icon: UserCog, label: "Perfil", drawerScreen: "Perfil" },
  ];

  //atualizei para ficar simples

  const handleTabPress = (tab) => {
    if (tab.name === "HomeTab") {
      // A HomeTab sempre recarrega a tela
      navigation.dispatch(CommonActions.navigate({ name: tab.name }));
    } else {
      navigation.dispatch(CommonActions.navigate({ name: tab.name }));

      // Para outras abas, verificar autenticação
      // if (isAuthenticated) {
      //   navigation.dispatch(CommonActions.navigate({ name: tab.name }));
      // } else {
      //   Alert.alert(
      //     "Acesso Restrito",
      //     "Você precisa estar logado para acessar esta tela.",
      //     [
      //       {
      //         text: "Entrar",
      //         onPress: () => nav.navigate("Login"),
      //       },
      //     ]
      //   );
      // }
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface, borderTopColor: theme.colors.border }]}>
      {tabs.map((tab, index) => {
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => handleTabPress(tab)}
          >
            <tab.icon size={24} color={isFocused ? theme.colors.primary : theme.colors.text.secondary} />
            <Text style={[
              styles.tabLabel,
              { fontSize: fontSize.md, color: theme.colors.text.secondary },
              isFocused && { color: theme.colors.primary, fontWeight: 'bold' }
            ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderTopWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: "space-around",
    alignItems: "center",
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default BottomNavigation;