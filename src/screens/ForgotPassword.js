//src\screens\ForgotPassword.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../contexts/ThemeContext';
import { useFontSettings } from '../contexts/FontContext';
import { forgotPasswordSchema } from '../utils/validationSchemas';
import AuthForm from '../components/AuthForm';

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const [feedback, setFeedback] = useState(null);
  const theme = useTheme();
  const { fontSize } = useFontSettings();

  const handleResetPassword = (values) => {
    // IMPLEMENTAR LÓGICA DE BACKEND
    console.log('Solicitação de recuperação de senha enviada para:', values.email);
    setFeedback({
      type: 'success',
      message: 'Uma senha temporária foi enviada para seu email.',
    });
  };

  const forgotPasswordFields = [
    { name: 'email', label: 'Email' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.primary, fontSize: fontSize.xl }]}>Recuperar Senha</Text>

      <AuthForm
        initialValues={{ email: '' }}
        validationSchema={forgotPasswordSchema}
        onSubmit={handleResetPassword}
        fields={forgotPasswordFields}
        isPasswordVisible={false}
        togglePasswordVisibility={() => {}}
        errorMessages={feedback && feedback.type === 'error' ? { email: feedback.message } : null}
      >
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
          onPress={() => {}}
        >
          <Text style={[styles.buttonText, { color: theme.colors.text.inverse, fontSize: fontSize.md }]}>
            Enviar
          </Text>
        </TouchableOpacity>
      </AuthForm>

      {feedback && feedback.type === 'success' && (
        <Text style={[styles.feedbackText, { color: theme.colors.success, fontSize: fontSize.sm }]}>
          {feedback.message}
        </Text>
      )}

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.link}>
        <Text style={[styles.linkText, { color: theme.colors.primary, fontSize: fontSize.sm }]}>
          Voltar para o login
        </Text>
      </TouchableOpacity>
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
  feedbackText: {
    textAlign: 'center',
    marginTop: 16,
  },
});