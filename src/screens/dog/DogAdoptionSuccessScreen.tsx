import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function AdoptionSuccessScreen() {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/DogAdopt/DogAdopt");
  };

  const handleBackToAdoptions = () => {
    router.push("/DogAdopt/DogAdopt");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.congratulationsText}>🎉 Parabéns pela Adoção!</Text>
      <Text style={styles.message}>Você acaba de dar um lar para um novo amigo!</Text>

      <TouchableOpacity style={styles.button} onPress={handleBackToHome}>
        <Text style={styles.buttonText}>Voltar para a Página Inicial</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { marginTop: 12 }]} onPress={handleBackToAdoptions}>
        <Text style={styles.buttonText}>Volte ao Menu de Adoções</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0fdf4",
    padding: 20,
  },
  congratulationsText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3A9D8A",
    marginBottom: 12,
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    color: "#333",
    marginBottom: 24,
    textAlign: "center",
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
