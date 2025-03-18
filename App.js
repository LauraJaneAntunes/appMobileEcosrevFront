import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { House, ArrowRightLeft, History, UserCog, Info } from "lucide-react-native";
import HomeScreen from "./src/screens/HomeScreen";
import BeneficiosScreen from "./src/screens/BenefitsScreen";
import HistoricoScreen from "./src/screens/HistoryScreen";
import SobreScreen from "./src/screens/AboutScreen";
import PerfilScreen from "./src/screens/ProfileScreen";
import ConfigScreen from "./src/screens/ConfigScreen";
import BottomNavigation from "./src/components/bottom-navigation";
import Header from "./src/components/header";
import LogoutButton from './src/components/LogoutButton';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Componente para renderizar o TabNavigator
function TabScreens() {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomNavigation {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: "Início" }} />
      <Tab.Screen name="BeneficiosTab" component={BeneficiosScreen} options={{ title: "Troca" }} />
      <Tab.Screen name="HistoricoTab" component={HistoricoScreen} options={{ title: "Histórico" }} />
      <Tab.Screen name="SobreTab" component={SobreScreen} options={{ title: "Sobre" }} />
      <Tab.Screen name="PerfilTab" component={PerfilScreen} options={{ title: "Perfil" }} />
    </Tab.Navigator>
  );
}

// StackNavigator para gerenciar as telas individuais
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={TabScreens} />
    </Stack.Navigator>
  );
}

function BeneficiosStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BeneficiosScreen" component={BeneficiosScreen} />
    </Stack.Navigator>
  );
}

function HistoricoStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HistoricoScreen" component={HistoricoScreen} />
    </Stack.Navigator>
  );
}

function SobreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SobreScreen" component={SobreScreen} />
    </Stack.Navigator>
  );
}

function PerfilStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
    </Stack.Navigator>
  );
}

function ConfigStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ConfigScreen" component={ConfigScreen} />
    </Stack.Navigator>
  );
}

// Botão de sair
const CustomDrawerContent = (props) => (
  <View style={{ flex: 1 }}>
    <DrawerItemList {...props} />

    <LogoutButton />
  </View>
);

// Drawer Navigator como ponto principal de navegação
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{ header: () => <Header /> }}
        initialRouteName="Home"
      >
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{
            title: "Início",
            drawerIcon: () => <House size={20} />,
          }}
        />
        <Drawer.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{
            drawerIcon: () => <UserCog size={20} />,
          }}
        />
        <Drawer.Screen
          name="Troca"
          component={BeneficiosScreen}
          options={{
            drawerIcon: () => <ArrowRightLeft size={20} />,
          }}
        />
        <Drawer.Screen
          name="Historico"
          component={HistoricoScreen}
          options={{
            title: "Histórico",
            drawerIcon: () => <History size={20} />,
          }}
        />
        <Drawer.Screen
          name="Sobre"
          component={SobreScreen}
          options={{
            drawerIcon: () => <Info size={20} />,
          }}
        />
        <Drawer.Screen
          name="Configurações"
          component={ConfigScreen}
          options={{
            drawerIcon: () => <UserCog size={20} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}