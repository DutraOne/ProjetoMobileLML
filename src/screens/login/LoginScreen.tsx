import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemModal, setMensagemModal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTipo, setModalTipo] = useState<"erro" | "sucesso">("erro");

  const exibirModal = (mensagem: string, tipo: "erro" | "sucesso") => {
    setMensagemModal(mensagem);
    setModalTipo(tipo);
    setModalVisible(true);
  };

  const handleLogin = () => {
    if (!email || !senha) {
      exibirModal("Preencha todos os campos.", "erro");
      return;
    }

    exibirModal("Login realizado com sucesso!", "sucesso");
    router.push("/DogAdopt/DogAdopt");
  };

  const goToRegister = () => {
    router.push("/registro/registro");
  };

  // Função para tratar o fechamento do modal e navegação para a próxima tela
  const handleModalClose = () => {
    setModalVisible(false);
    if (modalTipo === "sucesso") {
      router.push("/DogAdopt/DogAdopt"); // Alterar para a tela desejada
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View
            style={[
              styles.modalBox,
              modalTipo === "erro" ? styles.modalErro : styles.modalSucesso,
            ]}
          >
            <Text style={styles.modalIcon}>
              {modalTipo === "erro" ? "⚠️" : "✅"}
            </Text>
            <Text style={styles.modalTitulo}>
              {modalTipo === "erro" ? "Atenção!" : "Sucesso!"}
            </Text>
            <Text style={styles.modalMensagem}>{mensagemModal}</Text>
            <TouchableOpacity
              style={styles.modalBotao}
              onPress={handleModalClose}
            >
              <Text style={styles.modalBotaoTexto}>Entendi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.box}>
        <View style={styles.header}>
          <Image
            source={require("@/assets/images/adopt.io-logo.png")}
            style={styles.logo}
          />
          <Text style={styles.appName}>Adopt.io</Text>
          <Text style={styles.tagline}>Adoções Fáceis</Text>
        </View>

        <Text style={styles.title}>Login</Text>

        <Text style={styles.label}>Usuário ou email</Text>
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

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.switchText}>
          Não tem uma conta?{" "}
          <Text style={styles.switchLink} onPress={goToRegister}>
            Criar conta
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0fdf4",
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD166",
  },
  tagline: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    color: "#fff",
    marginBottom: 5,
    fontSize: 14,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 14,
    borderColor: "#e0e0e0",
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
  switchText: {
    textAlign: "center",
    color: "#fff",
    marginTop: 15,
  },
  switchLink: {
    color: "#fff",
    textDecorationLine: "underline",
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modalBox: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 25,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  modalIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  modalTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalMensagem: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  modalBotao: {
    backgroundColor: "#3A9D8A",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  modalBotaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalErro: {
    borderLeftWidth: 6,
    borderLeftColor: "#e74c3c",
  },
  modalSucesso: {
    borderLeftWidth: 6,
    borderLeftColor: "#2ecc71",
  },
});
