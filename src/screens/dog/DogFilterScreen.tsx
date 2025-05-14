import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import MenuCentral from "@/src/components/MenuCentral";

const screenWidth = Dimensions.get("window").width;

export default function DogFilterScreen() {
  const router = useRouter();

  const [distance, setDistance] = useState("5km");
  const [ageGroup, setAgeGroup] = useState("Filhote");

  const handleSearch = () => {
    console.log("Filtros selecionados:", { distance, ageGroup });
    router.push({
      pathname: "/DogAdopt/DogAdopt",
      params: { distance, ageGroup },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("@/assets/images/adopt.io-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.subtitle}>
          Quer uma busca personalizada?{"\n"}
          <Text style={styles.subtitleBold}>
            Seu melhor amigo pode estar mais próximo do que você imagina.
          </Text>
        </Text>

        <Image
          source={require("@/assets/images/maya.png")}
          style={styles.dogImage}
          resizeMode="cover"
        />

        <Text style={styles.title}>Escolha seus filtros</Text>

        <Text style={styles.label}>Distância:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={distance}
            onValueChange={(itemValue) => setDistance(itemValue)}
          >
            <Picker.Item label="5 km" value="5km" />
            <Picker.Item label="10 km" value="10km" />
            <Picker.Item label="15 km" value="15km" />
            <Picker.Item label="20 km" value="20km" />
          </Picker>
        </View>

        <Text style={styles.label}>Idade:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={ageGroup}
            onValueChange={(itemValue) => setAgeGroup(itemValue)}
          >
            <Picker.Item label="Filhote" value="Filhote" />
            <Picker.Item label="Adulto" value="Adulto" />
          </Picker>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Buscar Cachorros</Text>
        </TouchableOpacity>
      </View>

      <MenuCentral />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingBottom: 70,
  },
  content: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitleBold: {
    fontWeight: "600",
    color: "#3A9D8A",
  },
  dogImage: {
    width: screenWidth,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3A9D8A",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  pickerWrapper: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    width: 220,
  },
  button: {
    backgroundColor: "#3A9D8A",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: 260,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
});
