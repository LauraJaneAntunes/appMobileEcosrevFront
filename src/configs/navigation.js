// src\configs\navigation.js

import React, { useEffect } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { CommonActions } from '@react-navigation/native';
import { House, ArrowRightLeft, History, UserCog, Info, QrCode, LogIn } from "lucide-react-native";
import { useTheme } from "../contexts/ThemeContext";
import { useFontSettings } from "../contexts/FontContext";

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

// Wrapper (função que retorna um conjunto de navegação focada em uma única tela) - configurações
function ConfigScreenWithTabs() {
  return <ConfigScreen />;
}

// Wrapper - QRCode
function QRCodeScreenWithTabs() {
  return <QRCodeScannerScreen />;
}

// Wrapper - Login
function LoginScreenWithTabs() {
  return <LoginScreen />;
}

// Navegação por abas - menu inferior (Bottom Navigation)
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

// Stack de autenticação - navegação da área não autenticada
export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}

// Stack do app autenticado - navegação com o menu lateral (drawer), usada quando o usuário esta logado
export function AppStack() {
  const theme = useTheme();
  const { fontSize, fontFamily } = useFontSettings();

  // Criamos um componente para exibir o QRCode com bottom navigation
  function QRCodeWithBottomNav() {
    return (
      <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="QRCodeScreen" component={QRCodeScannerScreen} />
        {/* Adicionamos as tabs normais, mas escondidas */}
        <Tab.Screen name="HomeTab" component={HomeScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="BeneficiosTab" component={BeneficiosScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="HistoricoTab" component={HistoricoScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="PerfilTab" component={PerfilScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="SobreTab" component={SobreScreen} options={{ tabBarButton: () => null }} />
      </Tab.Navigator>
    );
  }

  // Criamos um componente para Config com bottom navigation
  function ConfigWithBottomNav() {
    return (
      <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="ConfigScreen" component={ConfigScreen} />
        {/* Adicionamos as tabs normais, mas escondidas */}
        <Tab.Screen name="HomeTab" component={HomeScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="BeneficiosTab" component={BeneficiosScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="HistoricoTab" component={HistoricoScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="PerfilTab" component={PerfilScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="SobreTab" component={SobreScreen} options={{ tabBarButton: () => null }} />
      </Tab.Navigator>
    );
  }

  // Criamos um componente para Login com bottom navigation
  function LoginWithBottomNav() {
    return (
      <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="LoginScreen" component={LoginScreen} />
        {/* Adicionamos as tabs normais, mas escondidas */}
        <Tab.Screen name="HomeTab" component={HomeScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="BeneficiosTab" component={BeneficiosScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="HistoricoTab" component={HistoricoScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="PerfilTab" component={PerfilScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="SobreTab" component={SobreScreen} options={{ tabBarButton: () => null }} />
      </Tab.Navigator>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}> 
          <View style={styles.spacer} />
            <DrawerItemList {...props} />
            <LogoutButton />
        </SafeAreaView>
      )}
      screenOptions={{
        header: () => <Header />,
        drawerLabelStyle: {
          color: theme.colors.text.primary,
          fontFamily: fontFamily,
        },
        drawerActiveBackgroundColor: 'transparent',
      }}
      initialRouteName="Main"
    >
      <Drawer.Screen
        name="Main"
        component={TabScreens}
        options={{
          title: "Início",
          drawerIcon: () => <House size={fontSize.md} color={theme.colors.primary} />,
        }}
      />

      <Drawer.Screen
        name="Perfil"
        component={TabScreens}
        initialParams={{ screen: 'PerfilTab' }}
        options={{
          drawerIcon: () => <UserCog size={fontSize.md} color={theme.colors.primary} />,
        }}
      />

      <Drawer.Screen
        name="Login"
        component={LoginWithBottomNav}
        options={{
          title: "Entrar",
          drawerIcon: () => <LogIn size={fontSize.md} color={theme.colors.primary} />,
        }}
      />

      <Drawer.Screen
        name="Troca"
        component={TabScreens}
        initialParams={{ screen: 'BeneficiosTab' }}
        options={{
          drawerIcon: () => <ArrowRightLeft size={fontSize.md} color={theme.colors.primary} />,
        }}
      />

      <Drawer.Screen
        name="QrCode"
        component={QRCodeWithBottomNav}
        options={{
          drawerIcon: () => <QrCode size={fontSize.md} color={theme.colors.primary} />,
        }}
      />

      <Drawer.Screen
        name="Historico"
        component={TabScreens}
        initialParams={{ screen: 'HistoricoTab' }}
        options={{
          title: "Histórico",
          drawerIcon: () => <History size={fontSize.md} color={theme.colors.primary} />,
        }}
      />

      <Drawer.Screen
        name="Sobre"
        component={TabScreens}
        initialParams={{ screen: 'SobreTab' }}
        options={{
          drawerIcon: () => <Info size={fontSize.md} color={theme.colors.primary} />,
        }}
      />

      <Drawer.Screen
        name="Configurações"
        component={ConfigWithBottomNav}
        options={{
          drawerIcon: () => <UserCog size={fontSize.md} color={theme.colors.primary} />,
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  spacer: {
    height: 40,
    backgroundColor: 'transparent',
  },
});