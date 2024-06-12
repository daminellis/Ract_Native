import {database, doc, updateDoc } from '../config/firebaseconfig';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function Details({ navigation, route }) {
  
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
  const idTask = route.params.id

  function editTask (description, id){
    const taskDocRef = doc(database, 'Tasks', id)
    updateDoc(taskDocRef, {
      description: descriptionEdit,
    })
    navigation.navigate('Task')
  }

  return (
      <View style={styles.container}>
        <Text>Detalhes</Text>
      <TextInput
      style={styles.inputTask}
      placeholder='Ex estudar'
      value={descriptionEdit}
      onChangeText={setDescriptionEdit}
      />
      <TouchableOpacity style={styles.btnsave}
        onPress={() => editTask(descriptionEdit, idTask)}
      >
        <Text style={styles.btntxtsave}>Salvar</Text>
      </TouchableOpacity>
      </View>
   );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#eff1ed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTask:{

  },
  btnsave:{

  },
  btntxtsave:{

  },
})
