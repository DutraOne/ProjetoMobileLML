import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function CreditsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/menu/Menu")}
      >
        <Text style={styles.backText}>{"< Voltar"}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Créditos</Text>

      <ScrollView contentContainerStyle={styles.devsContainer}>
        <View style={styles.devContainer}>
          <Image
            source={require("@/assets/images/lucas.jpg")}
            style={styles.devImage}
          />
          <Text style={styles.devName}>Lucas Dutra</Text>
        </View>

        <View style={styles.devContainer}>
          <Image
            source={require("@/assets/images/matheus.png")} 
            style={styles.devImage}
          />
          <Text style={styles.devName}>Matheus Souza</Text>
        </View>

        <View style={styles.devContainer}>
          <Image
            source={require("@/assets/images/leo.jpg")}
            style={styles.devImage}
          />
          <Text style={styles.devName}>Leonardo Miranda</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#f0fdf4",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  backText: {
    fontSize: 18,
    color: "#3A9D8A",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3A9D8A",
    textAlign: "center",
    marginBottom: 30,
  },
  devsContainer: {
    alignItems: "center",
  },
  devContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  devImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    resizeMode: "cover",
  },
  devName: {
    fontSize: 16,
    color: "#333",
  },
});
