import {SafeAreaView, Text, Image, View, Button} from 'react-native'

export default function Profile(navigation){
  return(
    <View>
      <Text>Teste do meu 2° componente</Text>
      <Text>Hello World!</Text>
      <Image 
        style = {{height: 200, width: 100}}
        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Glasto2023_%28216_of_468%29_%2853008944401%29_-_slash_crop.jpg/220px-Glasto2023_%28216_of_468%29_%2853008944401%29_-_slash_crop.jpg'}}
      />
      <Button 
        title = 'Componente'
        color = '#FF4500'
        />
    </View>
  );
}