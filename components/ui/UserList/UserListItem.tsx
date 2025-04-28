import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, View } from "react-native";
import { Card } from "../Card";

interface UserListItemsProps {
  user: {
    name: string;
    email: string;
  }
}

export function UserListItem({ user }: UserListItemsProps) {
  const initials = user.name
    .split(' ')
    .map((word: string) => word[0])
    .join('')
    .toUpperCase();

  return (
    <Card >
      <View style={styles.userItem}>
        <View style={styles.avatar}>
          <ThemedText style={styles.avatarText}>{initials}</ThemedText>
        </View>
        <View style={styles.userInfo}>
          <ThemedText>{user.name}</ThemedText>
          <ThemedText>{user.email}</ThemedText>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  userInfo: {
    flex: 1,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#757575',
  },
});

