import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Email é obrigatório'),
});

export default function ForgotPassword() {
  const navigation = useNavigation();
  const [feedback, setFeedback] = useState(null);

  const handleResetPassword = (values) => {
    // Simulação de chamada à API - IMPLEMENTAR LÓGICA DE BACKEND
    setTimeout(() => {
      console.log('Solicitação de recuperação de senha enviada para:', values.email);
      setFeedback({
        type: 'success',
        message: 'Uma senha temporária foi enviada para seu email.',
      });
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      
      <Formik
        initialValues={{ email: '' }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={handleResetPassword}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View style={styles.form}>
            <TextInput
              label="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              style={styles.input}
              mode="outlined"
              activeOutlineColor="#4CAF50"
              error={touched.email && errors.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>

            {feedback && (
              <Text style={[
                styles.feedbackText,
                { color: feedback.type === 'success' ? '#4CAF50' : 'red' },
              ]}>
                {feedback.message}
              </Text>
            )}

            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.link}>
              <Text style={styles.linkText}>Voltar para o login</Text>
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
  feedbackText: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 14,
  },
});
