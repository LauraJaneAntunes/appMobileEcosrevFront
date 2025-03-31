//src\screens\ProfileScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../contexts/ThemeContext';
import { useFontSettings } from '../contexts/FontContext';
import { passwordUpdateSchema } from '../utils/validationSchemas';
import AuthForm from '../components/AuthForm';
import { User, LogOut } from 'lucide-react-native';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(null);
  const [updateError, setUpdateError] = useState(null);
  const theme = useTheme();
  const { fontSize } = useFontSettings();
  const [loggedInWithTemporaryPassword, setLoggedInWithTemporaryPassword] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // SIMULAÇÃO: Verifica se o usuário "acabou" de logar com uma senha temporária
    });
    return unsubscribe;
  }, [navigation]);

  const handleUpdatePassword = (values) => {
    setUpdateSuccess(null);
    setUpdateError(null);
    console.log('Dados para atualizar senha:', values);

    setTimeout(() => {
      const isCurrentPasswordCorrect = true;
      const newPasswordsMatch = values.newPassword === values.confirmNewPassword;
      const isNewPasswordValid = values.newPassword.length >= 6;

      if (!isCurrentPasswordCorrect) {
        setUpdateError('Senha atual incorreta.');
      } else if (!newPasswordsMatch) {
        setUpdateError('Nova senha e confirmação não coincidem.');
      } else if (!isNewPasswordValid) {
        setUpdateError('A nova senha deve ter no mínimo 6 caracteres.');
      } else {
        setUpdateSuccess('Senha atualizada com sucesso!');
        navigation.navigate('Home');
      }
    }, 1500);
  };

  const toggleCurrentPasswordVisibility = () => setShowCurrentPassword(!showCurrentPassword);
  const toggleNewPasswordVisibility = () => setShowNewPassword(!showNewPassword);
  const toggleConfirmNewPasswordVisibility = () => setShowConfirmNewPassword(!showConfirmNewPassword);

  const updatePasswordFields = [
    { name: 'currentPassword', label: 'Senha Atual', secureTextEntry: true },
    { name: 'newPassword', label: 'Nova Senha', secureTextEntry: true },
    { name: 'confirmNewPassword', label: 'Confirmar Nova Senha', secureTextEntry: true },
  ];

  const handleLogout = () => {
    console.log('Usuário deslogado');
    navigation.replace('Login');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.primary, fontSize: fontSize.xl }]}>Perfil</Text>

      <View style={styles.profileInfo}>
        <User size={80} color={theme.colors.primary} />
        <Text style={[styles.userName, { color: theme.colors.text.primary, fontSize: fontSize.lg }]} testID="profile-username">
          Usuário Exemplo
        </Text>
        <Text style={[styles.userEmail, { color: theme.colors.text.secondary, fontSize: fontSize.md }]} testID="profile-email">
          usuario@email.com
        </Text>
      </View>

      {loggedInWithTemporaryPassword && (
        <View style={[styles.alert, { backgroundColor: theme.colors.warning }]}>
          <Text style={[styles.alertText, { color: theme.colors.text.inverse, fontSize: fontSize.sm }]}>
            Você está logado com uma senha temporária. Por favor, atualize sua senha.
          </Text>
        </View>
      )}

      <View style={[styles.updatePasswordContainer, { shadowColor: theme.colors.text.primary }]}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text.primary, fontSize: fontSize.md }]}>Atualizar Senha</Text>
        <AuthForm
          initialValues={{ currentPassword: '', newPassword: '', confirmNewPassword: '' }}
          validationSchema={passwordUpdateSchema}
          onSubmit={handleUpdatePassword}
          fields={updatePasswordFields}
          isPasswordVisible={showNewPassword}
          togglePasswordVisibility={toggleNewPasswordVisibility}
          errorMessages={updateError ? { currentPassword: updateError } : null}
        >
          <TouchableOpacity
            style={[styles.updateButton, { backgroundColor: theme.colors.primary }]}
            onPress={() => {}}
          >
            <Text style={[styles.buttonText, { color: theme.colors.text.inverse, fontSize: fontSize.sm }]}>Atualizar Senha</Text>
          </TouchableOpacity>
        </AuthForm>

        {updateSuccess && (
          <Text style={[styles.successText, { color: theme.colors.success, fontSize: fontSize.sm }]}>
            {updateSuccess}
          </Text>
        )}
      </View>

      <TouchableOpacity
        style={[styles.logoutButton, { backgroundColor: theme.colors.error }]}
        onPress={handleLogout}
        testID="logout-button"
      >
        <LogOut size={24} color={theme.colors.text.inverse} />
        <Text style={[styles.logoutText, { color: theme.colors.text.inverse, fontSize: fontSize.md }]}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  userName: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  userEmail: {},
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 30,
  },
  logoutText: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  updatePasswordContainer: {
    width: '100%',
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'left',
    width: '100%',
  },
  updateButton: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  successText: {
    marginTop: 15,
    textAlign: 'center',
  },
  alert: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
  },
  alertText: {
    textAlign: 'center',
  },
});