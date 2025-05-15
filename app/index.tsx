import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { router } from 'expo-router';
import { BlurView } from 'expo-blur';

export default function Home() {
  return (
    <ImageBackground
      source={require('@/assets/images/maya.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <BlurView intensity={70} tint="dark" style={StyleSheet.absoluteFill} />
      <View style={styles.overlay} />
      <View style={styles.container}>
        <StatusBar style="light" />
        <Image
          source={require("@/assets/images/adopt.io-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Encontre seu Pet</Text>
        <Text style={styles.subtitle}>
          Adote um amigo de quatro patas com o adopt.io e transforme uma vida!
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/home/home')}>
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>ADOPT.IO | ©</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f0fdf4',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#d1fae5',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#16a34a',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
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
