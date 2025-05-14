import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useRouter } from "expo-router";
import MenuCentral from "@/src/components/MenuCentral";

export default function AccountConfigScreen() {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [username, setUsername] = useState("Carregando...");

  const toggleNotifications = () =>
    setNotificationsEnabled((prev) => !prev);

  const handleLogout = () => {
    Alert.alert("Sair", "Deseja realmente sair da sua conta?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sair",
        style: "destructive",
        onPress: () => {
          // router.push("/login");
        },
      },
    ]);
  };

  const handleChangeUsername = () => {
    router.push("/menu/ChangeUsername");
  };

  const handleChangePassword = () => {
    router.push("/menu/ChangePassword");
  };

  // Recarrega quando a tela é focada
  useFocusEffect(
    useCallback(() => {
      const loadUsername = async () => {
        const storedName = await AsyncStorage.getItem("username");
        setUsername(storedName || "@usuario123");
      };
      loadUsername();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("@/assets/images/lucas.jpg")}
          style={styles.avatar}
        />
        <Text style={styles.username}>{username}</Text>

        <View style={styles.section}>
          <TouchableOpacity style={styles.option} onPress={handleChangeUsername}>
            <Text style={styles.optionText}>Alterar nome de usuário</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={handleChangePassword}>
            <Text style={styles.optionText}>Trocar senha</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.switchRow}>
            <Text style={styles.optionText}>Notificações</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={toggleNotifications}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair da conta</Text>
        </TouchableOpacity>
      </View>

      <MenuCentral />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingBottom: 70,
  },
  content: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  username: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 30,
  },
  section: {
    width: "100%",
    marginBottom: 30,
  },
  option: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  logoutButton: {
    backgroundColor: "#E53E3E",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
