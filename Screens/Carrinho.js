import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Carrinho({ navigation }) {
  const handleButtonPress = () => {
    navigation.navigate('Notificação');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o seu carro</Text>
      <View style={styles.carList}>
        <View style={styles.carItem}>
          <Text style={styles.carName}>Carro 1</Text>
          <Text style={styles.carPrice}>$20,000</Text>
          <TouchableOpacity style={styles.buyButton} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.carItem}>
          <Text style={styles.carName}>Carro 2</Text>
          <Text style={styles.carPrice}>$25,000</Text>
          <TouchableOpacity style={styles.buyButton} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  carList: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  carItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  carName: {
    fontSize: 18,
  },
  carPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#C71585',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
