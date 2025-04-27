import { ThemedView, type ThemedViewProps } from '@/components/ThemedView';
import { StyleSheet} from 'react-native';

interface ScreenProps extends ThemedViewProps {
  children: React.ReactNode;
}

export function Screen({ children, style, ...props }: ScreenProps) {
  return (
    <ThemedView style={[styles.container, style]} {...props}>
      {children}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
