//App.js
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthProvider, useAuth } from "./src/contexts/AuthContext";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import { useTheme } from "./src/contexts/ThemeContext";
import { View } from "react-native";
import { House, ArrowRightLeft, History, UserCog, Info, QrCode } from "lucide-react-native";

import LoadingScreen from "./src/screens/LoadingScreen";
import HomeScreen from "./src/screens/HomeScreen";
import BeneficiosScreen from "./src/screens/BenefitsScreen";
import HistoricoScreen from "./src/screens/HistoryScreen";
import SobreScreen from "./src/screens/AboutScreen";
import PerfilScreen from "./src/screens/ProfileScreen";
import ConfigScreen from "./src/screens/ConfigScreen";
import QRCodeScannerScreen from "./src/screens/QRCodeScannerScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPassword";
import BottomNavigation from "./src/components/BottomNavigation";
import Header from "./src/components/header";
import LogoutButton from "./src/components/LogoutButton";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Navegação por abas
function TabScreens() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: "Início" }} />
      <Tab.Screen name="BeneficiosTab" component={BeneficiosScreen} options={{ title: "Troca" }} />
      <Tab.Screen name="HistoricoTab" component={HistoricoScreen} options={{ title: "Histórico" }} />
      <Tab.Screen name="SobreTab" component={SobreScreen} options={{ title: "Sobre" }} />
      <Tab.Screen name="PerfilTab" component={PerfilScreen} options={{ title: "Perfil" }} />
    </Tab.Navigator>
  );
}

// Stack de autenticação
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}

// Stack do app autenticado
function AppStack() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <View style={{ flex: 1 }}>
          <DrawerItemList {...props} />
          <LogoutButton />
        </View>
      )}
      screenOptions={{ header: () => <Header /> }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={TabScreens} options={{ title: "Início", drawerIcon: () => <House size={20} /> }} />
      <Drawer.Screen name="Perfil" component={PerfilScreen} options={{ drawerIcon: () => <UserCog size={20} /> }} />
      <Drawer.Screen name="Troca" component={BeneficiosScreen} options={{ drawerIcon: () => <ArrowRightLeft size={20} /> }} />
      <Drawer.Screen name="QrCode" component={QRCodeScannerScreen} options={{ drawerIcon: () => <QrCode size={20} /> }} />
      <Drawer.Screen name="Historico" component={HistoricoScreen} options={{ title: "Histórico", drawerIcon: () => <History size={20} /> }} />
      <Drawer.Screen name="Sobre" component={SobreScreen} options={{ drawerIcon: () => <Info size={20} /> }} />
      <Drawer.Screen name="Configurações" component={ConfigScreen} options={{ drawerIcon: () => <UserCog size={20} /> }} />
    </Drawer.Navigator>
  );
}

function MainApp() {
  const theme = useTheme();
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <NavigationContainer theme={theme}>
      {isLoading ? <LoadingScreen /> : isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <MainApp />
      </ThemeProvider>
    </AuthProvider>
  );
}