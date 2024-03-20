import React from 'react';
import { SafeAreaView, Text, Image, View, TouchableOpacity, TextInput } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View>
      <TextInput
        placeholder='Usuário'
      />

      <TextInput
        placeholder='Senha'
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#9ACD32',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
          marginTop: 20,
        }}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}
