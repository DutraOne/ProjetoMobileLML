import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import MenuCentral from "@/src/components/MenuCentral";

export default function MenuScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Menu</Text>

        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/adopt.io-logo.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.menuOptionsContainer}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => router.push("/menu/AccountConfig")}
          >
            <Text style={styles.menuText}>Configurações da Conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => router.push("/DogAdopt/DogAdopt")}
          >
            <Text style={styles.menuText}>Voltar ao DogAdopt</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => router.push("/menu/MenuCreditos")}
          >
            <Text style={styles.menuText}>Créditos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuButton, styles.logoutButton]}
            onPress={() => router.replace("/")}
          >
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>

      <MenuCentral />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0fdf4",
    paddingBottom: 70, // espaço para o menu inferior
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3A9D8A",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: "contain",
  },
  menuOptionsContainer: {
    width: "100%",
    marginTop: 10,
  },
  menuButton: {
    backgroundColor: "#3A9D8A",
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 3,
  },
  menuText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "#E53E3E",
  },
  logoutText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
