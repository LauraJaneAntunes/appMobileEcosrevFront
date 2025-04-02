## Dependências

Este projeto utiliza as seguintes dependências:

* **Navegação:** `@react-navigation/native`, `@react-navigation/stack`, `@react-navigation/bottom-tabs` e `@react-navigation/drawer`  para a estrutura de navegação do aplicativo.
* **UI:** `react-native-paper`, `react-native-svg`, `expo-linear-gradient` e `lucide-react-native` para componentes e estilos visuais.
* **Formulários:** `formik` e `yup` para facilitar o gerenciamento e a validação de formulários.
* **Funcionalidades Expo:** `expo-camera` para acesso à câmera, `expo-status-bar` para controle da barra de status e outras funcionalidades core do Expo.
* **Gerenciamento de estado/contexto:** `@react-native-async-storage/async-storage` para persistência de dados e `react` para o gerenciamento de componentes.
* **Animações:** `react-native-reanimated` para animações complexas.
* **Outros:** `react-native-gesture-handler`, `react-native-safe-area-context`, `react-native-screens`, `react-native-pager-view` e `@expo/metro-runtime` para funcionalidades diversas e suporte ao ambiente React Native e Expo. O `@babel/core`, que é utilizado durante o desenvolvimento para transpilar o código JavaScript.

# Estrutura

APPMOBILEECOSREVFRONT/
├── assets/
├── node_modules/
└── src/
    ├── components/
    │   ├── AuthForm.js
    │   ├── BottomNavigation.js
    │   ├── Carousel.js
    │   ├── Header.js
    │   └── LogoutButton.js
    ├── contexts/
    │   ├── AuthContext.js
    │   ├── FontContext.js
    │   └── ThemeContext.js
    ├── screens/
    │   ├── AboutScreen.js
    │   ├── BenefitsScreen.js
    │   ├── ConfigScreen.js
    │   ├── ForgotPassword.js
    │   ├── HistoryScreen.js
    │   ├── HomeScreen.js
    │   ├── LoadingScreen.js
    │   ├── LoginScreen.js
    │   ├── ProfileScreen.js
    │   ├── QRCodeScannerScreen.js
    │   └── RegisterScreen.js
    └── utils/
        ├── theme.js
        └── validationSchemas.js
├── .gitignore
└── App.js
