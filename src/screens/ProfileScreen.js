import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../contexts/ThemeContext';
import { useFontSettings } from '../contexts/FontContext';
import { User, CirclePower, Eye, EyeOff, Key, Save, X } from 'lucide-react-native';
import CustomAlert from '../components/CustomAlert';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  const { fontSize } = useFontSettings();

  const [userData, setUserData] = useState({
    nome: '',
    email: '',
    profileImage: '',
  });

  const [passwordAtual, setPasswordAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showPasswordAtual, setShowPasswordAtual] = useState(true); // Inicialmente oculto
  const [showNovaSenha, setShowNovaSenha] = useState(true);     // Inicialmente oculto
  const [showConfirmarNovaSenha, setShowConfirmarNovaSenha] = useState(true); // Inicialmente oculto
  const [isLoading, setIsLoading] = useState(true);

  // Estados para os CustomAlerts
  const [alertConfig, setAlertConfig] = useState({
    visible: false,
    title: '',
    message: '',
    confirmText: '',
    cancelText: '',
    onConfirm: () => {},
    confirmColor: '',
  });

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
      showAlert({
        title: 'Erro',
        message: 'Não foi possível carregar os dados do perfil.',
        confirmText: 'OK',
        confirmColor: theme.colors.error
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Função genérica para mostrar alertas
  const showAlert = ({ title, message, confirmText = 'OK', cancelText = '', onConfirm = () => {}, confirmColor = theme.colors.primary }) => {
    setAlertConfig({
      visible: true,
      title,
      message,
      confirmText,
      cancelText,
      onConfirm,
      confirmColor
    });
  };

  // Função para fechar o alerta
  const closeAlert = () => {
    setAlertConfig(prev => ({ ...prev, visible: false }));
  };

  const handleSavePassword = () => {
    if (!passwordAtual || !novaSenha || !confirmarNovaSenha) {
      showAlert({ title: 'Erro', message: 'Todos os campos são obrigatórios.', confirmColor: theme.colors.error });
      return;
    }
    if (novaSenha !== confirmarNovaSenha) {
      showAlert({ title: 'Erro', message: 'As senhas não coincidem.', confirmColor: theme.colors.error });
      return;
    }
    if (novaSenha.length < 6) {
      showAlert({ title: 'Erro', message: 'A senha deve ter pelo menos 6 caracteres.', confirmColor: theme.colors.error });
      return;
    }
    console.log('Senha Atual:', passwordAtual);
    console.log('Nova Senha:', novaSenha);
    console.log('Confirmar Nova Senha:', confirmarNovaSenha);
    showAlert({ title: 'Sucesso', message: 'Senha alterada (simulada).', confirmColor: theme.colors.success });
    setPasswordAtual('');
    setNovaSenha('');
    setConfirmarNovaSenha('');
    setShowModal(false);
  };
  // Função para limpar os inputs ao fechar/sair do modal
  const closeModal = () => {
    setShowModal(false);
    setPasswordAtual('');
    setNovaSenha('');
    setConfirmarNovaSenha('');
    setShowPasswordAtual(true);
    setShowNovaSenha(true);
    setShowConfirmarNovaSenha(true);
  };

  const handleLogout = () => {
    showAlert({
      title: 'Confirmar Saída',
      message: 'Tem certeza que deseja sair da conta?',
      confirmText: 'Sair',
      cancelText: 'Cancelar',
      confirmColor: theme.colors.error,
      onConfirm: () => navigation.replace('Login')
    });
  };

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
                  backgroundColor: theme.colors.background
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
                  backgroundColor: theme.colors.background
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
              <Key size={24} color={theme.colors.text.inverse} style={{ marginRight: 8 }} />
              <Text style={[styles.buttonText, { color: theme.colors.text.inverse, fontSize: fontSize.md }]}>
                Alterar Senha
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.logoutButton, { borderColor: theme.colors.error }]}
          onPress={handleLogout}
        >
          <CirclePower size={24} color={theme.colors.error} />
          <Text style={[styles.logoutText, { color: theme.colors.error, fontSize: fontSize.md }]}>
            Logout
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

                <View style={styles.inputGroup}>
                  <Text style={[styles.label, { color: theme.colors.text.secondary, fontSize: fontSize.md }]}>
                    Senha Atual
                  </Text>
                  <View style={[styles.passwordInputContainer, { borderColor: theme.colors.border }]}>
                    <TextInput
                      style={[styles.passwordInput, { color: theme.colors.text.primary, fontSize: fontSize.md }]}
                      placeholder="Digite sua senha atual"
                      placeholderTextColor={theme.colors.text.secondary}
                      secureTextEntry={showPasswordAtual}
                      value={passwordAtual}
                      onChangeText={setPasswordAtual}
                    />
                    <TouchableOpacity
                      style={styles.eyeIcon}
                      onPress={() => setShowPasswordAtual(!showPasswordAtual)}
                    >
                      {!showPasswordAtual ? (
                        <Eye size={20} color={theme.colors.text.secondary} />
                      ) : (
                        <EyeOff size={20} color={theme.colors.text.secondary} />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.inputGroup}>
                  <Text style={[styles.label, { color: theme.colors.text.secondary, fontSize: fontSize.md }]}>
                    Nova Senha
                  </Text>
                  <View style={[styles.passwordInputContainer, { borderColor: theme.colors.border }]}>
                    <TextInput
                      style={[styles.passwordInput, { color: theme.colors.text.primary, fontSize: fontSize.md }]}
                      placeholder="Digite sua nova senha"
                      placeholderTextColor={theme.colors.text.secondary}
                      secureTextEntry={showNovaSenha}
                      value={novaSenha}
                      onChangeText={setNovaSenha}
                    />
                    <TouchableOpacity
                      style={styles.eyeIcon}
                      onPress={() => setShowNovaSenha(!showNovaSenha)}
                    >
                      {!showNovaSenha ? (
                        <Eye size={20} color={theme.colors.text.secondary} />
                      ) : (
                        <EyeOff size={20} color={theme.colors.text.secondary} />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.inputGroup}>
                  <Text style={[styles.label, { color: theme.colors.text.secondary, fontSize: fontSize.md }]}>
                    Confirmar Nova Senha
                  </Text>
                  <View style={[styles.passwordInputContainer, { borderColor: theme.colors.border }]}>
                    <TextInput
                      style={[styles.passwordInput, { color: theme.colors.text.primary, fontSize: fontSize.md }]}
                      placeholder="Confirme sua nova senha"
                      placeholderTextColor={theme.colors.text.secondary}
                      secureTextEntry={showConfirmarNovaSenha}
                      value={confirmarNovaSenha}
                      onChangeText={setConfirmarNovaSenha}
                    />
                    <TouchableOpacity
                      style={styles.eyeIcon}
                      onPress={() => setShowConfirmarNovaSenha(!showConfirmarNovaSenha)}
                    >
                      {!showConfirmarNovaSenha ? (
                        <Eye size={20} color={theme.colors.text.secondary} />
                      ) : (
                        <EyeOff size={20} color={theme.colors.text.secondary} />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity
                  style={[styles.saveButton, { backgroundColor: theme.colors.primary }]}
                  onPress={handleSavePassword}
                >
                  <Save size={24} color={theme.colors.text.inverse} style={{ marginRight: 8 }} />
                  <Text style={[styles.buttonText, { color: theme.colors.text.inverse, fontSize: fontSize.md }]}>
                    Salvar Senha
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* CustomAlert Component */}
      <CustomAlert
        visible={alertConfig.visible}
        title={alertConfig.title}
        message={alertConfig.message}
        confirmText={alertConfig.confirmText}
        cancelText={alertConfig.cancelText}
        onConfirm={alertConfig.onConfirm}
        onClose={closeAlert}
        confirmColor={alertConfig.confirmColor}
      />
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
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    borderWidth: 2,
  },
  logoutText: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  saveButton: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center'
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
    padding: 10,
  },
});