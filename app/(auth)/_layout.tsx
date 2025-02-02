import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        animation: 'slide_from_bottom',
      }}
    >
      <Stack.Screen 
        name="login" 
      />
      <Stack.Screen 
        name="register" 
      />
      <Stack.Screen 
        name="forgot-password" 
        options={{ 
          headerShown: true,
          title: 'Reset Password' 
        }} 
      />
    </Stack>
  );
} 