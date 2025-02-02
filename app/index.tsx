import { Redirect } from 'expo-router';

export default function Index() {
  // You can add auth state check here
  const isAuthenticated = false;
  
  if (!isAuthenticated) {
    return <Redirect href="/(auth)/login" />;
  }
  
  return <Redirect href="/(tabs)" />;
} 