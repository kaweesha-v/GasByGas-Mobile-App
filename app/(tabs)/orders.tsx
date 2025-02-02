import { StyleSheet, FlatList, Platform } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

interface Order {
  id: string;
  gasName: string;
  quantity: number;
  price: string;
  status: 'pending' | 'processing' | 'delivered';
  date: string;
}

const DUMMY_ORDERS: Order[] = [
  {
    id: '1',
    gasName: 'Litro Gas',
    quantity: 1,
    price: 'Rs. 2,850',
    status: 'pending',
    date: '2024-03-10',
  },
  {
    id: '2',
    gasName: 'Laugh Gas',
    quantity: 2,
    price: 'Rs. 5,500',
    status: 'processing',
    date: '2024-03-09',
  },
  {
    id: '3',
    gasName: 'Shell Gas',
    quantity: 1,
    price: 'Rs. 2,800',
    status: 'delivered',
    date: '2024-03-08',
  },
];

export default function OrdersScreen() {
  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return '#FFA000';
      case 'processing': return '#2196F3';
      case 'delivered': return '#4CAF50';
    }
  };

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={DUMMY_ORDERS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ThemedView style={styles.orderCard}>
            <ThemedText type="subtitle">{item.gasName}</ThemedText>
            <ThemedView style={styles.orderDetails}>
              <ThemedText>Quantity: {item.quantity}</ThemedText>
              <ThemedText type="defaultSemiBold">{item.price}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.orderFooter}>
              <ThemedText style={{ color: getStatusColor(item.status) }}>
                {item.status.toUpperCase()}
              </ThemedText>
              <ThemedText style={styles.date}>{item.date}</ThemedText>
            </ThemedView>
          </ThemedView>
        )}
        contentContainerStyle={styles.list}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
  },
  orderCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  date: {
    color: '#666',
  },
}); 