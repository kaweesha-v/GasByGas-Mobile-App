import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const GasDetailsScreen = ({ route, navigation }) => {
  // In a real app, you would get this data from route.params
  const gasDetails = {
    name: 'Litro Gas',
    size: '12.5 kg',
    price: 'Rs. 2,850',
    description: 'Standard household gas cylinder with safety valve system.',
    features: [
      'High quality brass regulator',
      'Safety pressure release valve',
      'Rust-proof coating',
      'ISI certified cylinder',
    ],
    available: true,
  };

  return (
    <ScrollView style={styles.container}>
      <Animatable.View 
        animation="fadeIn" 
        duration={1000} 
        style={styles.content}
      >
        <Text style={styles.title}>{gasDetails.name}</Text>
        <Text style={styles.price}>{gasDetails.price}</Text>
        <Text style={styles.size}>{gasDetails.size}</Text>
        
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{gasDetails.description}</Text>
        
        <Text style={styles.sectionTitle}>Features</Text>
        {gasDetails.features.map((feature, index) => (
          <Animatable.View 
            key={index}
            animation="fadeInLeft"
            delay={500 + (index * 100)}
          >
            <Text style={styles.feature}>• {feature}</Text>
          </Animatable.View>
        ))}

        {gasDetails.available && (
          <Animatable.View 
            animation="fadeInUp" 
            delay={1000}
          >
            <TouchableOpacity 
              style={styles.orderButton}
              onPress={() => navigation.navigate('OrderDetails')}
            >
              <Text style={styles.orderButtonText}>Place Order</Text>
            </TouchableOpacity>
          </Animatable.View>
        )}
      </Animatable.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    color: '#2196F3',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  size: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },
  feature: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
    paddingLeft: 10,
  },
  orderButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
    shadowColor: '#2196F3',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GasDetailsScreen; 