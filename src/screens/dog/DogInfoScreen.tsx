import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function DogInfoScreen() {
  const { name = "Desconhecido", breed = "Indefinida", size = "N/A", image } = useLocalSearchParams();
  const router = useRouter();

  const handleFinishAdoption = () => {
    router.push("/DogAdopt/AdoptionSuccess");
  };

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image as string }} style={styles.dogImage} />
      ) : (
        <View style={styles.placeholderImage}>
          <Text style={styles.placeholderText}>Sem imagem</Text>
        </View>
      )}

      <Text style={styles.title}>Informações do Cão</Text>

      <View style={styles.infoBox}>
        <Text style={styles.info}>🐶 Nome: <Text style={styles.value}>{name}</Text></Text>
        <Text style={styles.info}>📌 Raça: <Text style={styles.value}>{breed}</Text></Text>
        <Text style={styles.info}>📏 Tamanho: <Text style={styles.value}>{size}</Text></Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleFinishAdoption}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Concluir Adoção</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0fdf4",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  dogImage: {
    width: 220,
    height: 220,
    borderRadius: 16,
    marginBottom: 24,
  },
  placeholderImage: {
    width: 220,
    height: 220,
    borderRadius: 16,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  placeholderText: {
    color: "#888",
    fontStyle: "italic",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
    color: "#2F6F62",
  },
  infoBox: {
    marginBottom: 32,
    alignSelf: "stretch",
    paddingHorizontal: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 8,
    color: "#444",
  },
  value: {
    fontWeight: "600",
    color: "#222",
  },
  button: {
    backgroundColor: "#2F6F62",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
