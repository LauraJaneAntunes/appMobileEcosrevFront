import React from 'react';
import { View, Text, FlatList, StyleSheet, useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from '../utils/theme.js';
import { ArrowLeft } from 'lucide-react-native' 

const transactions = [
  { id: '1', benefit: 'Ingresso para o Cinelópolis', points: -500, date: '15/01/2024', status: 'Finalizado' },
  { id: '2', benefit: 'Voucher para MC Donalds', points: -1000, date: '15/11/2024', status: 'Finalizado' },
  { id: '3', benefit: 'Ingresso Festa Junina Votorantim', points: 300, date: '22/05/2024', status: 'Finalizado' },
  { id: '4', benefit: 'Cupom de Combustível Shell', points: -800, date: '01/03/2024', status: 'Finalizado' },
  { id: '5', benefit: 'Voucher Restaurante Outback', points: -1200, date: '08/02/2025', status: 'Pendente' },
  { id: '6', benefit: 'Crédito de Pontos', points: 400, date: '28/02/2024', status: 'Finalizado' },
  { id: '7', benefit: 'Entrada Parque Aquático Termas', points: -900, date: '19/01/2024', status: 'Finalizado' },
  { id: '8', benefit: 'Desconto na Conta de Luz', points: 600, date: '01/04/2024', status: 'Finalizado' },
  { id: '9', benefit: 'Cupom de Compra na Livraria Cultura', points: -300, date: '10/03/2024', status: 'Finalizado' },
  { id: '10', benefit: 'Crédito de Pontos Promocionais', points: 500, date: '25/03/2024', status: 'Finalizado' }
];

const HistoryScreen = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  const renderItem = ({ item }) => (
    <View
      style={[styles.transactionCard, { backgroundColor: theme.colors.surface }]}
      testID={`transaction-item-${item.id}`}
    >
      <View style={styles.transactionHeader}>
        {/* Trunca texto longo para evitar estouro */}
        <Text
          style={[styles.benefitName, { color: theme.colors.textPrimary }]}
          numberOfLines={1}
          ellipsizeMode="tail"
          testID={`transaction-benefit-${item.id}`}
        >
          {item.benefit}
        </Text>
        <Text
          style={[styles.points, { color: item.points > 0 ? theme.colors.primary : theme.colors.secondary }]}
          testID={`transaction-points-${item.id}`}
        >
          {item.points > 0 ? '+' : ''}{item.points} pts
        </Text>
      </View>
      <View style={styles.transactionFooter}>
        <Text
          style={[styles.date, { color: theme.colors.textSecondary }]}
          testID={`transaction-date-${item.id}`}
        >
          {item.date}
        </Text>
        <Text
          style={[
            styles.status,
            {
              backgroundColor: item.status === 'Pendente' ? theme.colors.secondary : theme.colors.surface,
              color: theme.colors.textPrimary,
            },
          ]}
          testID={`transaction-status-${item.id}`}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        testID="transaction-list"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  transactionCard: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  benefitName: {
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
    marginRight: 8,
  },
  points: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  transactionFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
  },
  status: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default HistoryScreen;
