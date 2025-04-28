import { useFont } from "@shopify/react-native-skia";
import { StyleSheet, View, ViewProps } from 'react-native';
import { Area, CartesianChart, Line, StackedBar, useChartPressState } from "victory-native";
import { ToolTip } from "../Tooltip";
import { useThemeColor } from "@/hooks/useThemeColor";

const inter = require("../../../assets/fonts/Inter/Inter-Variable.ttf");

interface WeeklyDistributionChartProps extends ViewProps {
  data: Array<{
    memory: number;
    attention: number;
    speed: number;
    flexibility: number;
    day: string;
  }>;
}

export function WeeklyDistributionChart(props: WeeklyDistributionChartProps) {
  const font = useFont(inter, 10);
  const colors = useThemeColor();

  return (
    <View style={[styles.container, props.style]} {...props}>
      <CartesianChart
        data={props.data}
        xKey="day"
        yKeys={["memory", "attention", "speed", "flexibility"]}
        domainPadding={{ left: 50, right: 50, top: 30 }}
        axisOptions={{
          font, domain: [0, 250],
          labelColor: colors.text,
          formatXLabel: (value) => {
            const day = value;
            return day ?? '';
          },
          tickCount: 6,
        }}
        padding={5}
      >
        {({ points, chartBounds }) => (
          <>
            <StackedBar
              points={[points.memory, points.attention, points.speed, points.flexibility]}
              colors={["#A855F7", "#F59E0B", "#3B82F6", "#10B981"]}
              chartBounds={chartBounds}
              innerPadding={0.3}
              barCount={7}
              animate={{ type: "spring" }}
              barOptions={({ isBottom, isTop }) => {
                // 👇 customize each individual bar as desired
                return {
                  roundedCorners: isTop
                    ? {
                      topLeft: 5,
                      topRight: 5,
                    }
                    : isBottom
                      ? {
                        bottomRight: 0,
                        bottomLeft: 0,
                      }
                      : undefined,
                };
              }}
            />
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
