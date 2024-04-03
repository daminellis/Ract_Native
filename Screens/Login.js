import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const botLogin = () => {
    if (nome === 'dam' && senha === '123') {
      navigation.navigate('Home');
    } else {
      alert('Usuário ou senha incorretos.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder='Usuário'
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder='Senha'
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={botLogin}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
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
  formContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#9ACD32',
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
