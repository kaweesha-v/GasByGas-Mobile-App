import { StyleSheet, ScrollView, TouchableOpacity, View, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
}

const DUMMY_OFFERS: Offer[] = [
  {
    id: '1',
    title: 'First Order Discount',
    description: 'Get 10% off on your first gas cylinder order',
    discount: '10% OFF',
    validUntil: '2024-04-30',
  },
  {
    id: '2',
    title: 'Bulk Purchase Offer',
    description: 'Order 3 or more cylinders and get 15% discount',
    discount: '15% OFF',
    validUntil: '2024-04-15',
  },
  {
    id: '3',
    title: 'Weekend Special',
    description: 'Free delivery on weekend orders',
    discount: 'FREE DELIVERY',
    validUntil: '2024-04-20',
  },
];

export default function OffersModal() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Special Offers</ThemedText>
        <ThemedText style={styles.subtitle}>
          Exclusive deals just for you
        </ThemedText>
      </ThemedView>

      {DUMMY_OFFERS.map((offer, index) => (
        <Animatable.View
          key={offer.id}
          animation="fadeInUp"
          delay={index * 200}
          duration={800}
        >
          <ThemedView style={styles.offerCard}>
            <View style={styles.offerHeader}>
              <ThemedText type="subtitle">{offer.title}</ThemedText>
              <View style={styles.discountBadge}>
                <ThemedText style={styles.discountText}>
                  {offer.discount}
                </ThemedText>
              </View>
            </View>
            <ThemedText style={styles.description}>
              {offer.description}
            </ThemedText>
            <View style={styles.offerFooter}>
              <ThemedText style={styles.validUntil}>
                Valid until: {offer.validUntil}
              </ThemedText>
              <TouchableOpacity
                style={styles.claimButton}
                onPress={() => router.push('/modal/new-order')}
              >
                <ThemedText style={styles.claimButtonText}>
                  Claim Now
                </ThemedText>
              </TouchableOpacity>
            </View>
          </ThemedView>
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
  offerCard: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
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
  offerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  discountBadge: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  discountText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  description: {
    color: '#666',
    marginBottom: 16,
  },
  offerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
  validUntil: {
    color: '#666',
    fontSize: 12,
  },
  claimButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  claimButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
}); 