import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import MenuCentral from "@/src/components/MenuCentral";

export default function DogInfoScreen() {
  const {
    name = "Desconhecido",
    distance = "Indefinida",
    age = "N/A",
    image,
  } = useLocalSearchParams();
  const router = useRouter();

  const handleFinishAdoption = () => {
    router.push("/DogAdopt/AdoptionSuccess");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Logo no topo */}
        <View style={styles.logoWrapper}>
          <Image
            source={require("@/assets/images/adopt.io-logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Imagem do cachorro */}
        <View style={styles.imageWrapper}>
          {image ? (
            <Image
              source={{ uri: image as string }}
              style={styles.dogImage}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.placeholderImage}>
              <Text style={styles.placeholderText}>Sem imagem</Text>
            </View>
          )}
        </View>

        <Text style={styles.title}>Informações do Cão</Text>

        <View style={styles.infoBox}>
          <Text style={styles.info}>🐶 Nome: <Text style={styles.value}>{name}</Text></Text>
          <Text style={styles.info}>📍 Distância: <Text style={styles.value}>{distance}</Text></Text>
          <Text style={styles.info}>🎂 Idade: <Text style={styles.value}>{age}</Text></Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleFinishAdoption}>
          <Text style={styles.buttonText}>Concluir Adoção</Text>
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
    paddingBottom: 70, // espaço para o menu
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 20, // Adicionando um pequeno espaçamento superior
  },
  logoWrapper: {
    width: "100%",
    height: 120, // Tamanho maior para a logo
    marginBottom: 30, // Mais espaço entre logo e imagem do cachorro
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 90, // Logo maior
    height: 90, // Mais altura
  },
  imageWrapper: {
    width: '100%', // Ajustando para um tamanho mais proporcional
    height: '50%', // Ajustando a altura
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#eee",
    marginBottom: 5, // Adicionando um pequeno espaço abaixo da imagem
  },
  dogImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16, // Para manter as bordas arredondadas
  },
  placeholderImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: "#888",
    fontStyle: "italic",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 5,
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
    width: "100%", // Botão com largura total para facilitar o toque
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
