import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { router } from "expo-router";
import { BlurView } from "expo-blur";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("@/assets/images/maya.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <BlurView intensity={70} tint="dark" style={StyleSheet.absoluteFill} />
      <View style={styles.overlay} />

      <ScrollView contentContainerStyle={styles.container}>
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
          <TouchableOpacity onPress={() => {/* recuperação futura */}}>
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
          <View style={styles.footer}>
            <Text style={styles.footerText}>ADOPT.IO | ©</Text>
          </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
    color: "#d1fae5",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#f0fdf4",
    textAlign: "center",
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  loginContainer: {
    marginTop: 20,
    width: "100%",
  },
  forgotPassword: {
    color: "#d1fae5",
    textAlign: "center",
    marginBottom: 15,
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#16a34a",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    color: "#d1fae5",
    marginVertical: 10,
  },
    footer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#e5e7eb',
  },
});
