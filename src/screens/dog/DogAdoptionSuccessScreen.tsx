import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { BlurView } from "expo-blur";
import MenuCentral from "@/src/components/MenuCentral";

export default function AdoptionSuccessScreen() {
  const router = useRouter();
  const { image, name } = useLocalSearchParams();

  const handleBackToHome = () => {
    router.push("/DogAdopt/DogAdopt");
  };

  const handleBackToAdoptions = () => {
    router.push("/DogAdopt/DogAdopt");
  };

  return (
    <ImageBackground
      source={require("@/assets/images/maya2.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <BlurView intensity={70} tint="dark" style={StyleSheet.absoluteFill} />

      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.congratulationsText}>🎉 Parabéns pela Adoção!</Text>
          <Text style={styles.message}>
            Você acaba de dar um lar para{" "}
            <Text style={{ fontWeight: "bold" }}>{name ?? "seu novo amigo"}!</Text>
          </Text>

          {image ? (
            <Image source={{ uri: image as string }} style={styles.dogImage} />
          ) : (
            <Text style={styles.noImageText}>Imagem não disponível</Text>
          )}

          <TouchableOpacity style={styles.button} onPress={handleBackToHome}>
            <Text style={styles.buttonText}>Voltar para a Página Inicial</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { marginTop: 12 }]}
            onPress={handleBackToAdoptions}
          >
            <Text style={styles.buttonText}>Volte ao Menu de Adoções</Text>
          </TouchableOpacity>
        </View>

        <MenuCentral />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: {
    flex: 1,
    paddingBottom: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  congratulationsText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  message: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 16,
    textAlign: "center",
  },
  dogImage: {
    width: 250,
    height: 250,
    borderRadius: 16,
    marginBottom: 24,
    borderWidth: 3,
    borderColor: "#fff",
  },
  noImageText: {
    color: "#ccc",
    marginBottom: 24,
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#3A9D8A",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: 260,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
});
