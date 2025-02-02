import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const DUMMY_DATA = [
  {
    id: '1',
    name: 'Litro Gas',
    size: '12.5 kg',
    price: 'Rs. 2,850',
    available: true,
  },
  {
    id: '2',
    name: 'Laugh Gas',
    size: '12.5 kg',
    price: 'Rs. 2,750',
    available: true,
  },
  {
    id: '3',
    name: 'Shell Gas',
    size: '12.5 kg',
    price: 'Rs. 2,800',
    available: false,
  },
];

const HomeScreen = () => {
  const renderItem = ({ item, index }) => (
    <Animatable.View
      animation="fadeInUp"
      delay={index * 200}
      duration={1000}
    >
      <TouchableOpacity 
        style={styles.card}
        activeOpacity={0.9}
        onPress={() => {
          if (item.available) {
            // Handle order
          }
        }}
      >
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <Text style={styles.gasName}>{item.name}</Text>
            <Text
              style={[
                styles.availability,
                { color: item.available ? '#4CAF50' : '#F44336' },
              ]}
            >
              {item.available ? 'In Stock' : 'Out of Stock'}
            </Text>
          </View>
          
          <View style={styles.cardDetails}>
            <Text style={styles.gasSize}>{item.size}</Text>
            <Text style={styles.gasPrice}>{item.price}</Text>
          </View>

          {item.available && (
            <Animatable.View
              animation="pulse"
              iterationCount="infinite"
              duration={2000}
            >
              <TouchableOpacity 
                style={styles.orderButton}
                activeOpacity={0.8}
              >
                <Text style={styles.orderButtonText}>Order Now</Text>
              </TouchableOpacity>
            </Animatable.View>
          )}
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );

  return (
    <View style={styles.container}>
      <Animatable.Text 
        animation="fadeInDown"
        duration={1000}
        style={styles.header}
      >
        Available Gas Cylinders
      </Animatable.Text>
      <FlatList
        data={DUMMY_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: '#fff',
  },
  list: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    transform: [{ scale: 1 }],
  },
  cardContent: {
    padding: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  gasName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  gasSize: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  gasPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
    marginTop: 5,
  },
  availability: {
    fontSize: 16,
    marginTop: 5,
  },
  orderButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
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
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen; 