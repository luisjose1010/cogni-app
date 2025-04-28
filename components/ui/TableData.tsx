import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemedScroll } from "../ThemedScroll";

interface TableDataProps {
  data: {
    attention: {
      total: number;
      change: number;
    };
    flexibility: {
      total: number;
      change: number;
    };
    memory: {
      total: number;
      change: number;
    };
    speed: {
      total: number;
      change: number;
    };
  };
}

export function TableData({ data }: TableDataProps) {
  return (
    <View style={styles.container}>
      {/* Encabezado de la tabla */}
      <View style={styles.headerRow}>
        <Text style={[styles.headerCell, { flex: 2 }]}>Actividad</Text>
        <Text style={[styles.headerCell, { flex: 1, textAlign: 'right' }]}>Tiempo (min)</Text>
        <Text style={[styles.headerCell, { flex: 1, textAlign: 'right' }]}>Cambio</Text>
      </View>
      <View style={styles.separator} />

      <View style={styles.dataRow}>
        <Text style={[styles.dataCell, { flex: 2 }]}>Memoria visual</Text>
        <Text style={[styles.dataCell, { flex: 1, textAlign: 'right' }]}>{data.memory.total}</Text>
        <Text style={[styles.dataCell, { flex: 1, textAlign: 'right', color: data.memory.change > 0 ? 'green' : 'red' }]}>
          {data.memory.change < 0 || '+'}{data.memory.change}%
        </Text>
      </View>
      <View style={styles.separator} />

      <View style={styles.dataRow}>
        <Text style={[styles.dataCell, { flex: 2 }]}>Atención</Text>
        <Text style={[styles.dataCell, { flex: 1, textAlign: 'right' }]}>{data.attention.total}</Text>
        <Text style={[styles.dataCell, { flex: 1, textAlign: 'right', color: data.attention.change > 0 ? 'green' : 'red' }]}>
          {data.attention.change < 0 || '+'}{data.attention.change}%
        </Text>
      </View>
      <View style={styles.separator} />

      <View style={styles.dataRow}>
        <Text style={[styles.dataCell, { flex: 2 }]}>Velocidad</Text>
        <Text style={[styles.dataCell, { flex: 1, textAlign: 'right' }]}>{data.speed.total}</Text>
        <Text style={[styles.dataCell, { flex: 1, textAlign: 'right', color: data.speed.change > 0 ? 'green' : 'red' }]}>
          {data.speed.change < 0 || '+'}{data.speed.change}%
        </Text>
      </View>
      <View style={styles.separator} />

      <View style={styles.lastDataRow}>
        <Text style={[styles.dataCell, { flex: 2 }]}>Flexibilidad</Text>
        <Text style={[styles.dataCell, { flex: 1, textAlign: 'right' }]}>{data.flexibility.total}</Text>
        <Text style={[styles.dataCell, { flex: 1, textAlign: 'right', color: data.flexibility.change > 0 ? 'green' : 'red' }]}>
          {data.flexibility.change < 0 || '+'}{data.flexibility.change}%
        </Text>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  headerCell: {
    fontWeight: 'bold',
    color: 'gray',
  },
  dataRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
  },
  lastDataRow: {
    flexDirection: 'row',
    paddingTop: 12,
    alignItems: 'center',
  },
  dataCell: {
    // Estilos para las celdas de datos
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    width: '100%',
  },
});
