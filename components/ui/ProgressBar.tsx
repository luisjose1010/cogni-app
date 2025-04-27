import React from 'react';
import { DimensionValue, StyleSheet, View } from 'react-native';

interface ProgressBarProps {
  progress: number;
  color?: string;
}

export function ProgressBar({ progress, color }: ProgressBarProps) {
  const progressBarWidth: DimensionValue = `${(progress || 0) * 100}%`;
  const progressBarColor = color ?? 'black';

  return (
    <View style={styles.container}>
      <View style={
        { ...styles.bar, width: progressBarWidth, backgroundColor: progressBarColor }
      } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    overflow: 'hidden', // Para que la barra interior no se salga del borde
    marginBottom: 8,
  },
  bar: {
    height: '100%',
    borderRadius: 4,
  },
});
