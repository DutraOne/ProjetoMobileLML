
import { router } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen() { 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Adopt.io</Text>
      <TouchableOpacity
        style={styles.button}
       >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#16a34a",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

