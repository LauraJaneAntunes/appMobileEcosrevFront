//src\configs
import React from "react";
import { View } from "react-native";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { House, ArrowRightLeft, History, UserCog, Info, QrCode, LogIn } from "lucide-react-native";

import HomeScreen from "../screens/HomeScreen";
import BeneficiosScreen from "../screens/BenefitsScreen";
import HistoricoScreen from "../screens/HistoryScreen";
import SobreScreen from "../screens/AboutScreen";
import PerfilScreen from "../screens/ProfileScreen";
import ConfigScreen from "../screens/ConfigScreen";
import QRCodeScannerScreen from "../screens/QRCodeScannerScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgotPasswordScreen from "../screens/ForgotPassword";
import BottomNavigation from "../components/BottomNavigation";
import Header from "../components/Header";
import LogoutButton from "../components/LogoutButton";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Navegação por abas
export function TabScreens() {
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
export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}

// Stack do app autenticado
export function AppStack() {
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
      <Drawer.Screen name="Login" component={LoginScreen} options={{ title: "Entrar", drawerIcon: () => <LogIn size={20} /> }} />
      <Drawer.Screen name="Troca" component={BeneficiosScreen} options={{ drawerIcon: () => <ArrowRightLeft size={20} /> }} />
      <Drawer.Screen name="QrCode" component={QRCodeScannerScreen} options={{ drawerIcon: () => <QrCode size={20} /> }} />
      <Drawer.Screen name="Historico" component={HistoricoScreen} options={{ title: "Histórico", drawerIcon: () => <History size={20} /> }} />
      <Drawer.Screen name="Sobre" component={SobreScreen} options={{ drawerIcon: () => <Info size={20} /> }} />
      <Drawer.Screen name="Configurações" component={ConfigScreen} options={{ drawerIcon: () => <UserCog size={20} /> }} />
    </Drawer.Navigator>
  );
}