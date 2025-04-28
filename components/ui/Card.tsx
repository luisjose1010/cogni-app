import { View, ViewProps } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

interface CardProps extends ViewProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function Card({ title, subtitle, children }: CardProps) {
  const {
    background: backgroundColor,
    border: borderColor,
  } = useThemeColor()
  
  return (
    <View style={[styles.card, { backgroundColor, borderColor }]}>
      {title && <ThemedText type="defaultSemiBold">{title}</ThemedText>}
      {subtitle && <ThemedText type="caption" style={styles.subtitle}>{subtitle}</ThemedText>}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  subtitle: {
    marginBottom: 12,
  },
});
