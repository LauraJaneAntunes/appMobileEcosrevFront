import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Eye, EyeOff } from 'lucide-react-native';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Nome muito curto')
    .required('Nome é obrigatório'),
  email: Yup.string()
    .email('Email inválido')
    .required('Email é obrigatório'),
  password: Yup.string()
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .matches(/[A-Z]/, 'Senha deve conter pelo menos uma letra maiúscula')
    .matches(/[0-9]/, 'Senha deve conter pelo menos um número')
    .matches(/[!@#$%^&*]/, 'Senha deve conter pelo menos um caractere especial')
    .required('Senha é obrigatória'),
});

export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (values) => {
    // IMPLEMENTAR LÓGICA DE BACKEND
    console.log('Register:', values);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      
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
              style={styles.input}
              mode="outlined"
              activeOutlineColor="#22C55E"
              error={touched.name && errors.name}
            />
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}

            <TextInput
              label="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              style={styles.input}
              mode="outlined"
              activeOutlineColor="#22C55E"
              error={touched.email && errors.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TextInput
              label="Senha"
              value={values.password}
              onChangeText={handleChange('password')}
              style={styles.input}
              mode="outlined"
              activeOutlineColor="#22C55E"
              secureTextEntry={!showPassword}
              right={
                <TextInput.Icon
                  icon={() => 
                    showPassword ? 
                      <EyeOff size={24} color="#666" /> : 
                      <Eye size={24} color="#666" />
                  }
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              error={touched.password && errors.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/(auth)/login')}
              style={styles.link}
            >
              <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
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
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#22C55E',
    marginTop: 60,
    marginBottom: 40,
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  input: {
    marginBottom: 8,
    backgroundColor: 'white',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#22C55E',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 16,
    alignItems: 'center',
  },
  linkText: {
    color: '#22C55E',
    fontSize: 14,
  },
});