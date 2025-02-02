import { StyleSheet, View, TouchableOpacity, Image, Platform } from 'react-native';
import { useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

interface PaymentMethod {
  id: string;
  type: 'card' | 'mobile';
  name: string;
  details: string;
  icon: string;
}

export default function PaymentMethods() {
  const [paymentMethods] = useState<PaymentMethod[]>([
    {
      id: '1',
      type: 'card',
      name: 'Visa Card',
      details: '**** **** **** 4242',
      icon: 'card',
    },
    {
      id: '2',
      type: 'mobile',
      name: 'Mobile Money',
      details: '+94 71 234 5678',
      icon: 'phone-portrait',
    },
  ]);

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="title">Payment Methods</ThemedText>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-circle" size={24} color="#2196F3" />
          <ThemedText style={styles.addButtonText}>Add New</ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.methodsContainer}>
        {paymentMethods.map((method, index) => (
          <Animatable.View
            key={method.id}
            animation="fadeInUp"
            delay={index * 200}
          >
            <TouchableOpacity style={styles.methodCard}>
              <View style={styles.methodIcon}>
                <Ionicons name={method.icon as any} size={24} color="#2196F3" />
              </View>
              <View style={styles.methodInfo}>
                <ThemedText type="subtitle">{method.name}</ThemedText>
                <ThemedText style={styles.methodDetails}>
                  {method.details}
                </ThemedText>
              </View>
              <TouchableOpacity style={styles.deleteButton}>
                <Ionicons name="trash-outline" size={20} color="#F44336" />
              </TouchableOpacity>
            </TouchableOpacity>
          </Animatable.View>
        ))}
      </View>

      <View style={styles.secureInfo}>
        <Ionicons name="shield-checkmark" size={24} color="#4CAF50" />
        <ThemedText style={styles.secureText}>
          Your payment information is securely stored
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  addButtonText: {
    color: '#2196F3',
    fontWeight: '600',
  },
  methodsContainer: {
    gap: 16,
  },
  methodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
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
  methodIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(33, 150, 243, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  methodInfo: {
    flex: 1,
    marginLeft: 12,
  },
  methodDetails: {
    color: '#666',
    fontSize: 14,
  },
  deleteButton: {
    padding: 8,
  },
  secureInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 32,
    padding: 16,
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    borderRadius: 8,
  },
  secureText: {
    color: '#4CAF50',
    fontSize: 14,
  },
}); 