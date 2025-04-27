import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { IconSymbol, type IconSymbolName } from "./IconSymbol";
import { ProgressBar } from './ProgressBar'; // Asumiendo que crearás un componente ProgressBar

interface ProgressCardProps {
  title: string;
  subtitle?: string;
  value: string;
  progress: number; // Valor entre 0 y 1
  chipText?: string;
  showChip?: boolean;
  iconName?: IconSymbolName; // Nombre del icono (opcional)
  color?: string; // Color del icono (opcional)
}

export function ProgressCard(
  { title, subtitle, value, progress, chipText, showChip, iconName, color }
    : ProgressCardProps
) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {iconName && <IconSymbol name={iconName} size={20} color={color || 'gray'} style={styles.icon} />}
        <View>
          <ThemedText type="subtitle" style={styles.title}>{title}</ThemedText>
          {subtitle && <ThemedText type="caption" style={styles.subtitle}>{subtitle}</ThemedText>}
        </View>
      </View>

      <View style={styles.valueContainer}>
        <ThemedText type="subtitle" style={styles.value}>{value}</ThemedText>

        {showChip && chipText && (
          <ThemedView style={styles.chip}>
            <ThemedText type="caption" style={styles.chipText}>{chipText}</ThemedText>
          </ThemedView>
        )}
      </View>

      <ProgressBar progress={progress} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8, // Espacio entre las tarjetas
    backgroundColor: 'white', // O el color de fondo temático
    width: '80%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    color: 'gray',
    fontSize: 12,
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  chip: {
    backgroundColor: '#e0f7fa', // Un color claro para el chip
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginTop: 8,
    alignSelf: 'flex-start', // Para que el chip se ajuste al contenido
  },
  chipText: {
    color: '#26a69a',
    fontSize: 12,
  },
});
