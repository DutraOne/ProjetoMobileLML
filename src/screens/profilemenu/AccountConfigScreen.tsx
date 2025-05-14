import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useRouter } from "expo-router";
import MenuCentral from "@/src/components/MenuCentral";

export default function AccountConfigScreen() {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [username, setUsername] = useState("Carregando...");

  // Alterna e salva o estado das notificações
  const toggleNotifications = async () => {
    const newValue = !notificationsEnabled;
    setNotificationsEnabled(newValue);
    await AsyncStorage.setItem("notificationsEnabled", JSON.stringify(newValue));
  };

  // Função para navegar para a tela DogAdopt
  const navigateToDogAdopt = () => {
    router.push("/"); // Navega para a tela do DogAdopt
  };

  // Função para navegar para a tela de configurações de conta
  const navigateToAccountSettings = () => {
    router.push("/profilemenu/AccountConfig"); // Navega para a tela de configurações de conta
  };

  const handleChangeUsername = () => {
    router.push("/profilemenu/ChangeUsername");
  };

  const handleChangePassword = () => {
    router.push("/profilemenu/ChangePassword");
  };

  // Carrega dados ao focar na tela
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

        {/* Novo botão para configurações de conta */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={navigateToAccountSettings}
        >
          <Text style={styles.menuText}>Configurações da Conta</Text>
        </TouchableOpacity>

        {/* Botão "Sair" com o mesmo tamanho que estava antes */}
        <TouchableOpacity
          style={[styles.menuButton, styles.logoutButton]}
          onPress={navigateToDogAdopt} // Navega para o DogAdopt
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
    marginBottom: 40, // Aumentei o espaço entre as seções
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
    width: "100%", // Garantir que o botão ocupe toda a largura
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
