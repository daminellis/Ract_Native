import React, { UseState, UseMemo } from 'react';
import { View, Text, Button } from 'react-native';

/* const ComponenteCalculo = () => {
    const [numero, setNumero] = U45seState(0);

    const CalcularQuadrado = (num) => {
        console.log('Calculando quadrado...');
        return num * num;
    };

    const NumeroAoQuadrado = UseMemo(() => CalcularQuadrado(numero, [numero]));
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Digite um numero</Text>
            <Text style={{ fontSize: 24, marginVertical: 10 }}>{numero}</Text>
            <Button title="Incrementar numero" onPress={() => setNumero(numero + 1)}></Button>
            <Text>o quadrado do numero é: {NumeroAoQuadrado}</Text>
        </View>
    )
} */

export default function Numeros(){
    let [numero1, setNumero1] = UseState(1);
    let [numero2, setNumero2] = UseState(1);
    let [numero3, setNumero3] = UseState(1);
    let [numero4, setNumero4] = UseState(1);

    let potencia =(() => {
        const future = Date.now() + 1000;
        while (Date.now() < future) {}
        return numero1 ** numero2;
    })()

    let soma = numero3 + numero4;

    return(
        <View style={styles.formatacaoGeral}>
            
        </View>
    )
}