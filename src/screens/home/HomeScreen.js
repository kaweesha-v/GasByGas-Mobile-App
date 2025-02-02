import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

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

const HomeScreen = ({ navigation }) => {
  const renderGasCard = (item, index) => (
    <Animatable.View
      animation="fadeInUp"
      delay={index * 200}
      duration={1000}
      key={item.id}
    >
      <TouchableOpacity 
        style={styles.card}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('GasDetails', { gasDetails: item })}
      >
        <ThemedView style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <ThemedText type="subtitle">{item.name}</ThemedText>
            <ThemedText
              style={[
                styles.availability,
                { color: item.available ? '#4CAF50' : '#F44336' },
              ]}
            >
              {item.available ? 'In Stock' : 'Out of Stock'}
            </ThemedText>
          </View>
          
          <View style={styles.cardDetails}>
            <ThemedText>{item.size}</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.price}>
              {item.price}
            </ThemedText>
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
                onPress={() => navigation.navigate('OrderDetails', { gasDetails: item })}
              >
                <ThemedText style={styles.orderButtonText}>Order Now</ThemedText>
              </TouchableOpacity>
            </Animatable.View>
          )}
        </ThemedView>
      </TouchableOpacity>
    </Animatable.View>
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/gas-logo.png')} // You'll need to add this image
          style={styles.headerLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to GasByGas!</ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Available Cylinders</ThemedText>
        <ThemedText>Select your preferred gas cylinder type and size.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.cardsContainer}>
        {DUMMY_DATA.map((item, index) => renderGasCard(item, index))}
      </ThemedView>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  headerLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
    resizeMode: 'contain',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  sectionContainer: {
    gap: 8,
    marginBottom: 16,
  },
  cardsContainer: {
    gap: 16,
  },
  card: {
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  cardContent: {
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  price: {
    color: '#2196F3',
  },
  availability: {
    fontSize: 14,
  },
  orderButton: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#2196F3',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen; 