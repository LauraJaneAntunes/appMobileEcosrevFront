import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Modal, Alert, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../contexts/ThemeContext';
import { useFontSettings } from '../contexts/FontContext';
import { User, LogOut, Eye, EyeOff, Key, X } from 'lucide-react-native';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  const { fontSize } = useFontSettings();

  const [userData, setUserData] = useState({
    nome: '',
    email: '',
    profileImage: '',
  });

  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const user = data.results[0];

      setUserData({
        nome: `${user.name.first} ${user.name.last}`,
        email: user.email,
        profileImage: user.picture.large,
      });
    } catch (error) {
      console.error('Erro ao obter os dados do usuário:', error);
      Alert.alert('Erro', 'Não foi possível carregar os dados do perfil.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetPasswordFields = () => {
    setPasswords({
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    });
    setShowCurrentPassword(false);
    setShowNewPassword(false);
    setShowConfirmNewPassword(false);
  };

  const handleSavePassword = () => {
    // Validar campos vazios
    if (!passwords.currentPassword || !passwords.newPassword || !passwords.confirmNewPassword) {
      Alert.alert('Erro', 'Todos os campos de senha são obrigatórios.');
      return;
    }

    // Validar se as senhas coincidem
    if (passwords.newPassword !== passwords.confirmNewPassword) {
      Alert.alert('Erro', 'A nova senha e a confirmação não coincidem!');
      return;
    }

    // Validar força da senha (mínimo 8 caracteres)
    if (passwords.newPassword.length < 6) {
      Alert.alert('Erro', 'A nova senha deve ter no mínimo 8 caracteres.');
      return;
    }

    Alert.alert('Sucesso', 'Senha alterada com sucesso!');
    closeModal();
  };

  const closeModal = () => {
    setShowModal(false);
    resetPasswordFields();
  };

  const handleLogout = () => {
    Alert.alert(
      'Confirmar Saída',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sair', onPress: () => navigation.replace('Login') },
      ]
    );
  };

  const handleChange = (text) => {
    setText(text);
  };


  const PasswordField = ({ label, text, secureEntry, setSecureEntry, onChange, placeholder }) => (
    <View style={styles.inputGroup}>
      <Text style={[styles.label, { color: theme.colors.text.secondary, fontSize: fontSize.md }]}>
        {label}
      </Text>
      <View style={[styles.passwordInputContainer, { borderColor: theme.colors.border }]}>
        <TextInput
          style={[
            styles.passwordInput, 
            { color: theme.colors.text.primary, fontSize: fontSize.md }
          ]}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.text.secondary}
          secureTextEntry={secureEntry}
          value={text}
          onChangeText={handleChange}
        />
        <TouchableOpacity 
          style={styles.eyeIcon} 
          onPress={() => setSecureEntry(!secureEntry)}
        >
          {secureEntry ? (
            <EyeOff size={20} color={theme.colors.text.secondary} />
          ) : (
            <Eye size={20} color={theme.colors.text.secondary} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView 
      contentContainerStyle={styles.scrollContainer} 
      style={{ backgroundColor: theme.colors.background }}
    >
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <View style={[styles.card, { backgroundColor: theme.colors.surface, shadowColor: theme.colors.shadow }]}>
          <View style={styles.header}>
            {isLoading ? (
              <View style={[styles.userImagePlaceholder, { backgroundColor: theme.colors.border }]} />
            ) : userData.profileImage ? (
              <Image source={{ uri: userData.profileImage }} style={styles.userImage} />
            ) : (
              <View style={[styles.userImagePlaceholder, { backgroundColor: theme.colors.primary }]}>
                <User size={60} color={theme.colors.text.inverse} />
              </View>
            )}
            <Text style={[styles.title, { color: theme.colors.primary, fontSize: fontSize.lg }]}>
              Perfil do Usuário
            </Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: theme.colors.text.secondary, fontSize: fontSize.md }]}>
              Nome
            </Text>
            <TextInput
              style={[
                styles.input, 
                { 
                  borderColor: theme.colors.border, 
                  color: theme.colors.text.primary, 
                  fontSize: fontSize.md,
                  backgroundColor: theme.colors.inputBackground || theme.colors.background
                }
              ]}
              value={userData.nome}
              placeholder="Nome"
              placeholderTextColor={theme.colors.text.secondary}
              onChangeText={(text) => setUserData({ ...userData, nome: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: theme.colors.text.secondary, fontSize: fontSize.md }]}>
              E-mail
            </Text>
            <TextInput
              style={[
                styles.input, 
                { 
                  borderColor: theme.colors.border, 
                  color: theme.colors.text.primary, 
                  fontSize: fontSize.md,
                  backgroundColor: theme.colors.inputBackground || theme.colors.background
                }
              ]}
              value={userData.email}
              placeholder="E-mail"
              placeholderTextColor={theme.colors.text.secondary}
              onChangeText={(text) => setUserData({ ...userData, email: text })}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={[styles.passwordContainer, { backgroundColor: theme.colors.cardAlt || theme.colors.surface }]}>

            <TouchableOpacity 
              style={[styles.button, { backgroundColor: theme.colors.primary }]} 
              onPress={() => setShowModal(true)}
            >
              <Key size={18} color={theme.colors.text.inverse} style={{ marginRight: 8 }} />
              <Text style={[styles.buttonText, { color: theme.colors.text.inverse, fontSize: fontSize.md }]}>
                Alterar Senha
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity 
          style={[styles.logoutButton, { backgroundColor: theme.colors.error }]} 
          onPress={handleLogout}
        >
          <LogOut size={24} color={theme.colors.text.inverse} />
          <Text style={[styles.logoutText, { color: theme.colors.text.inverse, fontSize: fontSize.md }]}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showModal} animationType="slide" transparent>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
              <View style={[styles.modalContent, { backgroundColor: theme.colors.surface }]}>
                <View style={styles.modalHeader}>
                  <Text style={[styles.modalTitle, { color: theme.colors.primary, fontSize: fontSize.lg }]}>
                    Alterar Senha
                  </Text>
                  <TouchableOpacity style={styles.closeModalButton} onPress={closeModal}>
                    <X size={24} color={theme.colors.text.primary} />
                  </TouchableOpacity>
                </View>

                <PasswordField 
                  label="Senha Atual"
                  value={passwords.currentPassword}
                  secureEntry={showCurrentPassword}
                  setSecureEntry={setShowCurrentPassword}
                  onChange={(text) => setPasswords({ ...passwords, currentPassword: text })}
                  placeholder="Digite sua senha atual"
                />

                <PasswordField 
                  label="Nova Senha"
                  value={passwords.newPassword}
                  secureEntry={showNewPassword}
                  setSecureEntry={setShowNewPassword}
                  onChange={(text) => setPasswords({ ...passwords, newPassword: text })}
                  placeholder="Digite sua nova senha"
                />

                <PasswordField 
                  label="Confirmar Nova Senha"
                  value={passwords.confirmNewPassword}
                  secureEntry={showConfirmNewPassword}
                  setSecureEntry={setShowConfirmNewPassword}
                  onChange={(text) => setPasswords({ ...passwords, confirmNewPassword: text })}
                  placeholder="Confirme sua nova senha"
                />

                <TouchableOpacity 
                  style={[styles.saveButton, { backgroundColor: theme.colors.primary }]} 
                  onPress={handleSavePassword}
                >
                  <Text style={[styles.buttonText, { color: theme.colors.text.inverse, fontSize: fontSize.md }]}>
                    Salvar
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  userImagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  passwordContainer: {
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  button: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  logoutText: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: 20,
    borderRadius: 15,
    width: '90%',
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  modalTitle: {
    fontWeight: 'bold',
    flex: 1,
  },
  closeModalButton: {
    padding: 5,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
  },
  eyeIcon: {
    paddingHorizontal: 12,
  },
  saveButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
});