import { ScrollView, StyleSheet, ScrollViewProps } from 'react-native';

interface ThemedScrollProps extends ScrollViewProps {
  children: React.ReactNode;
}

export function ThemedScroll({
  children,
  style,
  showsVerticalScrollIndicator = false,
  ...rest
}: ThemedScrollProps) {
  return (
    <ScrollView style={[styles.scrollView, style]} showsVerticalScrollIndicator={showsVerticalScrollIndicator} {...rest}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 0,
    margin: 0,
    width: "100%",
  },
});
