//src\screens\RegisterScreen.js
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Eye, EyeOff } from 'lucide-react-native';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Nome muito curto')
    .required('Nome é obrigatório'),
  email: Yup.string()
    .email('Email inválido')
    .required('Email é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
    .matches(/[!@#$%^&*_]/, 'A senha deve conter pelo menos um caractere especial')
    .required('A sSenha é obrigatória'),
});

export default function Register() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const theme = useTheme();  

  const handleRegister = async (values) => {
    // IMPLEMENTAR LÓGICA DE BACKEND
    console.log('Simulando cadastro bem-sucedido:', values);
    const fakeToken = 'fakeUserToken'; // Simulação de token
    // Atualiza o estado de autenticação
    await login(fakeToken);
    setRegistrationSuccess(true);
    // Navega para a Home após um breve delay para mostrar a mensagem
    setTimeout(() => {
      navigation.navigate('Home');
      setRegistrationSuccess(false); // Limpa a mensagem após a navegação
    }, 1500); // 1.5 segundos
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.primary }]}>Cadastro</Text>

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegisterSchema}
        onSubmit={handleRegister}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View style={styles.form}>
            <TextInput
              label="Nome Completo"
              value={values.name}
              onChangeText={handleChange('name')}
              style={[styles.input, { backgroundColor: theme.colors.surface }]}
              mode="outlined"
              activeOutlineColor={theme.colors.primary}
              error={touched.name && errors.name}
            />
            {touched.name && errors.name && (
              <Text style={[styles.errorText, { color: theme.colors.error }]}>{errors.name}</Text>
            )}

            <TextInput
              label="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              style={[styles.input, { backgroundColor: theme.colors.surface }]}
              mode="outlined"
              activeOutlineColor={theme.colors.primary}
              error={touched.email && errors.email}
            />
            {touched.email && errors.email && (
              <Text style={[styles.errorText, { color: theme.colors.error }]}>{errors.email}</Text>
            )}

            <TextInput
              label="Senha"
              value={values.password}
              onChangeText={handleChange('password')}
              style={[styles.input, { backgroundColor: theme.colors.surface }]}
              mode="outlined"
              activeOutlineColor={theme.colors.primary}
              secureTextEntry={!showPassword}
              right={
                <TextInput.Icon
                  icon={() =>
                    showPassword ?
                      <EyeOff size={24} color={theme.colors.text.secondary} /> :
                      <Eye size={24} color={theme.colors.text.secondary} />
                  }
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              error={touched.password && errors.password}
            />
            {touched.password && errors.password && (
              <Text style={[styles.errorText, { color: theme.colors.error }]}>{errors.password}</Text>
            )}

            <TouchableOpacity
              style={[styles.button, { backgroundColor: theme.colors.primary }]}
              onPress={handleSubmit}
              disabled={registrationSuccess}
            >
              <Text style={[styles.buttonText, { color: theme.colors.text.inverse }]}>Cadastrar</Text>
            </TouchableOpacity>

            {registrationSuccess && (
              <Text style={[styles.successText, { color: theme.colors.success, textAlign: 'center', marginTop: theme.spacing.md }]}>Cadastro feito com sucesso!</Text>
            )}

            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.link}
            >
              <Text style={[styles.linkText, { color: theme.colors.primary }]}>Já tem uma conta? Faça login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 40,
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  input: {
    marginBottom: 8,
  },
  errorText: {
    fontSize: 12,
    marginBottom: 16,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 16,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 14,
  },
});