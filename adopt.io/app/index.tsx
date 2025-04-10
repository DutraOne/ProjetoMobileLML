import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Home() {


  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/616/616490.png" }}
        style={styles.logo}
      />
      <Text style={styles.title}>Encontre seu Pet</Text>
      <Text style={styles.subtitle}>
        Adote um amigo de quatro patas com o adopt.io e transforme uma vida!
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/home/home')}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
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
    color: '#14532d',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#166534',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#16a34a',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
