import React from 'react';
import { DimensionValue, StyleSheet, View } from 'react-native';

interface ProgressBarProps {
  progress: number;
  color?: string;
}

export function ProgressBar({ progress, color }: ProgressBarProps) {
  const progressBarWidth: DimensionValue = `${(progress || 0) * 100}%`;
  const backgroundColor = color ?? '#f0f0f0';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={[styles.bar, { width: progressBarWidth }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  bar: {
    height: '100%',
    borderRadius: 4,
    backgroundColor: 'black',
  },
});
