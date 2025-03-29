import { useColorScheme } from 'react-native';

const lightTheme = {
    colors: {
      primary: '#22C55E',      // Verde principal
      secondary: '#2ecc71',    // Verde secundário
      background: '#f4f4f4',   // Fundo principal (claro)
      surface: '#DFF0DB',      // Superfície (ex.: cartões ou contêineres)
      error: '#F44336',        // Mensagens de erro
      text: {
        primary: '#212121',    // Texto principal
        secondary: '#757575',  // Texto secundário
        disabled: '#9E9E9E',   // Texto desabilitado
        inverse: '#FFFFFF',    // Texto em fundos escuros
      },
      border: '#E0E0E0',       // Bordas
      success: '#4CAF50',      // Mensagens de sucesso
      warning: '#FFC107',      // Alertas
      info: '#2196F3',         // Informações
    },
  };
    
  const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  };
  
  const typography = {
    fontFamily: {
      regular: 'System',
      medium: 'System-Medium',
      bold: 'System-Bold',
    },
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      xxl: 24,
      xxxl: 32,
    },
    lineHeight: {
      xs: 16,
      sm: 20,
      md: 24,
      lg: 28,
      xl: 32,
      xxl: 36,
      xxxl: 40,
    },
  };
  
  const borderRadius = {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    round: 9999,
  };
  
  const shadows = {
    none: {
      shadowColor: 'transparent',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    },
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,
    },
  };
  
  // Layout metrics
  const metrics = {
    screenWidth: null, // Será atualizado em runtime
    screenHeight: null, // Será atualizado em runtime
    statusBarHeight: 24, // Valor padrão, será atualizado em runtime
    headerHeight: 56,
    tabBarHeight: 56,
    contentPadding: spacing.md,
  };
  
  // Definição de breakpoints para layout responsivo
  const breakpoints = {
    phone: 0,
    tablet: 768,
  };
  
  const updateMetrics = (dimensions) => {
    metrics.screenWidth = dimensions.width;
    metrics.screenHeight = dimensions.height;
  };
  
  export default {
    colors,
    spacing,
    typography,
    borderRadius,
    shadows,
    metrics,
    breakpoints,
    updateMetrics,
  };

  const darkTheme = {
    colors: {
      primary: '#22C55E',      
      secondary: '#2ecc71',   
      background: '#121212',
      surface: '#1E1E1E',
      error: '#CF6679',
      text: {
        primary: '#FFFFFF',
        secondary: '#B0B0B0',
        disabled: '#757575',
        inverse: '#000000',
      },
      border: '#333333',
      success: '#4CAF50',
      warning: '#FFC107',
      info: '#2196F3',
    },
  };

  // Hook para definir qual tema usar automaticamente
const useTheme = () => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? darkTheme : lightTheme;
};

export { lightTheme, darkTheme, useTheme };
