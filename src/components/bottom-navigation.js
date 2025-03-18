import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { House, ArrowRightLeft, History, UserCog, Info } from "lucide-react-native";
import { CommonActions } from '@react-navigation/native';

const BottomNavigation = ({ state, descriptors, navigation }) => {
  // Função para navegar em navegadores aninhados
  const navigateToScreen = (screenName) => {
    // Primeiro, feche o drawer se estiver aberto
    navigation.dispatch(CommonActions.navigate({
      name: screenName,
    }));
  };

  const tabs = [
    { name: "HomeTab", icon: House, label: "Início", drawerScreen: "Home" },
    { name: "BeneficiosTab", icon: ArrowRightLeft, label: "Troca", drawerScreen: "Troca" },
    { name: "HistoricoTab", icon: History, label: "Histórico", drawerScreen: "Historico" },
    { name: "SobreTab", icon: Info, label: "Sobre", drawerScreen: "Sobre" },
    { name: "PerfilTab", icon: UserCog, label: "Perfil", drawerScreen: "Perfil" },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isFocused = state.index === index;
        
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => {
              // Se estamos numa tela de tab, apenas navegamos para outra tab
              if (navigation.getState().routeNames.includes(tab.name)) {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: tab.name,
                });
                
                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(tab.name);
                }
              } else {
                // Se estamos numa tela do drawer, navegamos para o drawer correspondente
                navigateToScreen(tab.drawerScreen);
              }
            }}
          >
            <tab.icon size={24} color={isFocused ? "#2ecc71" : "#666"} />
            <Text style={[styles.tabLabel, isFocused && styles.activeTabLabel]}>
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
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
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
    color: "#666",
  },
  activeTabLabel: {
    color: "#2ecc71",
    fontWeight: "bold",
  },
});

export default BottomNavigation;