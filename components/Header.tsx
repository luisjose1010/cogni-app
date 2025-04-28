import { StyleSheet, View, ViewProps } from "react-native";

import { ThemedText } from "@/components/ThemedText";

interface HeaderProps extends ViewProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function Header({ title = '', subtitle = '', children }: HeaderProps) {
  return (
    <View style={styles.header}>
      <ThemedText type="title" style={[styles.title, !subtitle && { marginBottom: 10 }]}>
        {title}
      </ThemedText>
      {
        subtitle && (
          <ThemedText style={styles.subtitle}>
            {subtitle}
          </ThemedText>
        )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%"
  },
  title: {
    marginTop: 20,
  },
  subtitle: {
    marginBottom: 10,
  }
});
