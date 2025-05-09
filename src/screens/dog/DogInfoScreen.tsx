import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function DogInfoScreen() {
  const { name, breed, size, image } = useLocalSearchParams();
  const router = useRouter();

  const handleFinishAdoption = () => {
    router.push("/DogAdopt/AdoptionSucess");
  };

  return (
    <View style={styles.container}>
      {image && (
        <Image source={{ uri: image as string }} style={styles.dogImage} />
      )}
      <Text style={styles.title}>Informações do Cão</Text>
      <Text style={styles.info}>Nome: {name}</Text>
      <Text style={styles.info}>Raça: {breed}</Text>
      <Text style={styles.info}>Tamanho: {size}</Text>

      <TouchableOpacity style={styles.button} onPress={handleFinishAdoption}>
        <Text style={styles.buttonText}>Concluir Adoção</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  dogImage: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3A9D8A",
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#3A9D8A",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
