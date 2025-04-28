import { RadarChart } from "@salmonco/react-native-radar-chart";
import { useFonts } from "expo-font";
import { StyleSheet, View, ViewProps } from 'react-native';

interface PreferredScheduleChartProps extends ViewProps {
  data: Array<{
    label: string;
    value: number;
  }>;
}



export function PreferredScheduleChart(props: PreferredScheduleChartProps) {
  return (
    <View style={[styles.container, props.style]} {...props}>
      <RadarChart
        data={props.data}
        maxValue={100}
        gradientColor={{
          startColor: '#2A9D90',
          endColor: '#F3FFFF',
          count: 5,
        }}
        stroke={['#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC']}
        strokeWidth={[0.5, 0.5, 0.5, 0.5, 1]}
        strokeOpacity={[1, 1, 1, 1, 0.5]}
        labelColor="#808080"
        dataFillColor="#000"
        dataFillOpacity={0.3}
        labelFontFamily="Inter"
        dataStroke="#000"
        dataStrokeWidth={1}
        size={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
