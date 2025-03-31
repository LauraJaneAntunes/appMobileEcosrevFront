// src/utils/validationSchemas.js
import * as Yup from 'yup';

// Define o esquema de validação para o formulário de registro.
export const registerSchema = Yup.object().shape({
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
    .required('A Senha é obrigatória'),
});

// Define o esquema de validação para o formulário de login.
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .required('A Senha é obrigatória'),
});

// Define o esquema de validação para o formulário de recuperação de senha.
export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('O email é obrigatório'),
});

// Define o esquema de validação para o formulário de atualização de senha (no perfil).
export const passwordUpdateSchema = Yup.object().shape({
  currentPassword: Yup.string().required('Senha atual é obrigatória'),
  newPassword: Yup.string()
    .min(6, 'A nova senha deve ter no mínimo 6 caracteres')
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula', { excludeEmptyString: true })
    .matches(/[0-9]/, 'A senha deve conter pelo menos um número', { excludeEmptyString: true })
    .matches(/[!@#$%^&*_]/, 'A senha deve conter pelo menos um caractere especial', { excludeEmptyString: true })
    .required('Nova senha é obrigatória'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'As senhas devem coincidir')
    .required('Confirmação da nova senha é obrigatória'),
});