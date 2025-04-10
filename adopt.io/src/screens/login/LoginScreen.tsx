import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function LoginScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      alert("Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    alert("Conta registrada com sucesso!");
    // Aqui você pode adicionar lógica para salvar ou enviar os dados
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>
          1º ETAPA{"\n"}Comece criando sua conta :
        </Text>

        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Endereço de email</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <Text style={styles.label}>Digite novamente a senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Registrar-se</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Já tem uma conta? <Text style={styles.loginLink}>Faça login</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  box: {
    backgroundColor: "#3A9D8A",
    borderRadius: 20,
    padding: 20,
    width: "100%",
    maxWidth: 400,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    color: "#fff",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 14,
    borderColor: "#fff",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#3A9D8A",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginText: {
    textAlign: "center",
    color: "#fff",
    marginTop: 15,
  },
  loginLink: {
    color: "#fff",
    textDecorationLine: "underline",
  },
});
