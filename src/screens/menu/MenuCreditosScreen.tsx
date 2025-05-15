import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, Pressable, ImageBackground, } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

export default function CreditsScreen() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const devs = [
    { name: "Lucas Dutra", image: require("@/assets/images/lucas.jpg") },
    { name: "Matheus Souza", image: require("@/assets/images/matheus.png") },
    { name: "Leonardo Miranda", image: require("@/assets/images/leo.jpg") },
  ];

  const openModal = (image: any) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <ImageBackground
      source={require("@/assets/images/maya2.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <BlurView intensity={70} tint="dark" style={StyleSheet.absoluteFill} />

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/menu/Menu")}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="#3A9D8A" />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Créditos</Text>

        <ScrollView contentContainerStyle={styles.devsContainer}>
          {devs.map((dev, index) => (
            <TouchableOpacity
              key={index}
              style={styles.devContainer}
              onPress={() => openModal(dev.image)}
              activeOpacity={0.8}
            >
              <Image source={dev.image} style={styles.devImage} />
              <Text style={styles.devName}>{dev.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Modal
          visible={modalVisible}
          transparent
          animationType="fade"
          onRequestClose={closeModal}
        >
          <>
            <BlurView intensity={70} tint="dark" style={StyleSheet.absoluteFill} />

            <View style={styles.modalBackground}>
              <TouchableOpacity
                style={styles.modalBackButton}
                onPress={closeModal}
                activeOpacity={0.8}
              >
                <Ionicons name="close" size={30} color="#fff" />
              </TouchableOpacity>

              <Pressable style={styles.modalContent} onPress={closeModal}>
                <Pressable onPress={(e) => e.stopPropagation()}>
                  {selectedImage && (
                    <Image source={selectedImage} style={styles.modalImage} />
                  )}
                </Pressable>
              </Pressable>
            </View>
          </>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontSize: 18,
    color: "#3A9D8A",
    marginLeft: 5,
    fontWeight: "600",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3A9D8A",
    textAlign: "center",
    marginBottom: 30,
  },
  devsContainer: {
    alignItems: "center",
    paddingBottom: 40,
  },
  devContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  devImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    resizeMode: "cover",
  },
  devName: {
    fontSize: 16,
    color: "#333",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 20,
  },
  modalContent: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 15,
    resizeMode: "cover",
  },
});
