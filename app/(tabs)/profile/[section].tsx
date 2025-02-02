import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export default function ProfileSection() {
  const { section } = useLocalSearchParams();
  
  return (
    <View>
      <ThemedText>{section}</ThemedText>
    </View>
  );
} 