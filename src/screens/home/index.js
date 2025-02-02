import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import OrderDetailsScreen from './OrderDetailsScreen';
import GasDetailsScreen from './GasDetailsScreen';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        headerTintColor: '#2196F3',
      }}
    >
      <HomeStack.Screen 
        name="HomeMain" 
        component={HomeScreen}
        options={{
          title: 'GasByGas',
          headerLeft: null,
        }}
      />
      <HomeStack.Screen 
        name="GasDetails" 
        component={GasDetailsScreen}
        options={{
          title: 'Gas Details',
        }}
      />
      <HomeStack.Screen 
        name="OrderDetails" 
        component={OrderDetailsScreen}
        options={{
          title: 'Order Details',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator; 