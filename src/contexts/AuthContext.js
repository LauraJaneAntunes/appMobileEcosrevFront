import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("userToken"); // Busca token no armazenamento
      setIsAuthenticated(!!token); // Se existir um token, está autenticado
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (token) => {
    await AsyncStorage.setItem("userToken", token); // Salva o token ao logar
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("userToken"); // Remove o token ao deslogar
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acessar o contexto
export const useAuth = () => useContext(AuthContext);
