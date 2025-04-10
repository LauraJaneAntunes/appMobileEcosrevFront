// src/utils/validationSchemas.js
import * as Yup from 'yup';

// Função de teste para simular proteção contra XSS/injeções
const noMaliciousContent = (label = 'Campo') =>
  Yup.string().test(
    'no-malicious-content',
    `${label} contém caracteres potencialmente maliciosos`,
    value => {
      if (!value) return true;
      return !/[<>{}()"';`]|script|select|insert|update|delete|drop|--/i.test(value);
    }
  );

// Formulário de registro
export const registerSchema = Yup.object().shape({
  name: noMaliciousContent('Nome')
    .min(2, 'Nome muito curto')
    .required('Nome é obrigatório'),
  email: noMaliciousContent('Email')
    .email('Email inválido')
    .required('Email é obrigatório'),
  password: noMaliciousContent('Senha')
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
    .matches(/[!@#$%^&*_]/, 'A senha deve conter pelo menos um caractere especial')
    .required('A Senha é obrigatória'),
});

// Formulário de login
export const loginSchema = Yup.object().shape({
  email: noMaliciousContent('Email')
    .email('Email inválido')
    .required('O email é obrigatório'),
  password: noMaliciousContent('Senha')
    .required('A Senha é obrigatória'),
});

// Formulário de recuperação de senha
export const forgotPasswordSchema = Yup.object().shape({
  email: noMaliciousContent('Email')
    .email('Email inválido')
    .required('O email é obrigatório'),
});

// Atualização de senha no perfil
export const passwordUpdateSchema = Yup.object().shape({
  currentPassword: noMaliciousContent('Senha atual')
    .required('Senha atual é obrigatória'),
  newPassword: noMaliciousContent('Nova senha')
    .min(6, 'A nova senha deve ter no mínimo 6 caracteres')
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula', { excludeEmptyString: true })
    .matches(/[0-9]/, 'A senha deve conter pelo menos um número', { excludeEmptyString: true })
    .matches(/[!@#$%^&*_]/, 'A senha deve conter pelo menos um caractere especial', { excludeEmptyString: true })
    .required('Nova senha é obrigatória'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'As senhas devem coincidir')
    .required('Confirmação da nova senha é obrigatória'),
});
