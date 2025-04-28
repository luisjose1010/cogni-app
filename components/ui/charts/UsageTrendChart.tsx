import { useFont } from "@shopify/react-native-skia";
import { StyleSheet, View, ViewProps } from 'react-native';
import { Area, CartesianChart, Line, Scatter, useChartPressState } from "victory-native";
import { ToolTip } from "../Tooltip";

const inter = require("../../../assets/fonts/Inter/Inter-Variable.ttf");

interface UsageTrendChartProps extends ViewProps {
  data: Array<{
    hourRange: string;
    sessions: number;
  }>;
}

export function UsageTrendChart(props: UsageTrendChartProps) {
  const font = useFont(inter, 10);
  const { state, isActive } = useChartPressState({ x: "", y: { sessions: 0 } });

  return (
    <View style={[styles.container, props.style]} {...props}>
      <CartesianChart
        data={props.data}
        chartPressState={state}
        xKey="hourRange"
        yKeys={["sessions"]}
        axisOptions={{ font, domain: [0, 80] }}
      >
        {({ points, chartBounds }) => (
          <>
            <Line
              points={points.sessions}
              color="#F4A462"
              strokeWidth={2}
              curveType="cardinal"
              animate={{ type: "timing", duration: 300 }}
            />
            <Scatter
              points={points.sessions}
              shape="circle"
              radius={4}
              style="fill"
              color="#F4A462"
            />
            <Area
              points={points.sessions}
              y0={chartBounds.bottom}
              color="#F4A46227"
              curveType="cardinal"
              animate={{ type: "timing", duration: 300 }}
            />
            {isActive ? (
              <ToolTip x={state.x.position} y={state.y.sessions.position} color="#F4A462" r={8} />
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
