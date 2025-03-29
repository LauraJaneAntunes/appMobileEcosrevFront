//src\screens\HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from '../components/Carousel';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../contexts/ThemeContext';
const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  
  const carouselSlides = [
    {
      imageSrc: require('../../assets/imagem1.jpg'),
      altText: "Imagem 1",
      caption: "Descubra como reciclar eletrônicos de forma sustentável!",
    },
    {
      imageSrc: require('../../assets/backgroundImg.jpeg'),
      altText: "Imagem 2",
      caption: "Transforme resíduos em pontos e conquiste prêmios!",
    },
    {
      imageSrc: require('../../assets/macawImg.jpeg'),
      altText: "Imagem 3",
      caption: "Junte-se à mudança por um planeta mais limpo.",
    },
    {
      imageSrc: require('../../assets/toucanImg.jpeg'),
      altText: "Imagem 4",
      caption: "Converta resíduos em oportunidades e ajude a preservar o meio ambiente.",
    },
    {
      imageSrc: require('../../assets/beeImg.jpeg'),
      altText: "Imagem 5",
      caption: "Dê o primeiro passo para um futuro mais sustentável com a reciclagem responsável.",
    },
    {
      imageSrc: require('../../assets/imagem3.jpg'),
      altText: "Imagem 6",
      caption: "Recicle hoje para transformar o amanhã em um lugar melhor para todos.",
    },
  ];

  const navigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar backgroundColor={theme.colors.primary} barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel slides={carouselSlides} />

        {/* Introduction Section */}
        <View style={[styles.introductionContainer, { backgroundColor: theme.colors.surface }]}>
          <Text style={styles.sectionTitle}>Bem-vindo ao EcosRev</Text>
          <Text style={styles.introText}>
            Uma plataforma inovadora para reciclagem de resíduo eletrônico e troca de pontos por recompensas. Junte-se a
            nós e faça parte da mudança!
          </Text>

          {/* Call to Action Button */}
          <TouchableOpacity
            style={[styles.ctaButton, { backgroundColor: theme.colors.primary }]}
            onPress={navigateToLogin}
          >
            <Text style={[styles.ctaButtonText, { color: theme.colors.text.inverse }]}>Começar Agora</Text>
          </TouchableOpacity>
        </View>

        {/* Services Section */}
        <View style={[styles.servicesContainer, { backgroundColor: theme.colors.background }]}>
          <Text style={styles.sectionTitle}>O que oferecemos</Text>
          <View style={styles.servicesGrid}>
            <View style={styles.serviceItem}>
              <MaterialIcons name="recycling" size={60} color={theme.colors.primary} />
              <Text style={styles.serviceTitle}>Reciclagem de Eletrônicos</Text>
              <Text style={styles.serviceText}>Recicle seus aparelhos eletrônicos de forma segura e responsável.</Text>
            </View>

            {/* ... outros itens de serviço ... */}
          </View>
        </View>

        {/* Testimonials Section */}
        <View style={[styles.testimonialsContainer, { backgroundColor: theme.colors.surface }]}>
          <Text style={styles.sectionTitle}>Depoimentos</Text>
          <View style={styles.testimonialsGrid}>
            <View style={[styles.testimonialItem, { backgroundColor: theme.colors.background }]}>
              <Text style={styles.testimonialText}>
                "O EcosRev facilitou a reciclagem de eletrônicos na minha casa. Além de ajudar o meio ambiente,
                ainda ganho recompensas!"
              </Text>
              <Text style={styles.testimonialAuthor}>— Maria Silva</Text>
            </View>

            {/* ... outros depoimentos ... */}
          </View>
        </View>

        {/* Footer */}
        <View style={[styles.footer, { backgroundColor: theme.colors.primary }]}>
          <Text style={[styles.footerText, { color: theme.colors.text.inverse }]}>© 2025 EcosRev. Todos os direitos reservados.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff', // Remova a cor hardcoded
  },
  header: {
    padding: 15,
    alignItems: 'center',
    // backgroundColor: '#4CAF50', // Remova a cor hardcoded
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    // color: 'white', // Remova a cor hardcoded
  },
  introductionContainer: {
    padding: 20,
    alignItems: 'center',
    // backgroundColor: '#f9f9f9', // Remova a cor hardcoded
  },
  ctaButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    elevation: 3,
    // backgroundColor: '#4CAF50', // Remova a cor hardcoded
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    // color: 'white', // Remova a cor hardcoded
  },
  servicesContainer: {
    padding: 20,
    alignItems: 'center',
    // backgroundColor: '#e9ecef', // Remova a cor hardcoded
  },
  testimonialsContainer: {
    padding: 20,
    alignItems: 'center',
    // backgroundColor: '#f9f9f9', // Remova a cor hardcoded
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  introText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  servicesGrid: {
    width: '100%',
  },
  serviceItem: {
    alignItems: 'center',
    marginBottom: 30,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  serviceText: {
    textAlign: 'center',
    fontSize: 14,
    paddingHorizontal: 10,
  },
  testimonialsGrid: {
    width: '100%',
  },
  testimonialItem: {
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    // backgroundColor: '#ffffff', // Remova a cor hardcoded
  },
  testimonialText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
    lineHeight: 22,
  },
  testimonialAuthor: {
    textAlign: 'right',
    fontWeight: 'bold',
  },
  footer: {
    padding: 15,
    alignItems: 'center',
    // backgroundColor: '#4CAF50', // Remova a cor hardcoded
  },
  footerText: {
    fontSize: 14,
    // color: 'white', // Remova a cor hardcoded
  },
});