# 📦 Dependências

Este projeto utiliza diversas dependências para garantir funcionalidades robustas e uma experiência fluida. Abaixo estão as principais categorias e seus respectivos pacotes:

### 🔗 **Navegação**

Essenciais para estruturar e gerenciar a navegação no aplicativo:

* `@react-navigation/native`: Base para navegação em aplicativos React Native.
* `@react-navigation/stack`: Navegação baseada em pilhas.
* `@react-navigation/bottom-tabs`: Abas inferiores para navegação.
* `@react-navigation/drawer`: Navegação por gavetas laterais.

### 🎨 **Interface Usuário (UI)**

Pacotes para criar interfaces visuais atraentes e responsivas:

* `react-native-paper`: Conjunto de componentes estilizados e prontos para uso.
* `react-native-svg`: Suporte para gráficos vetoriais em React Native.
* `expo-linear-gradient`: Facilita a criação de gradientes nos componentes visuais.
* `lucide-react-native`: Ícones modernos e personalizáveis.

### 📋 **Formulários**

Ferramentas para facilitar o gerenciamento e validação de formulários:

* `formik`: Simplifica o controle de estado em formulários.
* `yup`: Validação robusta de dados e esquemas.

### 📱 **Funcionalidades do Expo**

Pacotes oferecidos pelo Expo para recursos nativos:

* `expo-camera`: Acesso à câmera do dispositivo.
* `expo-status-bar`: Controle da barra de status.
* `@expo/metro-runtime`: Otimizações de execução para o ambiente Expo.

### 🛠 **Gerenciamento de Estado/Contexto**

Dependências que ajudam na persistência e organização de dados:

* `@react-native-async-storage/async-storage`: Armazenamento persistente de dados localmente.
* `react`: Core para criação de componentes e gerenciamento de estado.

### 💫 **Animações**

Para criar animações ricas e fluidas no aplicativo:

* `react-native-reanimated`: Animações avançadas com alta performance.

### 📌 **Outros Utilitários**

Pacotes essenciais para funcionalidades variadas:

* `react-native-gesture-handler`: Gerenciamento de gestos em interfaces interativas.
* `react-native-safe-area-context`: Adaptabilidade ao espaço seguro em diferentes dispositivos.
* `react-native-screens`: Otimização da renderização de telas em React Native.
* `react-native-pager-view`: Implementação de páginas com rolagem suave.
* `react-native-web`: Suporte para rodar aplicações React Native na web.

### 🧑‍💻 **Ferramentas de Desenvolvimento**

Para facilitar o processo de desenvolvimento:

* `@babel/core`: Transpila o código JavaScript para garantir compatibilidade.



## 📂 Estrutura do Projeto

Abaixo está a estrutura completa do projeto, detalhando os diretórios e arquivos organizados:

APPMOBILECOSREVFRONT
├── .expo
├── assets
├── node_modules
├── src
│   ├── components
│   │   ├── Animation.js

│   │   ├── AuthForm.js

│   │   ├── BottomNavigation.js

│   │   ├── Carousel.js

│   │   ├── Header.js

│   │   ├── LogoutButton.js

│   ├── contexts
│   │   ├── AuthContext.js

│   │   ├── FontContext.js

│   │   ├── ThemeContext.js

│   ├── screens
│   │   ├── AboutScreen.js

│   │   ├── BenefitsScreen.js

│   │   ├── ConfigScreen.js

│   │   ├── ForgotPassword.js

│   │   ├── HistoryScreen.js

│   │   ├── HomeScreen.js

│   │   ├── LoadingScreen.js

│   │   ├── LoginScreen.js

│   │   ├── ProfileScreen.js

│   │   ├── QRCodeScannerScreen.js

│   │   ├── RegisterScreen.js

│   ├── utils
│   │   ├── theme.js

│   │   ├── validationSchemas.js

├── .gitignore
├── App.js

├── app.json

├── babelconfig.js

├── index.js

├── package-lock.json

├── package.json

├── README.md

### 📋 Descrição Geral:

- **`.expo`**: Diretório gerado automaticamente pelo Expo contendo configurações do projeto.
- **`assets`**: Armazena imagens, fontes e outros arquivos estáticos.
- **`node_modules`**: Diretório com todas as dependências do projeto gerenciadas pelo npm ou yarn.
- **`src/components`**: Componentes reutilizáveis usados em diferentes partes do aplicativo.
- **`src/contexts`**: Configuração e gerenciamento de contexto (como autenticação e temas).
- **`src/screens`**: Telas individuais do aplicativo.
- **`src/utils`**: Funções utilitárias, temas e esquemas de validação.
- **Arquivos da Raiz**:
  - `App.js`: Arquivo principal que inicializa o aplicativo.
  - `app.json`: Configurações específicas do Expo.
  - `babel.config.js`: Configuração para o Babel (transpilação do JavaScript).
  - `package.json`: Lista de dependências e scripts do projeto.
  - `.gitignore`: Arquivos e diretórios ignorados pelo Git.
  - `README.md`: Este arquivo explicativo do projeto.

---

Você pode incluir isso no seu README para documentar a estrutura do projeto de forma clara e organizada. Se precisar de mais ajustes ou melhorias, é só avisar! 🚀😊
