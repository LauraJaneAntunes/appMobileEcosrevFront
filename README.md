# 🌱 Ecosrev

Bem-vindo ao **Ecosrev**!

Este projeto inovador busca revolucionar o descarte de eletrônicos, transformando-o em uma prática sustentável e recompensadora para a sociedade. ♻️

Originalmente iniciado como uma aplicação web em semestres anteriores, o projeto ganhou força e amadureceu ao longo do curso de  **Desenvolvimento de Software Multiplataforma** , na Fatec de Votorantim. Agora, nesta nova etapa, o foco está na construção de uma solução mobile avançada, alinhada às demandas do 5º semestre, integrando o aprendizado das disciplinas de  **Desenvolvimento Mobile 2** ,  **Laboratório de Desenvolvimento Mobile** , **Computação em Nuvem (AWS)** e  **Aprendizagem de Máquina** .

Combinando inovação tecnológica e responsabilidade ambiental, o projeto tem como objetivo proporcionar uma experiência prática, envolvente e eficiente, que beneficia tanto o meio ambiente quanto os usuários. 🌱✨

---

## 📱 Sobre o Projeto

O **Ecosrev** conecta cidadãos conscientes a empresas especializadas em reciclagem, tornando o descarte responsável mais acessível e vantajoso.

💚 **Contribua para um futuro mais sustentável enquanto ganha benefícios exclusivos a cada interação.**

---

## 🔗 Acesse Nosso SIte

Quer saber mais? Acesse nossa página oficial:

👉 [ecos-rev-pi.vercel.app](https://ecos-rev-pi.vercel.app/)

Ou nossa página sobre este projeto mobile:

👉 [ecos-rev-mobile.netlify.app](https://lpappmobileecosrev.netlify.app/)

🌟 **Junte-se a nós na missão de transformar o descarte eletrônico e fazer a diferença no planeta!**

---

## 📥 Em breve nas principais lojas de aplicativo

Fique de olho! O Ecosrev estará disponível para download em breve.

---

## 🧑‍💻 Desenvolvedores

Este projeto esta sendo desenvolvido por uma equipe de estudantes do curso de Desenvolvimento de Software Multiplataforma. Abaixo estão os nomes dos colaboradores:

| Nome                          | GitHub                                               |
| ----------------------------- | ---------------------------------------------------- |
| *Gabriel Yamaoka Bernardes* | [YamaokaK](https://github.com/YamaokaK)                 |
| *João Lucas Melo*           | [JoaoLucasMdO](https://github.com/JoaoLucasMdO)         |
| *Laura Jane Antunes*        | [LauraJaneAntunes](https://github.com/LauraJaneAntunes) |
| *Mariana Hirata*            | [marianakakimoto](https://github.com/marianakakimoto)   |
| *Mateus Ferreira*           | [AEntropia](https://github.com/AEntropia)               |

---



## 🚀 Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto no ambiente local:

### 📋 Pré-requisitos

Certifique-se de ter os seguintes softwares instalados no seu sistema:

* **Node.js** (versão 16 ou superior)
* **npm** ou **yarn** (gerenciador de pacotes)
* **Expo CLI** (para gerenciar e executar o projeto)

### 📥 Instalação

1. **Clone este repositório** :
   bash

```
git clonehttps://github.com/LauraJaneAntunes/appMobileEcosrevFront.git
```

1. **Acesse o diretório do projeto** :
   bash

```
cd appMobileEcosrevFront
```

1. **Instale as dependências** :
   Utilize npm ou yarn:
   bash

```
   npm install
```

   Ou:
   bash

```
   yarn install
```

### ▶️ Executando o Projeto

1. **Inicie o servidor de desenvolvimento** :
   bash

```
   npm start
```

   Ou:
   bash

```
   yarn start
```

1. **Escolha a plataforma para rodar o aplicativo** :

* Para Android:
  bash

  ```
  expo start --android
  ```
* Para iOS:
  bash

  ```
  expo start --ios
  ```
* Para Web:
  bash

  ```
  expo start --web
  ```

1. Abra o aplicativo Expo Go no seu dispositivo (disponível para Android ou iOS), escaneie o QR Code gerado pelo terminal e aproveite!

---

## 📦 Dependências

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

---

## 📂 Estrutura do Projeto

Abaixo está a estrutura completa do projeto, detalhando os diretórios e arquivos organizados:

<pre> ```text APPMOBILECOSREVFRONT ├── .expo ├── assets ├── node_modules ├── src │ ├── components │ │ ├── Animation.js │ │ ├── AuthForm.js │ │ ├── BottomNavigation.js │ │ ├── Carousel.js │ │ ├── Header.js │ │ ├── LogoutButton.js │ ├── configs │ │ ├── navigation.js │ ├── contexts │ │ ├── AuthContext.js │ │ ├── FontContext.js │ │ ├── ThemeContext.js │ ├── screens │ │ ├── AboutScreen.js │ │ ├── BenefitsScreen.js │ │ ├── ConfigScreen.js │ │ ├── ForgotPassword.js │ │ ├── HistoryScreen.js │ │ ├── HomeScreen.js │ │ ├── LoadingScreen.js │ │ ├── LoginScreen.js │ │ ├── ProfileScreen.js │ │ ├── QRCodeScannerScreen.js │ │ ├── RegisterScreen.js │ ├── utils │ │ ├── theme.js │ │ ├── validationSchemas.js ├── .gitignore ├── App.js ├── app.json ├── babelconfig.js ├── index.js ├── package-lock.json ├── package.json ├── README.md ``` </pre>

### 📋 Descrição Geral:

- **`.expo`**: Diretório gerado automaticamente pelo Expo contendo configurações do projeto.
- **`assets`**: Armazena imagens, fontes e outros arquivos estáticos.
- **`node_modules`**: Diretório com todas as dependências do projeto gerenciadas pelo npm ou yarn.
- **`src/components`**: Componentes reutilizáveis usados em diferentes partes do aplicativo.
- **`src/configs`**: Arquivos de configuração globais, como navegação.
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

✅ Funcionalidades Implementadas

Login e Registro de Usuário (mockado)

Escaneamento de QR Code

Sistema de pontos por interação

Visualização de histórico de atividades

Persistência de dados local com AsyncStorage

Temas e fontes customizadas via contexto

Navegação com Tabs e Stacks

Integração com câmera (Expo Camera)

Experiência UX com animações e ícones modernos

🧪 Plano de Testes (Mock)
Como não houve aprofundamento em testes automatizados durante o semestre, foi adotado um plano manual baseado em fluxo de usuário, cobrindo:

Fluxo de autenticação

Navegação entre telas

Validação de formulários

Persistência de dados com AsyncStorage

Comportamento esperado ao escanear QR Code
