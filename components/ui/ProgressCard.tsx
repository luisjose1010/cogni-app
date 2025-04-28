import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { IconSymbol, type IconSymbolName } from "./IconSymbol";
import { ProgressBar } from './ProgressBar';
import { Card } from "./Card";

interface ProgressCardProps {
  title: string;
  subtitle?: string;
  value: number;
  change?: number;
  Icon?: any;
  iconName?: IconSymbolName;
  color?: string;
  suffix?: string;
}

export function ProgressCard(
  { title, subtitle, value, change, iconName, color, suffix, Icon }
    : ProgressCardProps
) {
  const progress = value / 100;

  return (
    <Card>
      <View style={styles.header}>
        {Icon && <Icon width={24} height={24} style={styles.icon} />}
        {iconName && <IconSymbol name={iconName} size={20} color={color ?? 'gray'} style={styles.icon} />}
        <View>
          <ThemedText type="defaultSemiBold">{title}</ThemedText>
          {subtitle && <ThemedText type="caption" style={styles.subtitle}>{subtitle}</ThemedText>}
        </View>
      </View>

      <View style={styles.valueContainer}>
        <View style={styles.valueContainer}>
          <ThemedText type="subtitle" style={styles.value}>{value}{!suffix && "%"}</ThemedText>
          {suffix && <ThemedText type="caption" style={styles.subtitle}>{suffix}</ThemedText>}
        </View>

        {
          change && (
            <ThemedView style={styles.chip}>
              <ThemedText type="caption" style={styles.chipText}>
                {change < 0 || '+'}{change}% esta semana
              </ThemedText>
            </ThemedView>
          )
        }
      </View>

      <ProgressBar progress={progress} color={color} />
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  subtitle: {
    fontSize: 12,
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  value: {
    fontSize: 24,
  },
  chip: {
    backgroundColor: '#DCFCE7',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  chipText: {
    color: '#166534',
    fontSize: 12,
  },
});
