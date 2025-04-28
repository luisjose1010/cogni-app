import { useFont } from "@shopify/react-native-skia";
import { StyleSheet, View, ViewProps } from 'react-native';
import { Area, CartesianChart, Line, useChartPressState } from "victory-native";
import { ToolTip } from "../Tooltip";

const inter = require("../../../assets/fonts/Inter/Inter-Variable.ttf");

interface CategoryScoreChartProps extends ViewProps {
  data: Array<{
    memory: number;
    attention: number;
    speed: number;
    flexibility: number;
    day: string;
  }>;
}

export function CategoryScoreChart(props: CategoryScoreChartProps) {
  const font = useFont(inter, 10);
  const { state, isActive } = useChartPressState({ x: "", y: { "memory": 0, "attention": 0, "speed": 0, "flexibility": 0 } });

  return (
    <View style={[styles.container, props.style]} {...props}>
      <CartesianChart
        data={props.data}
        chartPressState={state}
        xKey="day"
        yKeys={["memory", "attention", "speed", "flexibility"]}
        axisOptions={{ font, domain: [0, 100] }}
      >
        {({ points, chartBounds }) => (
          <>
            <Line
              points={points.memory}
              color="#A855F7"
              strokeWidth={2}
              curveType="cardinal"
              animate={{ type: "timing", duration: 300 }}
            />
            <Area
              points={points.memory}
              y0={chartBounds.bottom}
              color="#A855F727"
              curveType="cardinal"
              animate={{ type: "timing", duration: 300 }}
            />
            {isActive ? (
              <ToolTip x={state.x.position} y={state.y.memory.position} color="#A855F7" />
            ) : null}

            <Line
              points={points.attention}
              color="#F59E0B"
              strokeWidth={2}
              curveType="cardinal"
              animate={{ type: "timing", duration: 300 }}
            />
            <Area
              points={points.attention}
              y0={chartBounds.bottom}
              color="#F59E0B27"
              curveType="cardinal"
              animate={{ type: "timing", duration: 300 }}
            />
            {isActive ? (
              <ToolTip x={state.x.position} y={state.y.attention.position} color="#F59E0B" />
            ) : null}

            <Line
              points={points.speed}
              color="#3B82F6"
              strokeWidth={2}
              curveType="cardinal"
              animate={{ type: "timing", duration: 300 }}
            />
            <Area
              points={points.speed}
              y0={chartBounds.bottom}
              color="#3B82F627"
              curveType="cardinal"
              animate={{ type: "timing", duration: 300 }}
            />
            {isActive ? (
              <ToolTip x={state.x.position} y={state.y.speed.position} color="#3B82F6" />
            ) : null}

            <Line
              points={points.flexibility}
              color="#10B981"
              strokeWidth={2}
              curveType="cardinal"
              animate={{ type: "timing", duration: 300 }}
            />
            <Area
              points={points.flexibility}
              y0={chartBounds.bottom}
              color="#10B98127"
              curveType="cardinal"
              animate={{ type: "timing", duration: 300 }}
            />
            {isActive ? (
              <ToolTip x={state.x.position} y={state.y.flexibility.position} color="#10B981" />
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
