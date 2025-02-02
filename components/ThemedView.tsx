import { View, type ViewProps } from 'react-native';
import { useTheme } from '../app/context/ThemeContext';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const { theme } = useTheme();
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor: theme === 'light' ? backgroundColor : '#1a1a1a' }, style]} {...otherProps} />;
}
