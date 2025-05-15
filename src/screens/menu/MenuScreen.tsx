import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from "react-native";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";
import MenuCentral from "@/src/components/MenuCentral";

export default function MenuScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("@/assets/images/maya2.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <BlurView intensity={70} tint="dark" style={StyleSheet.absoluteFill} />

      <View style={styles.overlay}>
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
              onPress={() => router.push("/profilemenu/AccountConfig")}
            >
              <Text style={styles.menuText}>Configurações do Usuário</Text>
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
      </View>

      <MenuCentral />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    paddingBottom: 70,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  content: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5,
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
    backgroundColor: "rgba(58,157,138,0.85)",
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 3,
  },
  menuText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
  logoutButton: {
    backgroundColor: "rgba(229,62,62,0.85)",
  },
  logoutText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
