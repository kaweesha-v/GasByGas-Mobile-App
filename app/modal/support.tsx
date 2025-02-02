import { StyleSheet, ScrollView, TouchableOpacity, View, Linking, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

interface SupportOption {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  action: () => void;
}

export default function SupportModal() {
  const router = useRouter();

  const supportOptions: SupportOption[] = [
    {
      id: 'emergency',
      icon: 'warning',
      title: 'Emergency Support',
      subtitle: 'For urgent gas-related issues',
      action: () => Linking.openURL('tel:+94112345678'),
    },
    {
      id: 'chat',
      icon: 'chatbubble-outline',
      title: 'Live Chat',
      subtitle: 'Chat with our support team',
      action: () => router.push('/modal/support/live-chat'),
    },
    {
      id: 'email',
      icon: 'mail-outline',
      title: 'Email Support',
      subtitle: 'Get help via email',
      action: () => Linking.openURL('mailto:support@gasbygas.com'),
    },
    {
      id: 'faq',
      icon: 'help-circle-outline',
      title: 'FAQs',
      subtitle: 'Find quick answers',
      action: () => router.push('/modal/support/faqs'),
    },
  ];

  const SupportCard = ({ option }: { option: SupportOption }) => (
    <Animatable.View animation="fadeInUp" duration={800}>
      <TouchableOpacity
        style={[
          styles.supportCard,
          option.id === 'emergency' && styles.emergencyCard,
        ]}
        onPress={option.action}
      >
        <View style={styles.cardHeader}>
          <View style={styles.iconContainer}>
            <Ionicons
              name={option.icon}
              size={24}
              color={option.id === 'emergency' ? '#F44336' : '#2196F3'}
            />
          </View>
          <View style={styles.textContainer}>
            <ThemedText type="subtitle">{option.title}</ThemedText>
            <ThemedText style={styles.subtitle}>{option.subtitle}</ThemedText>
          </View>
          <Ionicons
            name="chevron-forward"
            size={24}
            color={option.id === 'emergency' ? '#F44336' : '#999'}
          />
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Customer Support</ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          How can we help you today?
        </ThemedText>
      </ThemedView>

      <View style={styles.cardsContainer}>
        {supportOptions.map((option, index) => (
          <Animatable.View
            key={option.id}
            animation="fadeInUp"
            delay={index * 200}
          >
            <SupportCard option={option} />
          </Animatable.View>
        ))}
      </View>

      <ThemedView style={styles.contactInfo}>
        <ThemedText type="subtitle">Contact Information</ThemedText>
        <View style={styles.contactItem}>
          <Ionicons name="call-outline" size={20} color="#666" />
          <ThemedText style={styles.contactText}>+94 11 234 5678</ThemedText>
        </View>
        <View style={styles.contactItem}>
          <Ionicons name="mail-outline" size={20} color="#666" />
          <ThemedText style={styles.contactText}>support@gasbygas.com</ThemedText>
        </View>
        <View style={styles.contactItem}>
          <Ionicons name="time-outline" size={20} color="#666" />
          <ThemedText style={styles.contactText}>24/7 Support Available</ThemedText>
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerSubtitle: {
    color: '#666',
    marginTop: 8,
  },
  cardsContainer: {
    padding: 16,
    gap: 16,
  },
  supportCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
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
  emergencyCard: {
    backgroundColor: '#FFF3F3',
    borderWidth: 1,
    borderColor: '#FFE0E0',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(33, 150, 243, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  subtitle: {
    color: '#666',
    fontSize: 14,
    marginTop: 4,
  },
  contactInfo: {
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
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    gap: 8,
  },
  contactText: {
    color: '#666',
  },
}); 