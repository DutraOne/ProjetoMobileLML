import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function ChangePassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const router = useRouter();

  const handleSave = () => {
    if (!password || !confirm) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    if (password !== confirm) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    console.log("Senha alterada com sucesso:", password);
    Alert.alert("Sucesso", "Senha alterada com sucesso!");
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nova senha</Text>
      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder="Digite sua nova senha"
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Confirmar nova senha</Text>
      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder="Confirme a nova senha"
        value={confirm}
        onChangeText={setConfirm}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.cancel]} onPress={() => router.back()}>
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
    marginBottom: 8,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
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
