import { Image, StyleSheet, Platform, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface QuickActionButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  onPress: () => void;
}

export default function HomeScreen() {
  const router = useRouter();

  const QuickActionButton = ({ icon, title, subtitle, onPress }: QuickActionButtonProps) => (
    <Animatable.View animation="fadeInUp" duration={800}>
      <TouchableOpacity
        style={styles.actionButton}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <View style={styles.actionIcon}>
          <Ionicons name={icon} size={24} color="#2196F3" />
        </View>
        <View style={styles.actionText}>
          <ThemedText type="subtitle">{title}</ThemedText>
          <ThemedText style={styles.actionSubtitle}>{subtitle}</ThemedText>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#999" />
      </TouchableOpacity>
    </Animatable.View>
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <Animatable.View animation="fadeInDown" style={styles.requestButtonContainer}>
        <TouchableOpacity 
          style={styles.requestButton}
          onPress={() => router.push('/modal/gas-request')}
        >
          <Ionicons name="flame" size={24} color="#fff" />
          <ThemedText style={styles.requestButtonText}>Request Gas</ThemedText>
        </TouchableOpacity>
      </Animatable.View>

      <ThemedView style={styles.header}>
        <ThemedText type="title">Welcome to GasByGas!</ThemedText>
        <HelloWave />
        <ThemedText style={styles.headerSubtitle}>
          Your trusted gas delivery service
        </ThemedText>
      </ThemedView>

      <Animatable.View animation="fadeInUp" delay={300}>
        <ThemedView style={styles.statsContainer}>
          <View style={styles.statItem}>
            <ThemedText type="title">24/7</ThemedText>
            <ThemedText>Service</ThemedText>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <ThemedText type="title">30m</ThemedText>
            <ThemedText>Delivery</ThemedText>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <ThemedText type="title">100%</ThemedText>
            <ThemedText>Safe</ThemedText>
          </View>
        </ThemedView>
      </Animatable.View>

      <ThemedView style={styles.actionsContainer}>
        <QuickActionButton
          icon="cart-outline"
          title="Quick Order"
          subtitle="Order gas in few taps"
          onPress={() => router.push('/modal/quick-order')}
        />
        
        <QuickActionButton
          icon="location-outline"
          title="Track Order"
          subtitle="Check delivery status"
          onPress={() => router.push('/(tabs)/orders')}
        />
        
        <QuickActionButton
          icon="pricetag-outline"
          title="Special Offers"
          subtitle="View current deals"
          onPress={() => router.push('/modal/special-offers')}
        />
      </ThemedView>

      <Animatable.View animation="fadeInUp" delay={600}>
        <ThemedView style={styles.supportCard}>
          <View style={styles.supportContent}>
            <ThemedText type="subtitle">Need Help?</ThemedText>
            <ThemedText>Our support team is available 24/7</ThemedText>
          </View>
          <TouchableOpacity
            style={styles.supportButton}
            onPress={() => router.push('/modal/support')}
          >
            <Ionicons name="headset-outline" size={24} color="#fff" />
            <ThemedText style={styles.supportButtonText}>Contact Support</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </Animatable.View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0,
    shadowRadius: 4,
    elevation: Platform.OS === 'android' ? 4 : 0,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    height: '100%',
    backgroundColor: '#ddd',
  },
  actionsContainer: {
    gap: 12,
    marginBottom: 24,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0,
    shadowRadius: 4,
    elevation: Platform.OS === 'android' ? 4 : 0,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(33, 150, 243, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  actionText: {
    flex: 1,
  },
  actionSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  supportCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0,
    shadowRadius: 4,
    elevation: Platform.OS === 'android' ? 4 : 0,
  },
  supportContent: {
    marginBottom: 16,
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 8,
    padding: 12,
    gap: 8,
  },
  supportButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
    resizeMode: 'contain',
  },
  requestButtonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  requestButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    gap: 8,
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
  requestButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
