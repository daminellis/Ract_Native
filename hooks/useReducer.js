import React, { useReducer } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Estado inicial do formulário
const initialState = {
  username: '',
  password: '',
  errorMessage: null,
};

// Função redutora que define como o estado é atualizado com base nas ações
function reducer(state, action) {
  switch (action.type) {
    case 'setFieldValue':
      return {
        ...state,
        [action.field]: action.value, // Atualiza o campo especificado com o novo valor
      };
    case 'setError':
      return {
        ...state,
        errorMessage: action.errorMessage, // Define a mensagem de erro
      };
    default:
      throw new Error();
  }
}

// Componente de formulário de login
function LoginForm() {
  // useReducer retorna o estado atual e a função dispatch para enviar ações ao redutor
  const [state, dispatch] = useReducer(reducer, initialState);

  // Função para lidar com mudanças nos campos do formulário
  const handleInputChange = (field, value) => {
    dispatch({ type: 'setFieldValue', field, value }); // Envia ação para atualizar o campo
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = () => {
    // Verifica se o nome de usuário e a senha são "123"
    if (state.username === '123' && state.password === '123') {
      // Simula uma tentativa de login bem-sucedida
      alert('Login bem-sucedido!');
      // Resetando os campos após o login
      dispatch({ type: 'setFieldValue', field: 'username', value: '' });
      dispatch({ type: 'setFieldValue', field: 'password', value: '' });
      dispatch({ type: 'setError', errorMessage: null });
    } else {
      // Exibe mensagem de erro se o login for inválido
      dispatch({ type: 'setError', errorMessage: 'Nome de usuário ou senha incorretos' });
    }
  };
  

  return (
    <View style={styles.container}>
      <Text>Username:</Text>
      <TextInput
        style={styles.input}
        value={state.username}
        onChangeText={(value) => handleInputChange('username', value)}
      />
      <Text>Password:</Text>
      <TextInput
        style={styles.input}
        value={state.password}
        onChangeText={(value) => handleInputChange('password', value)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleSubmit} />
      {state.errorMessage && <Text style={styles.error}>{state.errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default LoginForm;