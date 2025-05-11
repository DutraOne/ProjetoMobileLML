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
import { useRouter } from "expo-router";

export default function DogAdoptScreen() {
  const [dogImage, setDogImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState({
    name: "Rex",
    distance: "0 km",
    age: "0",
  });

  const router = useRouter();

  const generateRandomDistance = () => {
    return `${Math.floor(Math.random() * (110 - 2 + 1)) + 5} km`; 
  };

  const generateRandomAge = () => {
    const inMonths = Math.random() < 0.5;
    if (inMonths) {
      const months = Math.floor(Math.random() * 6) + 6; 
      return `${months} meses`;
    } else {
      const years = Math.floor(Math.random() * 10) + 1; 
      return `${years} ano${years > 1 ? 's' : ''}`;
    }
  };

  const fetchDogImage = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogImage(response.data.message);

      const randomNames = ["Rex", "Bolt", "Luna", "Max", "Maggie"];
      const newDog = {
        name: randomNames[Math.floor(Math.random() * randomNames.length)],
        distance: generateRandomDistance(),
        age: generateRandomAge(),
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
  }, []);

  const handleAdopt = () => {
    router.push({
      pathname: "/DogAdopt/DogInfo",
      params: {
        name: dog.name,
        image: dogImage || "",
      },
    });
  };

  const handleViewAnother = () => {
    fetchDogImage();
  };

  const handleGoToFilters = () => {
    router.push("/DogAdopt/DogFilter");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push("/menu/Menu")}
        style={styles.menuButton}
      >
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>

      <View style={styles.imageWrapper}>
        {loading ? (
          <ActivityIndicator size="large" color="#3A9D8A" />
        ) : (
          dogImage && (
            <Image
              source={{ uri: dogImage }}
              style={styles.fullWidthImage}
              resizeMode="cover"
            />
          )
        )}
      </View>

      <Text style={styles.dogName}>{dog.name}</Text>

      <View style={{ marginTop: 16 }}>
        <Text style={styles.dogInfo}>Distância: {dog.distance}</Text>
        <Text style={styles.dogInfo}>Idade: {dog.age}</Text>
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
    alignItems: "center",
    backgroundColor: "#f0fdf4",
    paddingTop: 60,
    paddingHorizontal: 0,
  },
  menuButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  menuIcon: {
    fontSize: 30,
    color: "#3A9D8A",
  },
  imageWrapper: {
    width: "80%",
    height: 230,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  fullWidthImage: {
    width: "100%",
    height: "100%",
  },
  dogName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3A9D8A",
    marginTop: 15,
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
