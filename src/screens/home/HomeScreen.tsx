import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { router } from "expo-router";

export default function WelcomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/adopt.io-logo.png")}
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>Adopt.io</Text>
        <Text style={styles.subtitle}>Adoções Fáceis</Text>
        <Text style={styles.description}>Trazer um amigo pra perto nunca foi tão fácil!</Text>
        <Text style={styles.description}>
          Encontre seu novo melhor amigo no adopt.io! Com apenas alguns cliques, você pode dar um
          lar cheio de amor a um pet que espera por você. Entre agora e faça a diferença na vida de
          um animal!
        </Text>

        <View style={styles.loginContainer}>
          <TouchableOpacity onPress={() => {/* Ainda precisamos implementar recuperação de senha */}}>
            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/login/login")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>ou</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/registro/registro")}
          >
            <Text style={styles.buttonText}>Criar uma conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0fdf4",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  box: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    maxWidth: 400,
    width: "100%",
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F1A94B",
  },
  subtitle: {
    fontSize: 20,
    color: "#2B5D47",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginBottom: 8,
  },
  loginContainer: {
    marginTop: 20,
    width: "100%",
  },
  forgotPassword: {
    color: "#2B5D47",
    textAlign: "center",
    marginBottom: 15,
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#A3D9C6",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#2B5D47",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    color: "#2B5D47",
    marginVertical: 10,
  },
});
