import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "./ThemedText";

const logo = require('@/assets/images/logo.png');

export function AppBar ({ title = 'Cogni App' }: { title?: string }) {
  const { top: topSafeArea } = useSafeAreaInsets();
  
  return (
    <LinearGradient
      colors={['#100c34', '#4a148c', '#7c4dff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{paddingTop: topSafeArea}}
    >
      <View style={styles.appBar}>
        <Image source={logo} resizeMode="stretch" style={styles.logo} />
        <ThemedText type="title" style={styles.appTitle}>{title}</ThemedText>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    gap: 8,
  },
  appTitle: {
    color: 'white',
    fontSize: 18,
  },
  logo: {
    height: 40,
    width: 40,
  },
});
