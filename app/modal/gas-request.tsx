import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function GasRequestModal() {
  const [formData, setFormData] = useState({
    customerId: '',
    location: '',
    seller: '',
    quantity: '1',
  });

  const handleSubmit = () => {
    // Handle form submission
    router.back();
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Gas Request</ThemedText>
        <ThemedText style={styles.subtitle}>Fill in your request details</ThemedText>
      </ThemedView>

      <Animatable.View animation="fadeInUp" style={styles.form}>
        <View style={styles.inputGroup}>
          <ThemedText style={styles.label}>Customer ID</ThemedText>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#666" />
            <TextInput
              style={styles.input}
              value={formData.customerId}
              onChangeText={(text) => setFormData({ ...formData, customerId: text })}
              placeholder="Enter your customer ID"
              placeholderTextColor="#666"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <ThemedText style={styles.label}>Delivery Location</ThemedText>
          <View style={styles.inputContainer}>
            <Ionicons name="location-outline" size={20} color="#666" />
            <TextInput
              style={styles.input}
              value={formData.location}
              onChangeText={(text) => setFormData({ ...formData, location: text })}
              placeholder="Enter delivery address"
              placeholderTextColor="#666"
              multiline
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <ThemedText style={styles.label}>Select Seller</ThemedText>
          <View style={styles.inputContainer}>
            <Ionicons name="business-outline" size={20} color="#666" />
            <TextInput
              style={styles.input}
              value={formData.seller}
              onChangeText={(text) => setFormData({ ...formData, seller: text })}
              placeholder="Choose gas seller"
              placeholderTextColor="#666"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <ThemedText style={styles.label}>Quantity</ThemedText>
          <View style={styles.inputContainer}>
            <Ionicons name="cube-outline" size={20} color="#666" />
            <TextInput
              style={styles.input}
              value={formData.quantity}
              onChangeText={(text) => setFormData({ ...formData, quantity: text })}
              placeholder="Enter quantity"
              keyboardType="numeric"
              placeholderTextColor="#666"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <ThemedText style={styles.submitButtonText}>Submit Request</ThemedText>
        </TouchableOpacity>
      </Animatable.View>
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
  },
  subtitle: {
    color: '#666',
    marginTop: 8,
  },
  form: {
    padding: 16,
    gap: 20,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 