import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Dimensions, ImageBackground,} from "react-native";
import axios from "axios";
import { useRouter, useLocalSearchParams } from "expo-router";
import { BlurView } from "expo-blur";
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

      const randomNames = [
        "Rex", "Bolt", "Luna", "Max", "Maggie", "Scooby", 
        "Theo", "Thor", "Sammy", "Maia", "Salsicha", "Latrel", "Kings",
      ];
      const dist = generateRandomDistance();
      const maxDistance = parseInt((distance as string)?.replace("km", "") || "100");

      if (parseInt(dist) > maxDistance) {
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
        distance: dog.distance,
        age: dog.age,
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
    <ImageBackground
      source={require("@/assets/images/maya2.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <BlurView intensity={70} tint="dark" style={StyleSheet.absoluteFill} />

      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.adoptionInfoWrapper}>
            <Image
              source={require("@/assets/images/adopt.io-logo.png")}
              style={styles.logoSmall}
              resizeMode="contain"
            />
            <Text style={styles.adoptionText}>
              Adotar é transformar vidas: dê uma chance para um amigo fiel.
            </Text>
          </View>

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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingBottom: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
    width: "100%",
  },
  adoptionInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(58, 157, 138, 0.3)",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 12,
    maxWidth: "95%",
    alignSelf: "center",
  },
  logoSmall: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  adoptionText: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    textShadowColor: "rgba(0,0,0,0.7)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
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
    color: "#fff",
    marginTop: 10,
    textShadowColor: "rgba(0,0,0,0.9)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
  },
  infoContainer: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  dogInfo: {
    fontSize: 16,
    color: "#eee",
    marginVertical: 2,
  },
  adoptButton: {
    backgroundColor: "rgba(58,157,138,0.9)",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 4,
    minWidth: 200,
  },
  secondaryButton: {
    backgroundColor: "rgba(204,204,204,0.7)",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
