import React from 'react';
import { SafeAreaView, Text, Image, View, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Home({ navigation }) {
  const handleButtonPress = () => {
    navigation.navigate('Carrinho');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sozinho na caminhada</Text>
      <Text style={styles.subtitle}>Fazendo componente mobile</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <Button
        title="Aperte aqui"
        color="#C71585"
        onPress={handleButtonPress}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#C71585',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
