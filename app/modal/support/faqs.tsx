import { StyleSheet, ScrollView, TouchableOpacity, View, Platform } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    id: '1',
    question: 'How do I place an order?',
    answer: 'You can place an order through our app by selecting "Quick Order" from the home screen, choosing your preferred gas type, and following the checkout process.',
  },
  {
    id: '2',
    question: 'What are your delivery hours?',
    answer: 'We offer 24/7 delivery service. Standard delivery takes 30 minutes to 1 hour, depending on your location.',
  },
  {
    id: '3',
    question: 'How can I track my order?',
    answer: 'Once your order is confirmed, you can track it in real-time through the "Orders" tab in the app.',
  },
  {
    id: '4',
    question: 'What payment methods do you accept?',
    answer: 'We accept cash on delivery, credit/debit cards, and mobile payment methods.',
  },
];

export default function FAQsModal() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Frequently Asked Questions</ThemedText>
        <ThemedText style={styles.subtitle}>
          Find answers to common questions
        </ThemedText>
      </ThemedView>

      {FAQS.map((faq, index) => (
        <Animatable.View
          key={faq.id}
          animation="fadeInUp"
          delay={index * 200}
          duration={800}
        >
          <TouchableOpacity
            style={styles.faqCard}
            onPress={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
          >
            <View style={styles.questionContainer}>
              <ThemedText type="subtitle" style={styles.question}>
                {faq.question}
              </ThemedText>
              <Ionicons
                name={expandedId === faq.id ? 'chevron-up' : 'chevron-down'}
                size={24}
                color="#2196F3"
              />
            </View>
            {expandedId === faq.id && (
              <Animatable.View animation="fadeIn" duration={500}>
                <ThemedText style={styles.answer}>{faq.answer}</ThemedText>
              </Animatable.View>
            )}
          </TouchableOpacity>
        </Animatable.View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  subtitle: {
    color: '#666',
    marginTop: 8,
  },
  faqCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    flex: 1,
    marginRight: 16,
  },
  answer: {
    marginTop: 12,
    color: '#666',
    lineHeight: 22,
  },
}); 