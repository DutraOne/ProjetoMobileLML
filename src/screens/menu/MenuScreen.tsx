import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function MenuScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
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
          style={[styles.menuButton, { backgroundColor: "#e74c3c", padding: 10, borderRadius: 8 }]}
          onPress={() => router.replace("/")}
        >
          <Text style={[styles.menuText, { color: "#fff", textAlign: "center" }]}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#f0fdf4",
  },
  title: {
    fontSize: 24,
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
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  menuOptionsContainer: {
    marginTop: 30,
  },
  menuButton: {
    paddingVertical: 12,
    marginBottom: 10,
    backgroundColor: "#3A9D8A",
    borderRadius: 8,
    elevation: 3,
  },
  menuText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});
