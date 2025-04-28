import { ThemedText } from "@/components/ThemedText";
import { Pressable } from "react-native";
import { Card } from "../Card";
import { UserListItem } from "./UserListItem";
import { StyleSheet } from "react-native";

interface UserListProps {
  data: Array<{
    name: string;
    email: string;
  }>;
}

export function UserList({ data }: UserListProps) {
  return (
    <Card>
      <ThemedText style={[styles.item]} type="subtitle">Cambiar de usuario</ThemedText>
      {data.map((user) => (
        <Pressable key={user.email} style={({ pressed }) => [
          // user.email === userSelected.email && styles.selectedSegmentButton,
          pressed && { opacity: 0.2 },
        ]}
          onPress={() => console.log('Usuario seleccionado', user)}
        >
          <UserListItem user={user} />
        </Pressable>
      ))}
      <Pressable
        style={({ pressed }) => [
          styles.addNewUserButton,
          // user.email === userSelected.email && styles.selectedSegmentButton,
          pressed && { opacity: 0.2 },
        ]}
        onPress={() => console.log('Añadir nuevo usuario')}>
        <ThemedText type="defaultSemiBold" style={{ color: "#9c27b0" }}>+ Añadir nuevo usuario</ThemedText>
      </Pressable>
    </Card>
  )
}

const styles = StyleSheet.create({
  addNewUserButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#9c27b0',
    borderRadius: 5,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
});
