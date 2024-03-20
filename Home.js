import {SafeAreaView, Text, Image, View, Button, StyleSheet} from 'react-native';

export default function Home(navigation){
  return(
    <View>
      <Text>Sozinho na caminhada</Text>
      <Text style={styles.text}>Fazendo componente mobile</Text>
      <Button
        title = 'Aperte aqui'
        color = '#C71585'
        />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    color: '#C71585',
  },
});