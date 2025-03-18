import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Gift, Ticket } from "lucide-react-native";

const benefitsData = [
  {
    id: 1,
    title: "Cupom Desconto Magalu",
    points: 500,
    description: "Cupom de R$ 50 para compras na Magalu",
  },
  {
    id: 2,
    title: "Créditos Uber",
    points: 750,
    description: "Créditos de R$ 75 para corridas Uber",
  },
  {
    id: 3,
    title: "Voucher Netflix",
    points: 1000,
    description: "Voucher de 3 meses de Netflix",
  },
  {
    id: 4,
    title: "Créditos iFood",
    points: 600,
    description: "Créditos de R$ 60 para pedidos no iFood",
  },
];

const BenefitsScreen = () => {
  const [userPoints, setUserPoints] = useState(2500);

  const handleRedeemBenefit = (benefit) => {
    if (userPoints >= benefit.points) {
      Alert.alert(
        "Confirmação",
        `Deseja trocar ${benefit.points} pontos por ${benefit.title}?`,
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Confirmar",
            onPress: () => {
              setUserPoints(userPoints - benefit.points);
              Alert.alert("Sucesso", "Benefício resgatado com sucesso!");
            },
          },
        ]
      );
    } else {
      Alert.alert("Pontos Insuficientes", "Você não tem pontos suficientes para este benefício.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.pointsHeader}>
          <Gift color="#4CAF50" size={24} />
          <Text style={styles.pointsText}>Seus Pontos: {userPoints}</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        {benefitsData.map((benefit) => (
          <TouchableOpacity key={benefit.id} style={styles.benefitCard} onPress={() => handleRedeemBenefit(benefit)}>
            <View style={styles.benefitDetails}>
              <Text style={styles.benefitTitle}>{benefit.title}</Text>
              <Text style={styles.benefitDescription}>{benefit.description}</Text>
              <View style={styles.pointsContainer}>
                <Ticket color="#2196F3" size={20} />
                <Text style={styles.benefitPoints}>{benefit.points} pontos</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.redeemButton} onPress={() => handleRedeemBenefit(benefit)}>
              <Text style={styles.redeemButtonText}>Resgatar</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  headerContainer: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  pointsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pointsText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  scrollViewContent: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  benefitCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  benefitDetails: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  benefitDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  benefitPoints: {
    marginLeft: 5,
    fontSize: 14,
    color: "#2196F3",
    fontWeight: "bold",
  },
  redeemButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  redeemButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default BenefitsScreen;