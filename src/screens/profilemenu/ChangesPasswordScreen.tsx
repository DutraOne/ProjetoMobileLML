import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ImageBackground,} from "react-native";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";

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
    <ImageBackground
      source={require("@/assets/images/maya2.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <BlurView intensity={70} tint="dark" style={StyleSheet.absoluteFill} />

      <View style={styles.overlay}>
        <Text style={styles.label}>Nova senha</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Digite sua nova senha"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>Confirmar nova senha</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Confirme a nova senha"
          placeholderTextColor="#aaa"
          value={confirm}
          onChangeText={setConfirm}
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
    marginBottom: 8,
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
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
