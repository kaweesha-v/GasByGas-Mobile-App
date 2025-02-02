import { StyleSheet, ScrollView, TouchableOpacity, View, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

const GAS_OPTIONS = [
  { id: '1', name: 'Litro Gas', size: '12.5 kg', price: 'Rs. 2,850' },
  { id: '2', name: 'Laugh Gas', size: '12.5 kg', price: 'Rs. 2,750' },
  { id: '3', name: 'Shell Gas', size: '12.5 kg', price: 'Rs. 2,800' },
];

export default function QuickOrderModal() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Select Gas Type</ThemedText>
        <ThemedText style={styles.subtitle}>
          Choose your preferred gas cylinder
        </ThemedText>
      </ThemedView>

      {GAS_OPTIONS.map((option, index) => (
        <Animatable.View
          key={option.id}
          animation="fadeInUp"
          delay={index * 200}
          duration={800}
        >
          <TouchableOpacity
            style={styles.optionCard}
            onPress={() => router.push('/modal/order-details')}
          >
            <View style={styles.optionIcon}>
              <Ionicons name="flame" size={24} color="#2196F3" />
            </View>
            <View style={styles.optionContent}>
              <ThemedText type="subtitle">{option.name}</ThemedText>
              <ThemedText style={styles.optionDetails}>
                {option.size} - {option.price}
              </ThemedText>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </Animatable.View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  subtitle: {
    color: '#666',
    marginTop: 4,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
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
  optionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(33, 150, 243, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  optionContent: {
    flex: 1,
  },
  optionDetails: {
    color: '#666',
    fontSize: 14,
    marginTop: 4,
  },
}); 