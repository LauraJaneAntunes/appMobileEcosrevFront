//src\screens\LoginScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../contexts/ThemeContext';
import { useFontSettings } from '../contexts/FontContext';
import { loginSchema } from '../utils/validationSchemas';
import AuthForm from '../components/AuthForm';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccessTemporaryPassword, setLoginSuccessTemporaryPassword] = useState(false);
  const theme = useTheme();
  const { fontSize } = useFontSettings();

  const handleLogin = (values) => {
    console.log('Dados do formulário de login:', values);
    if (values.password.startsWith('TEMP_')) {
      alert('Login com senha temporária realizado com sucesso.');
      setLoginSuccessTemporaryPassword(true);
    } else {
      alert('Login realizado com sucesso.');
      setLoginSuccessTemporaryPassword(false);
    }
  };

  useEffect(() => {
    if (loginSuccessTemporaryPassword) {
      setTimeout(() => {
        navigation.navigate('Perfil');
        setLoginSuccessTemporaryPassword(false);
      }, 1500);
    }
  }, [loginSuccessTemporaryPassword, navigation]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const loginFields = [
    { name: 'email', label: 'Email' },
    { name: 'password', label: 'Senha', secureTextEntry: true },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.primary, fontSize: fontSize.xl }]}>Login</Text>

      <AuthForm
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
        fields={loginFields}
        isPasswordVisible={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
      >
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
          onPress={() => { }}
        >
          <Text style={[styles.buttonText, { color: theme.colors.text.inverse, fontSize: fontSize.md }]}>Entrar</Text>
        </TouchableOpacity>
      </AuthForm>

      <TouchableOpacity
        onPress={() => navigation.navigate('ForgotPassword')}
        style={styles.forgotPasswordLink}
      >
        <Text style={[styles.forgotPasswordText, { color: theme.colors.text.secondary, fontSize: fontSize.sm }]}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={styles.link}
      >
        <Text style={[styles.linkText, { color: theme.colors.primary, fontSize: fontSize.sm }]}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.link}
      >
        <Text style={[styles.linkText, { color: theme.colors.primary, fontSize: fontSize.sm }]}>
          Voltar para Home
        </Text>
      </TouchableOpacity>

      {loginSuccessTemporaryPassword && (
        <Text style={{ marginTop: 10, textAlign: 'center', color: theme.colors.primary, fontSize: fontSize.sm }}>
          Redirecionando para o Perfil para alterar a senha...
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {},
  forgotPasswordLink: {
    marginTop: 15,
    alignItems: 'flex-end',
  },
  forgotPasswordText: {},
});