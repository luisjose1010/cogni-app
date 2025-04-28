import { StyleSheet } from "react-native";

import { Header } from "@/components/Header";
import { Screen } from "@/components/Screen";
import { ThemedScroll } from "@/components/ThemedScroll";
import { Card } from "@/components/ui/Card";
import { PreferredScheduleChart } from "@/components/ui/charts/PreferredScheduleChart";
import { UsageTrendChart } from "@/components/ui/charts/UsageTrendChart";
import { WeeklyDistributionChart } from "@/components/ui/charts/WeeklyDistributionChart";
import { WeeklyPatternChart } from "@/components/ui/charts/WeeklyPatternChart";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { TableData } from "@/components/ui/TableData";
import { useState } from "react";

const dataTime = [{
  attention: 65,
  day: 'Lun',
  flexibility: 21,
  memory: 60,
  speed: 32
},
{
  attention: 45,
  day: 'Mar',
  flexibility: 52,
  memory: 31,
  speed: 60
},
{
  attention: 81,
  day: 'Mie',
  flexibility: 66,
  memory: 48,
  speed: 27
},
{
  attention: 26,
  day: 'Jue',
  flexibility: 28,
  memory: 65,
  speed: 84
},
{
  attention: 68,
  day: 'Vie',
  flexibility: 42,
  memory: 62,
  speed: 78
},
{
  attention: 21,
  day: 'Sab',
  flexibility: 33,
  memory: 42,
  speed: 55
},
{
  attention: 22,
  day: 'Dom',
  flexibility: 44,
  memory: 58,
  speed: 53
}]

const dataTotalTime = {
  memory: {
    total: 60,
    change: 12
  },
  attention: {
    total: 65,
    change: -8
  },
  speed: {
    total: 32,
    change: 6
  },
  flexibility: {
    total: 21,
    change: -3
  }
}

const dataFrequency = [
  { hourRange: '6-8', sessions: 18 },
  { hourRange: '8-10', sessions: 57 },
  { hourRange: '10-12', sessions: 39 },
  { hourRange: '12-14', sessions: 60 },
  { hourRange: '14-16', sessions: 59 },
  { hourRange: '16-18', sessions: 2 },
  { hourRange: '18-20', sessions: 37 },
  { hourRange: '20-22', sessions: 49 },
  { hourRange: '22-24', sessions: 43 }
];

const dataFrequencySchedule = [
  {label: 'Lun', value: 30},
  {label: 'Mar', value: 55},
  {label: 'Mié', value: 70},
  {label: 'Jue', value: 35},
  {label: 'Vie', value: 10},
  {label: 'Sáb', value: 60},
  {label: 'Dom', value: 38},
];

const dataFrequencyWeekly = [
  { frequency: 5, hour: '8:00' },
  { frequency: 11, hour: '9:00' },
  { frequency: 6, hour: '10:00' },
  { frequency: 22, hour: '11:00' },
  { frequency: 19, hour: '12:00' },
  { frequency: 25, hour: '13:00' },
  { frequency: 23, hour: '14:00' },
  { frequency: 12, hour: '15:00' }
]


function TimeSegment() {
  return (
    <>
      <Card title="Distribución Semanal" subtitle="Minutos dedicados por día y actividad">
        <WeeklyDistributionChart data={dataTime} style={styles.chart} />
      </Card>

      <Card title="Resumen por Actividad" subtitle="Tiempo total y tendencia">
        <TableData data={dataTotalTime} />
      </Card>
    </>
  );
}

function FrequencySegment() {
  return (
    <>
      <Card title="Tendencia de Uso" subtitle="Sesiones por semana">
        <UsageTrendChart data={dataFrequency} style={styles.chart} />
      </Card>

      <Card title="Patrón Semanal" subtitle="Uso por día de la semana">
        <PreferredScheduleChart data={dataFrequencySchedule} style={styles.chartCenter} />
      </Card>

      <Card title="Horario Preferido" subtitle="Frecuencia por hora del día">
        <WeeklyPatternChart data={dataFrequencyWeekly} style={styles.chart} />
      </Card>
    </>
  );
}

export default function ProgressScreen() {
  const segments = ['Tiempo', 'Frecuencia'];
  const [selectedValue, setSelectedValue] = useState(() => segments[0]);

  const handlePress = (value: typeof selectedValue) => {
    setSelectedValue(() => value);
  };

  return (
    <Screen>
      {
        selectedValue === 'Tiempo' && (
          <Header title="Tiempo por Actividad" subtitle="Datos de Actividad" />
        )
      }
      {
        selectedValue === 'Frecuencia' && (
          <Header title="Datos de Actividad" subtitle="Datos de Uso" />
        )
      }

      <SegmentedControl
        segments={segments}
        selectedValue={selectedValue}
        onValueChange={handlePress}
        style={styles.segmentedControl}
      />

      {
        selectedValue === 'Tiempo' && (
          <ThemedScroll>
            <TimeSegment />
          </ThemedScroll>
        )
      }

      {
        selectedValue === 'Frecuencia' && (
          <ThemedScroll>
            <FrequencySegment />
          </ThemedScroll>
        )
      }
    </Screen>
  );
}

const styles = StyleSheet.create({
  chart: {
    height: 200,
    width: "100%",
  },
  chartCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  segmentedControl: {
    marginBottom: 20,
    marginHorizontal: 20,
  }
});
