import UserIcon from "@/assets/icons/User";
import { Header } from "@/components/Header";
import { Screen } from "@/components/Screen";
import { ThemedScroll } from "@/components/ThemedScroll";
import { ThemedText } from "@/components/ThemedText";
import { Card } from "@/components/ui/Card";
import { UserList } from "@/components/ui/UserList";
import { Pressable, StyleSheet, View } from "react-native";

const data = [
  {
    consecutiveDays: 12,
    email: 'fernando.perez@ejemplo.com',
    name: 'Fernando Perez'
  },
  {
    consecutiveDays: 6,
    email: 'ana.sanchez@ejemplo.com',
    name: 'Ana Sanchez'
  }
]

export default function ProfileScreen() {
  const user = data[0]

  return (
    <Screen>
      <Header title="Perfil" subtitle="Datos del usuario" />

      <ThemedScroll>
        <View style={styles.container}>
          <UserIcon width={100} height={100} style={styles.icon} />

          <ThemedText type="title">{user.name}</ThemedText>
          <ThemedText type="defaultMedium" style={styles.subtitle}>{user.email}</ThemedText>
        </View>

        <View style={styles.content}>
          <Card>
            <View style={styles.item}>
              <ThemedText type="subtitle">Información del usuario</ThemedText>
            </View>
            <View style={styles.item}>
              <ThemedText type="defaultSemiBold" style={styles.subtitle}>Puntuación total</ThemedText>
              <ThemedText type="defaultMedium">50</ThemedText>
            </View>
            <View style={styles.item}>
              <ThemedText type="defaultSemiBold" style={styles.subtitle}>Tiempo total</ThemedText>
              <ThemedText type="defaultMedium">18h 20min</ThemedText>
            </View>
            <View style={styles.item}>
              <ThemedText type="defaultSemiBold" style={styles.subtitle}>Días consecutivos</ThemedText>
              <ThemedText type="defaultMedium">{user.consecutiveDays}</ThemedText>
            </View>
          </Card>

          <UserList data={data} />
        </View>
      </ThemedScroll>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  content: {
    width: "100%",
    marginTop: 24,
  },
  icon: {
    width: 100,
    height: 100,
  },
  subtitle: {
    color: "#6e6e6e",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  }
});
