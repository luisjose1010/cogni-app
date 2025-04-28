import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultMedium' | 'defaultSemiBold' | 'defaultBold' | 'subtitle' | 'link' | 'caption';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color, fontFamily: 'Poppins' },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultMedium' ? styles.defaultMedium : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'defaultBold' ? styles.defaultBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'caption' ? styles.caption : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultMedium: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins-Medium'
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  defaultBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins-Bold'
  },
  title: {
    fontSize: 20,
    lineHeight: 26,
    fontFamily: 'Poppins-Bold'
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold'
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  caption: {
    fontSize: 13,
    lineHeight: 16,
    color: '#6e6e6e',
  }
});
