import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert,} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

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
    <View style={styles.container}>
      <Text style={styles.label}>Novo nome de usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu novo nome de usuário"
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0fdf4",
    padding: 24,
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 12,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#3A9D8A",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  cancel: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
