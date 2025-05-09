import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function DogAdoptScreen() {
  const [dogImage, setDogImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState({
    name: "Rex",
    breed: "Desconhecido",
    size: "Médio",
  });

  const router = useRouter();
  const { distance, gender, ageGroup } = useLocalSearchParams();

  const fetchDogImage = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogImage(response.data.message);

      const randomNames = ["Rex", "Bolt", "Luna", "Max", "Maggie"];
      const randomSizes = ["Pequeno", "Médio", "Grande"];
      const newDog = {
        name: randomNames[Math.floor(Math.random() * randomNames.length)],
        breed: "Desconhecido",
        size: randomSizes[Math.floor(Math.random() * randomSizes.length)],
      };
      setDog(newDog);
    } catch (error) {
      console.error("Erro ao buscar imagem de cachorro:", error);
      setDogImage(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogImage();
    console.log("Filtros recebidos:", { distance, gender, ageGroup });
  }, []);

  const handleAdopt = () => {
    router.push({
      pathname: "/DogAdopt/DogInfo",
      params: {
        name: dog.name,
        breed: dog.breed,
        size: dog.size,
        image: dogImage || "",
      },
    });
  };

  const handleViewAnother = () => {
    fetchDogImage();
  };

  // Navegação para a tela de filtros
  const handleGoToFilters = () => {
    router.push("/DogAdopt/DogFilter"); // Ajuste para o caminho da tela de filtros
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#3A9D8A" />
      ) : (
        dogImage && <Image source={{ uri: dogImage }} style={styles.dogImage} />
      )}

      <Text style={styles.dogName}>{dog.name}</Text>
      <Text style={styles.dogInfo}>Raça: {dog.breed}</Text>
      <Text style={styles.dogInfo}>Tamanho: {dog.size}</Text>

      {/* Filtros recebidos */}
      <View style={{ marginTop: 16 }}>
        <Text style={styles.dogInfo}>Distância: {distance}</Text>
        <Text style={styles.dogInfo}>Sexo: {gender}</Text>
        <Text style={styles.dogInfo}>Idade: {ageGroup}</Text>
      </View>

      <TouchableOpacity style={styles.adoptButton} onPress={handleAdopt}>
        <Text style={styles.buttonText}>Adotar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.adoptButton, styles.secondaryButton]}
        onPress={handleViewAnother}
      >
        <Text style={styles.buttonText}>Ver Outro Pet</Text>
      </TouchableOpacity>

      {/* Novo botão para navegar para os filtros */}
      <TouchableOpacity
        style={[styles.adoptButton, styles.secondaryButton]}
        onPress={handleGoToFilters}
      >
        <Text style={styles.buttonText}>Filtros</Text>
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
  dogImage: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  dogName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3A9D8A",
    marginBottom: 5,
  },
  dogInfo: {
    fontSize: 16,
    color: "#333",
    marginVertical: 2,
    textAlign: "center",
  },
  adoptButton: {
    backgroundColor: "#3A9D8A",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
    minWidth: 160,
  },
  secondaryButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
