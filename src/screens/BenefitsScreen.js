import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Gift, Ticket } from "lucide-react-native";
import { useTheme } from "../contexts/ThemeContext";
import { useFontSettings } from "../contexts/FontContext";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAlert from "../components/CustomAlert";

const benefitsData = [
  { id: 1, title: "Cupom Desconto Magalu", points: 500, description: "Cupom de R$ 50 para compras na Magalu" },
  { id: 2, title: "Créditos Uber", points: 750, description: "Créditos de R$ 75 para corridas Uber" },
  { id: 3, title: "Voucher Netflix", points: 1000, description: "Voucher de 3 meses de Netflix" },
  { id: 4, title: "Créditos iFood", points: 600, description: "Créditos de R$ 60 para pedidos no iFood" },
];

const BenefitsScreen = () => {
  const [userPoints, setUserPoints] = useState(2500);
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState(null);
  const [isError, setIsError] = useState(false);
  const theme = useTheme();
  const { fontSize } = useFontSettings();

  const handleRedeemBenefit = (benefit) => {
    if (userPoints >= benefit.points) {
      setSelectedBenefit(benefit);
      setIsError(false);
      setAlertVisible(true);
    } else {
      setSelectedBenefit({ title: "Pontos Insuficientes", description: "Você não tem pontos suficientes para este benefício." });
      setIsError(true);
      setAlertVisible(true);
    }
  };

  const confirmRedeem = () => {
    if (selectedBenefit && userPoints >= selectedBenefit.points) {
      setUserPoints(userPoints - selectedBenefit.points);
    }
    setAlertVisible(false);
  };

  // Texto personalizado para o alerta
  const getAlertMessage = () => {
    if (isError) {
      return selectedBenefit?.description;
    }
    return `Deseja resgatar:  ${selectedBenefit?.title}? Serão utilizados ${selectedBenefit?.points} pontos.`;
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>      
      <View style={[styles.headerContainer, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.pointsHeader}>
          <Gift color={theme.colors.primary} size={24} />
          <Text style={[styles.pointsText, { color: theme.colors.text.primary, fontSize: fontSize.lg }]}>Seus Pontos: </Text>
          <Text style={[styles.pointsText, { color: theme.colors.info, fontSize: fontSize.lg }]}>{userPoints}</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={[styles.scrollViewContent, { marginTop: 10 }]} showsVerticalScrollIndicator={false}>
        {benefitsData.map((benefit) => (
          <TouchableOpacity
            key={benefit.id}
            style={[styles.benefitCard, { backgroundColor: theme.colors.surface }]}
            onPress={() => handleRedeemBenefit(benefit)}
          >
            <View style={styles.benefitDetails}>
              <Text style={[styles.benefitTitle, { color: theme.colors.text.primary, fontSize: fontSize.md }]}>{benefit.title}</Text>
              <Text style={[styles.benefitDescription, { color: theme.colors.text.secondary, fontSize: fontSize.sm }]}>{benefit.description}</Text>
              <View style={styles.pointsContainer}>
                <Ticket color={theme.colors.info} size={20} />
                <Text style={[styles.benefitPoints, { color: theme.colors.info, fontWeight: "bold", fontSize: fontSize.sm }]}>{benefit.points} pontos</Text>
              </View>
            </View>
            <TouchableOpacity
              style={[styles.redeemButton, { backgroundColor: theme.colors.primary }]}
              onPress={() => handleRedeemBenefit(benefit)}
            >
              <Text style={[styles.redeemButtonText, { color: theme.colors.text.inverse, fontWeight: "bold", fontSize: fontSize.sm }]}>Resgatar</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <CustomAlert
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
        onConfirm={confirmRedeem}
        title={isError ? selectedBenefit?.title : "Confirmar Resgate"}
        message={getAlertMessage()}
        confirmText={isError ? "Ok" : "Resgatar"}
        cancelText={isError ? "" : "Cancelar"}
        confirmColor={isError ? theme.colors.info : theme.colors.primary}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerContainer: { paddingVertical: 15, paddingHorizontal: 20 },
  pointsHeader: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
  pointsText: { marginLeft: 10, fontWeight: "bold" },
  scrollViewContent: { paddingVertical: 20, paddingHorizontal: 15 },
  benefitCard: { borderRadius: 10, marginBottom: 15, flexDirection: "row", alignItems: "center", padding: 15 },
  benefitDetails: { flex: 1 },
  benefitTitle: { fontWeight: "bold" },
  benefitDescription: { marginTop: 5 },
  pointsContainer: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  benefitPoints: { marginLeft: 5, fontWeight: "bold" },
  redeemButton: { paddingVertical: 8, paddingHorizontal: 15, borderRadius: 5 },
  redeemButtonText: { fontWeight: "bold" },
});

export default BenefitsScreen;