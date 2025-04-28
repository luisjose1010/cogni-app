import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { ThemedText } from "@/components/ThemedText";
import { IconSymbol, IconSymbolName } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const tabs: Array<{ name: string, title: string, icon: IconSymbolName }> = [
    { name: 'index', title: 'Inicio', icon: 'house.fill' },
    { name: 'progress', title: 'Progreso', icon: 'chart.bar' },
    { name: 'performance', title: 'Rendimiento', icon: 'chart.line.uptrend.xyaxis' },
    { name: 'profile', title: 'Perfil', icon: 'person.fill' },
  ];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarLabelStyle: { marginInline: 0 },
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            // Use a solid background on Android
            backgroundColor: Colors[colorScheme ?? 'light'].primary,
            borderTopRadius: 5,
            ...styles.tabBar,
          },
        }),
      }}>
      {
        tabs.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              tabBarLabel: ({ color, focused, children }) => focused ? (
                <ThemedText darkColor={color} lightColor={color} type="defaultMedium" style={{ fontSize: 12, marginTop: 2, marginBottom: -2 }}>
                  {children}
                </ThemedText>
              ) : (
                <ThemedText darkColor={color} lightColor={color} type="default" style={{ fontSize: 12 }}>
                  {children}
                </ThemedText>
              ),
              tabBarIcon: ({ color, focused }) => focused ? (
                <>
                  <View style={[{ backgroundColor: color }, styles.focusedDecoration]} />
                  <IconSymbol size={22} name={tab.icon} color={Colors[colorScheme ?? 'light'].primary} style={{ marginBottom: 1 }} />
                </>
              ) : (
                <IconSymbol size={22} name={tab.icon} color={color} />
              ),
            }}
          />
        ))
      }
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
    height: 70,
  },
  focusedDecoration: {
    width: 36,
    height: 36,
    borderRadius: 100,
    position: 'absolute',
  },
})
