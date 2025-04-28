import { Circle } from "@shopify/react-native-skia";
import type { SharedValue } from "react-native-reanimated";

interface ToolTipProps {
  x: SharedValue<number>;
  y: SharedValue<number>;
  color?: string;
  r?: number;
}

export function ToolTip({ x, y, color, r = 6 }: ToolTipProps) {
  return <Circle cx={x} cy={y} r={r} color={color ?? "black"} />;
}