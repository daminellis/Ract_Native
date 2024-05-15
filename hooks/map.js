import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

type Pessoas = {
  nome: string;
  sobrenome: string;
};

export default function App() {
  const [nome, setNome] = useState<string>("");
  const [sobrenome, setSobrenome] = useState<string>("");
  const [nomes, setNomes] = useState<Pessoas[]>([]);

  const handleNomeChange = (text: string): void => {
    setNome(text);
  };

  const handleSobrenomeChange = (text: string): void => {
    setSobrenome(text);
  };

  const adicionarPessoa = (): void => {
    setNomes([...nomes, { nome, sobrenome }]);
    setNome("");
    setSobrenome("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite um nome"
          placeholderTextColor={"white"}
          value={nome}
          onChangeText={handleNomeChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite seu sobrenome"
          placeholderTextColor={"white"}
          value={sobrenome}
          onChangeText={handleSobrenomeChange}
        />
        <Button title="Enviar" onPress={adicionarPessoa} />
      </View>
      <View style={styles.nomesContainer}>
        {nomes.map(({ nome, sobrenome }, index) => (
          <Text key={index} style={styles.item}>
            {`${nome} ${sobrenome}`}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: "slateblue",
  },
  inputsContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    color: "white",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  nomesContainer: {
    marginTop: 10,
  },
  item: {
    fontSize: 18,
    color: "white",
    marginBottom: 5,
  },
});