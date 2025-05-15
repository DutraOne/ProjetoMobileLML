import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ImageBackground,} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";

export default function ChangeUsername() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSave = async () => {
    if (!username.trim()) {
      Alert.alert("Erro", "O nome de usuário não pode estar vazio.");
      return;
    }

    try {
      await AsyncStorage.setItem("username", username.trim());
      Alert.alert("Sucesso", "Nome de usuário alterado com sucesso!");
      router.back();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o nome de usuário.");
      console.error("Erro ao salvar nome de usuário:", error);
    }
  };

  return (
    <ImageBackground
      source={require("@/assets/images/maya2.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <BlurView intensity={70} tint="dark" style={StyleSheet.absoluteFill} />

      <View style={styles.overlay}>
        <Text style={styles.label}>Novo nome de usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu novo nome de usuário"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.cancel]}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 12,
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
  },
  button: {
    backgroundColor: "#3A9D8A",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  cancel: {
    backgroundColor: "#999",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
