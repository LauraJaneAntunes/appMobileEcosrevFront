import React from "react";
import { StyleSheet, Text, View, ScrollView, Linking } from "react-native";

const AboutScreen = () => {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.sectionContainer} testID="mission-section">
          <Text style={styles.sectionTitle} testID="mission-title">Nossa Missão</Text>
          <Text style={styles.sectionText} testID="mission-text">
            O EcoSrev é uma plataforma inovadora dedicada à reciclagem responsável 
            de resíduos eletrônicos, transformando consciência ambiental em ação 
            concreta e recompensas tangíveis.
          </Text>
        </View>

        <View style={styles.sectionContainer} testID="origin-section">
          <Text style={styles.sectionTitle} testID="origin-title">Origem do Projeto</Text>
          <Text style={styles.sectionText} testID="origin-text">
            Desenvolvido como projeto integrador pelos estudantes da{' '}
            <Text 
              style={{ fontWeight: 'bold' }} 
              onPress={() => Linking.openURL('https://fatecvotorantim.cps.sp.gov.br/')}
              testID="fatec-link"
            >
              Fatec Votorantim
            </Text>
            , o EcoSrev nasceu do desejo de criar uma solução tecnológica para os 
            desafios ambientais relacionados ao descarte de eletrônicos.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20, 
    paddingBottom: 40,
  },
  sectionContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2ecc71",
    marginBottom: 10,
  },
  sectionText: {
    color: "#7f8c8d",
    lineHeight: 22,
  }
});

export default AboutScreen;