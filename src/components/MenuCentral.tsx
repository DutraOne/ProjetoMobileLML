import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function MenuCentral() {
  const router = useRouter();

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => router.push("/DogAdopt/DogAdopt")}>
        <FontAwesome name="home" size={24} color="#3A9D8A" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/DogAdopt/DogFilter")}>
        <FontAwesome name="paw" size={24} color="#3A9D8A" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/profilemenu/AccountConfig")}>
        <FontAwesome name="user" size={24} color="#3A9D8A" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  label: {
    fontSize: 12,
    textAlign: "center",
    color: "#3A9D8A",
    marginTop: 4,
  },
});