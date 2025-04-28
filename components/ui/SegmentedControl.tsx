import { Pressable, StyleSheet, View, ViewProps } from 'react-native';
import { ThemedText } from "../ThemedText";

interface SegmentedControlProps extends ViewProps {
  segments: string[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  style?: object;
}

export function SegmentedControl({ segments, selectedValue, style, onValueChange }: SegmentedControlProps) {
  return (
    <View style={[styles.container, style]}>
      {segments.map((segment) => (
        <Pressable
          key={segment}
          style={({ pressed }) => [
            styles.segmentButton,
            selectedValue === segment && styles.selectedSegmentButton,
            pressed && { opacity: 0.2 },
          ]}
          onPress={() => onValueChange(segment)}
        >
          <ThemedText
            style={[
              styles.segmentText,
              selectedValue === segment && styles.selectedSegmentText,
            ]}
          >
            {segment}
          </ThemedText>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 5,
  },
  segmentButton: {
    flex: 1,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  selectedSegmentButton: {
    backgroundColor: 'white',
  },
  segmentText: {
    color: '#757575',
    fontWeight: 'bold',
  },
  selectedSegmentText: {
    color: 'black',
  },
});
