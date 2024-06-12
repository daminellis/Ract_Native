import {database, collection, updateDoc } from '../config/firebaseconfig';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function Details({ navigation, route }) {
  
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
  
  function editTask (){
    const taskDocRef = doc(database, 'task', id)
    updateDoc(taskDocRef, {
      description: descriptionEdit
    })
    navigation.navigate('Task')
  }

  return (
      <View >
        <Text>Detalhes</Text>
      <TextInput
      style={styles.inputTask}
      placeholder='Ex estudar'
      value={descriptionEdit}
      onChangeText={}
      />
      <TouchableOpacity style={styles.btnsave}>
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
  btnsave:{

  },

})
