import { Stack } from 'expo-router';

export default function ModalLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        presentation: 'modal',
      }}
    >
      <Stack.Screen name="gas-request" options={{ title: 'Request Gas' }} />
      <Stack.Screen name="quick-order" options={{ title: 'Quick Order' }} />
      <Stack.Screen name="special-offers" options={{ title: 'Special Offers' }} />
      <Stack.Screen 
        name="support" 
        options={{ 
          headerShown: false,
        }} 
      />
    </Stack>
  );
} 