import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Switch, ImageBackground, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useRouter } from "expo-router";
import { BlurView } from "expo-blur";
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
    <ImageBackground
      source={require("@/assets/images/maya2.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <BlurView intensity={70} tint="dark" style={StyleSheet.absoluteFill} />

      <View style={styles.overlay}>
        <View style={styles.content}>
          <Image
            source={require("@/assets/images/lucas.jpg")}
            style={styles.avatar}
          />
          <Text style={styles.username}>{username}</Text>

          <View style={styles.section}>
            <View style={styles.switchRow}>
              <Text style={styles.optionText}>Notificações</Text>
              <Switch
                value={notificationsEnabled}
                onValueChange={toggleNotifications}
              />
            </View>

            <TouchableOpacity style={styles.option} onPress={handleChangeUsername}>
              <Text style={styles.optionText}>Alterar nome de usuário</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={handleChangePassword}>
              <Text style={styles.optionText}>Alterar senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuButton} onPress={navigateToAccountSettings}>
              <Text style={styles.menuText}>Configurações</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.menuButton, styles.logoutButton]} onPress={navigateToDogAdopt}>
              <Text style={styles.logoutText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <MenuCentral />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    paddingBottom: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "90%",
    alignItems: "center",
    padding: 24,
    // fundo removido
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 30,
  },
  section: {
    width: "100%",
  },
  option: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  optionText: {
    fontSize: 16,
    color: "#fff",
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
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
