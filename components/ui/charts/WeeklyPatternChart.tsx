import { useFont } from "@shopify/react-native-skia";
import { StyleSheet, View, ViewProps } from 'react-native';
import { Area, CartesianChart, Line, Scatter, useChartPressState } from "victory-native";
import { ToolTip } from "../Tooltip";

const inter = require("../../../assets/fonts/Inter/Inter-Variable.ttf");

interface WeeklyPatternChartProps extends ViewProps {
  data: Array<{
    hour: string;
    frequency: number;
  }>;
}

export function WeeklyPatternChart(props: WeeklyPatternChartProps) {
  const font = useFont(inter, 10);
  const { state, isActive } = useChartPressState({ x: "", y: { frequency: 0 } });

  return (
    <View style={[styles.container, props.style]} {...props}>
      <CartesianChart
        data={props.data}
        chartPressState={state}
        xKey="hour"
        yKeys={["frequency"]}
        axisOptions={{ font, domain: [0, 80] }}
      >
        {({ points, chartBounds }) => (
          <>
            <Line
              points={points.frequency}
              color="#2A9D90"
              strokeWidth={2}
              curveType="cardinal"
              animate={{ type: "timing", duration: 300 }}
            />
            <Scatter
              points={points.frequency}
              shape="circle"
              radius={4}
              style="fill"
              color="#2A9D90"
            />
            <Area
              points={points.frequency}
              y0={chartBounds.bottom}
              color="#2A9D9027"
              curveType="cardinal"
              animate={{ type: "timing", duration: 300 }}
            />
            {isActive ? (
              <ToolTip x={state.x.position} y={state.y.frequency.position} color="#2A9D90" r={8} />
            ) : null}
          </>
        )}
      </CartesianChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
