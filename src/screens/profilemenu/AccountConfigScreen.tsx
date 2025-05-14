import React, { useState, useCallback } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, Switch,} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useRouter } from "expo-router";
import MenuCentral from "@/src/components/MenuCentral";

export default function AccountConfigScreen() {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [username, setUsername] = useState("Carregando...");

  const toggleNotifications = async () => {
    const newValue = !notificationsEnabled;
    setNotificationsEnabled(newValue);
    await AsyncStorage.setItem("notificationsEnabled", JSON.stringify(newValue));
  };

  const navigateToDogAdopt = () => {
    router.push("/");
  };

  const navigateToAccountSettings = () => {
    router.push("/menu/Menu");
  };

  const handleChangeUsername = () => {
    router.push("/profilemenu/ChangeUsername");
  };

  const handleChangePassword = () => {
    router.push("/profilemenu/ChangePassword");
  };

  useFocusEffect(
    useCallback(() => {
      const loadData = async () => {
        const storedName = await AsyncStorage.getItem("username");
        const storedNotifications = await AsyncStorage.getItem("notificationsEnabled");
        setUsername(storedName || "@usuario123");
        setNotificationsEnabled(storedNotifications === "false" ? false : true);
      };
      loadData();
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

        <TouchableOpacity
          style={styles.menuButton}
          onPress={navigateToAccountSettings}
        >
          <Text style={styles.menuText}>Configurações da Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuButton, styles.logoutButton]}
          onPress={navigateToDogAdopt}
        >
          <Text style={styles.logoutText}>Sair</Text>
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
    marginBottom: 40,
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
  menuButton: {
    backgroundColor: "#3A9D8A",
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 12,
    width: "100%",
    elevation: 3,
  },
  logoutButton: {
    backgroundColor: "#E53E3E",
  },
  menuText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  logoutText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
