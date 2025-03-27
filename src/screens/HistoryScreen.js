import React from 'react';
import { View, Text, SectionList, StyleSheet, useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from '../utils/theme.js';
import { ArrowUp, ArrowDown } from 'lucide-react-native';

const transactions = [
  { id: '1', benefit: 'Ingresso para o Cinelópolis', points: -500, date: '15/01/2024' },
  { id: '2', benefit: 'Voucher para MC Donalds', points: -1000, date: '15/11/2024' },
  { id: '3', benefit: 'Ingresso Festa Junina Votorantim', points: 300, date: '22/05/2024' },
  { id: '4', benefit: 'Cupom de Combustível Shell', points: -800, date: '01/03/2024' },
  { id: '5', benefit: 'Voucher Restaurante Outback', points: -1200, date: '08/02/2025' },
  { id: '6', benefit: 'Crédito de Pontos', points: 400, date: '28/02/2024' },
  { id: '7', benefit: 'Entrada Parque Aquático Termas', points: -900, date: '19/01/2024' },
  { id: '8', benefit: 'Desconto na Conta de Luz', points: 600, date: '01/04/2024' },
  { id: '9', benefit: 'Cupom de Compra na Livraria Cultura', points: -300, date: '10/03/2024' },
  { id: '10', benefit: 'Crédito de Pontos Promocionais', points: 500, date: '25/03/2024' }
];

const groupByMonth = (data) => {
  const grouped = {};

  data.forEach((item) => {
    const [day, month, year] = item.date.split('/');
    const key = `${month}/${year}`;
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(item);
  });

  return Object.keys(grouped).map((key) => ({
    title: key,
    total: grouped[key].reduce((acc, item) => acc + item.points, 0),
    data: grouped[key],
  }));
};

const HistoryScreen = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  const sections = groupByMonth(transactions);

  const renderItem = ({ item }) => {
    const isNegative = item.points < 0;

    return (
      <View
        style={[
          styles.transactionCard,
          { backgroundColor: theme.colors.surface }
        ]}
        testID={`transaction-item-${item.id}`}
      >
        <View style={styles.transactionHeader}>
          <Text
            style={[styles.benefitName, { color: theme.colors.textPrimary }]}
            numberOfLines={1}
            ellipsizeMode="tail"
            testID={`transaction-benefit-${item.id}`}
          >
            {item.benefit}
          </Text>
          <View style={styles.pointsContainer}>
            {isNegative ? (
              <ArrowDown color="red" size={16} />
            ) : (
              <ArrowUp color="green" size={16} />
            )}
            <Text
              style={[
                styles.points,
                { color: isNegative ? 'red' : 'green' }
              ]}
              testID={`transaction-points-${item.id}`}
            >
              {item.points > 0 ? '+' : ''}{item.points} pts
            </Text>
          </View>
        </View>
        <View style={styles.transactionFooter}>
          <Text
            style={[styles.date, { color: theme.colors.textSecondary }]}
            testID={`transaction-date-${item.id}`}
          >
            {item.date}
          </Text>
        </View>
      </View>
    );
  };

  const renderSectionHeader = ({ section: { title, total } }) => {
    return (
      <View style={styles.sectionHeaderContainer}>
        <Text style={[styles.sectionHeader, { color: theme.colors.textPrimary }]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionTotal,
            { color: total < 0 ? '#E2725B' : '#808000' }
          ]}
        >
          Total: {total > 0 ? '+' : ''}{total} pts
        </Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
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
    paddingBottom: 20,
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 6,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTotal: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  transactionCard: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
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
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
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
});

export default HistoryScreen;
