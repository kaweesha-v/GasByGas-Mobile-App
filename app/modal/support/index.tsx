import { router } from 'expo-router';

const supportButtons = [
  {
    id: 'chat',
    icon: 'chatbubble-outline',
    title: 'Live Chat',
    subtitle: 'Chat with our support team',
    action: () => router.push('/modal/support/live-chat'),
  },
  {
    id: 'faq',
    icon: 'help-circle-outline',
    title: 'FAQs',
    subtitle: 'Find quick answers',
    action: () => router.push('/modal/support/faqs'),
  },
];

export default function SupportScreen() {
  // ... existing code
} 