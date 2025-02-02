import { StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

interface MenuItem {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
}

export default function ProfileScreen() {
  const router = useRouter();
  const menuItems: MenuItem[] = [
    { icon: 'person-outline' as const, title: 'Personal Information' },
    { icon: 'location-outline' as const, title: 'Delivery Addresses' },
    { icon: 'card-outline' as const, title: 'Payment Methods' },
    { icon: 'notifications-outline' as const, title: 'Notifications' },
    { icon: 'settings-outline' as const, title: 'Settings' },
    { icon: 'help-circle-outline' as const, title: 'Help & Support' },
  ];

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">John Doe</ThemedText>
        <ThemedText>john.doe@example.com</ThemedText>
      </ThemedView>

      <ThemedView style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => router.push({ pathname: "/(tabs)/profile/[section]", params: { section: item.title.toLowerCase().replace(/\s+/g, '-') }})}
          >
            <ThemedView style={styles.menuItemContent}>
              <ThemedView style={styles.menuItemLeft}>
                <Ionicons name={item.icon} size={24} color="#2196F3" />
                <ThemedText style={styles.menuItemTitle}>{item.title}</ThemedText>
              </ThemedView>
              <Ionicons name="chevron-forward" size={24} color="#999" />
            </ThemedView>
          </TouchableOpacity>
        ))}
      </ThemedView>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => router.replace({ pathname: '/login' })}
      >
        <ThemedText style={styles.logoutText}>Logout</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuContainer: {
    padding: 16,
  },
  menuItem: {
    marginBottom: 16,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemTitle: {
    marginLeft: 12,
    fontSize: 16,
  },
  logoutButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#F44336',
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 