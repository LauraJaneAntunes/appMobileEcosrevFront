import React, { useState } from "react";
import { Snackbar } from "react-native-paper";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "../components/Carousel";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../contexts/ThemeContext";
import { useFontSettings } from "../contexts/FontContext";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  const { fontSize } = useFontSettings();
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  // Snackbar para feedback

  const showSnackbar = () => {
    setSnackbarVisible(true);
  };

  const hideSnackbar = () => {
    setSnackbarVisible(false);
  };

  const navigateToLogin = () => {
    // Exemplo: antes de navegar, mostra o snackbar
    showSnackbar();
    setTimeout(() => {
      navigation.navigate("Login");
    }, 1500);
  };

  //Carousel de Imagens

  const carouselSlides = [
    {
      imageSrc: require("../../assets/imagem1.jpg"),
      altText: "Imagem 1",
    },
    {
      imageSrc: require("../../assets/backgroundImg.jpeg"),
      altText: "Imagem 2",
    },
    {
      imageSrc: require("../../assets/macawImg.jpeg"),
      altText: "Imagem 3",
    },
    {
      imageSrc: require("../../assets/toucanImg.jpeg"),
      altText: "Imagem 4",
    },
    {
      imageSrc: require("../../assets/beeImg.jpeg"),
      altText: "Imagem 5",
    },
    {
      imageSrc: require("../../assets/imagem3.jpg"),
      altText: "Imagem 6",
    },
  ];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle={
          theme.colors.text.inverse === "#FFFFFF"
            ? "light-content"
            : "dark-content"
        }
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel slides={carouselSlides} />

        {/* Introdução */}
        <View
          style={[
            styles.introductionContainer,
            { backgroundColor: theme.colors.surface },
          ]}
        >
          <Text
            style={[
              styles.sectionTitle,
              { color: theme.colors.primary, fontSize: fontSize.lg },
            ]}
          >
            Bem-vindo ao EcosRev
          </Text>
          <Text
            style={[
              styles.introText,
              { color: theme.colors.text.primary, fontSize: fontSize.md },
            ]}
          >
            Uma plataforma inovadora para reciclagem de resíduo eletrônico e
            troca de pontos por recompensas. Junte-se a nós e faça parte da
            mudança!
          </Text>

          {/* Botão: Começar Agora */}
          <TouchableOpacity
            style={[
              styles.ctaButton,
              { backgroundColor: theme.colors.primary },
            ]}
            onPress={navigateToLogin}
          >
            <Text
              style={[
                styles.ctaButtonText,
                { color: theme.colors.text.inverse, fontSize: fontSize.md },
              ]}
            >
              Começar Agora
            </Text>
          </TouchableOpacity>
        </View>

        {/* Serviços */}
        <View
          style={[
            styles.servicesContainer,
            { backgroundColor: theme.colors.background },
          ]}
        >
          <Text
            style={[
              styles.sectionTitle,
              { color: theme.colors.text.primary, fontSize: fontSize.lg },
            ]}
          >
            O que oferecemos
          </Text>
          <View style={styles.servicesGrid}>
            <View style={styles.serviceItem}>
              <MaterialIcons
                name="recycling"
                size={60}
                color={theme.colors.primary}
              />
              <Text
                style={[
                  styles.serviceTitle,
                  { color: theme.colors.text.primary, fontSize: fontSize.md },
                ]}
              >
                Reciclagem de Eletrônicos
              </Text>
              <Text
                style={[
                  styles.serviceText,
                  { color: theme.colors.text.secondary, fontSize: fontSize.sm },
                ]}
              >
                Recicle seus aparelhos eletrônicos de forma segura e
                responsável.
              </Text>
            </View>

            <View style={styles.serviceItem}>
              <MaterialIcons
                name="monetization-on"
                size={60}
                color={theme.colors.primary}
              />
              <Text
                style={[
                  styles.serviceTitle,
                  { color: theme.colors.text.primary, fontSize: fontSize.md },
                ]}
              >
                Acúmulo de Pontos
              </Text>
              <Text
                style={[
                  styles.serviceText,
                  { color: theme.colors.text.secondary, fontSize: fontSize.sm },
                ]}
              >
                Ganhe pontos a cada item reciclado e troque por prêmios.
              </Text>
            </View>

            <View style={styles.serviceItem}>
              <MaterialIcons
                name="card-giftcard"
                size={60}
                color={theme.colors.primary}
              />
              <Text
                style={[
                  styles.serviceTitle,
                  { color: theme.colors.text.primary, fontSize: fontSize.md },
                ]}
              >
                Recompensas Exclusivas
              </Text>
              <Text
                style={[
                  styles.serviceText,
                  { color: theme.colors.text.secondary, fontSize: fontSize.sm },
                ]}
              >
                Troque seus pontos por descontos, produtos, serviços e muito
                mais.
              </Text>
            </View>
          </View>
        </View>

        {/* Testemunhos */}
        <View
          style={[
            styles.testimonialsContainer,
            { backgroundColor: theme.colors.surface },
          ]}
        >
          <Text
            style={[
              styles.sectionTitle,
              { color: theme.colors.text.primary, fontSize: fontSize.lg },
            ]}
          >
            Depoimentos
          </Text>
          <View style={styles.testimonialsGrid}>
            <View
              style={[
                styles.testimonialItem,
                { backgroundColor: theme.colors.background },
              ]}
            >
              <Text
                style={[
                  styles.testimonialText,
                  { color: theme.colors.text.primary, fontSize: fontSize.md },
                ]}
              >
                "O EcosRev facilitou a reciclagem de eletrônicos na minha casa.
                Além de ajudar o meio ambiente, ainda ganho recompensas!"
              </Text>
              <Text
                style={[
                  styles.testimonialAuthor,
                  { color: theme.colors.text.secondary, fontSize: fontSize.sm },
                ]}
              >
                — Maria Silva
              </Text>
            </View>

            <View
              style={[
                styles.testimonialItem,
                { backgroundColor: theme.colors.background },
              ]}
            >
              <Text
                style={[
                  styles.testimonialText,
                  { color: theme.colors.text.primary, fontSize: fontSize.md },
                ]}
              >
                "Uma excelente iniciativa! Agora meus filhos entendem a
                importância de reciclar e ainda se divertem trocando pontos por
                prêmios."
              </Text>
              <Text
                style={[
                  styles.testimonialAuthor,
                  { color: theme.colors.text.secondary, fontSize: fontSize.sm },
                ]}
              >
                — Carlos Santos
              </Text>
            </View>

            <View
              style={[
                styles.testimonialItem,
                { backgroundColor: theme.colors.background },
              ]}
            >
              <Text
                style={[
                  styles.testimonialText,
                  { color: theme.colors.text.primary, fontSize: fontSize.md },
                ]}
              >
                "Simplesmente adoro! O sistema de pontos é muito gratificante e
                o suporte ao cliente é fantástico."
              </Text>
              <Text
                style={[
                  styles.testimonialAuthor,
                  { color: theme.colors.text.secondary, fontSize: fontSize.sm },
                ]}
              >
                — Ana Souza
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={hideSnackbar}
        duration={2000}
        style={{
          backgroundColor: theme.colors.surface,
          borderWidth: 1,
          borderColor: theme.colors.primary,
          borderRadius: theme.borderRadius.md,
          paddingHorizontal: theme.spacing.md,
          marginHorizontal: theme.spacing.md,
        }}
        theme={{
          colors: {
            surface: theme.colors.surface,
            onSurface: theme.colors.text.primary, // Cor do texto
            accent: theme.colors.primary, // Cor do botão (Fechar)
          },
        }}
        action={{
          label: "Fechar",
          onPress: hideSnackbar,
        }}
      >
        <Text style={{ color: theme.colors.text.primary }}>
          Redirecionando para login...
        </Text>
      </Snackbar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  introductionContainer: {
    padding: 20,
    alignItems: "center",
  },
  ctaButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    elevation: 3,
  },
  ctaButtonText: {
    fontWeight: "bold",
  },
  servicesContainer: {
    padding: 20,
    alignItems: "center",
  },
  testimonialsContainer: {
    padding: 20,
    alignItems: "center",
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  introText: {
    textAlign: "center",
    lineHeight: 24,
  },
  servicesGrid: {
    width: "100%",
  },
  serviceItem: {
    alignItems: "center",
    marginBottom: 30,
  },
  serviceTitle: {
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  serviceText: {
    textAlign: "center",
    fontSize: 14,
    paddingHorizontal: 10,
  },
  testimonialsGrid: {
    width: "100%",
  },
  testimonialItem: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  testimonialText: {
    fontStyle: "italic",
    marginBottom: 10,
    lineHeight: 22,
  },
  testimonialAuthor: {
    textAlign: "right",
    fontWeight: "bold",
  },
  footer: {
    padding: 15,
    alignItems: "center",
  },
  footerText: {
    textAlign: "center",
  },
});
