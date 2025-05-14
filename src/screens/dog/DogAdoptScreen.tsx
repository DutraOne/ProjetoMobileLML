import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import axios from "axios";
import { useRouter, useLocalSearchParams } from "expo-router";
import MenuCentral from "@/src/components/MenuCentral";

const screenWidth = Dimensions.get("window").width;

export default function DogAdoptScreen() {
  const router = useRouter();
  const { distance, ageGroup } = useLocalSearchParams();

  const [dogImage, setDogImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState({
    name: "Rex",
    distance: "0 km",
    age: "0",
  });

  const generateRandomDistance = () => {
    const min = 2;
    const max = 100;
    const dist = Math.floor(Math.random() * (max - min + 1)) + min;
    return `${dist} km`;
  };

  const generateRandomAge = () => {
    if (ageGroup === "Filhote") {
      const months = Math.floor(Math.random() * 6) + 2;
      return `${months} meses`;
    } else {
      const years = Math.floor(Math.random() * 8) + 1;
      return `${years} ano${years > 1 ? "s" : ""}`;
    }
  };

  const fetchDogImage = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogImage(response.data.message);

      const randomNames = ["Rex", "Bolt", "Luna", "Max", "Maggie"];
      const dist = generateRandomDistance();
      const maxDistance = parseInt((distance as string)?.replace("km", "") || "100");

      if (parseInt(dist) > maxDistance) {
        // tenta novamente com um cachorro mais próximo
        return fetchDogImage();
      }

      const newDog = {
        name: randomNames[Math.floor(Math.random() * randomNames.length)],
        distance: dist,
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
  }, [distance, ageGroup]);

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
      <View style={styles.content}>
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

        <View style={styles.infoContainer}>
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

      <MenuCentral />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0fdf4",
    paddingBottom: 100,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  imageWrapper: {
    width: screenWidth,
    height: 250,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  fullWidthImage: {
    width: "100%",
    height: "100%",
  },
  dogName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#3A9D8A",
    marginTop: 10,
  },
  infoContainer: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  dogInfo: {
    fontSize: 16,
    color: "#333",
    marginVertical: 2,
  },
  adoptButton: {
    backgroundColor: "#3A9D8A",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 4,
    minWidth: 200,
  },
  secondaryButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
