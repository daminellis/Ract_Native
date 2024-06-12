import {database, addDoc, collection} from '../config/firebaseconfig';
import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';


export default function NewTask({navigation}) {
  
  const [newTask, setNewTask] = useState(null);

  function addTask(){
    const taskdocRef = collection(database, 'Tasks')
    addDoc(taskdocRef,{ 
      description: newTask,
      status: true,
    })
    navigation.navigate('Task')
  }

  return (
      <View style={styles.container}>
        <Text style={styles.txtdescription}>Novas Tarefas </Text>
        <TextInput
        style = {styles.inputTask}
        placeholder='Ex estudar'
        value={newTask}
        onChangeText={setNewTask}
        />
        <TouchableOpacity 
        style = {styles.btnsave}
        onPress={() => {addTask()}}
        >
          <Text style={styles.btntxtsave}>Salvar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container :{
      flex: 1,
      backgroundColor: '#eff1ed',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputTask:{
      width: '80%',
      borderBottomWidth: 1,
      padding: 5,
      margin: 'auto'
    },
    btnsave:{
      backgroundColor: '#4CAF50',
      borderRadius: 20,
      width: '70%',
      padding: 10,
    },
    btntxtsave:{
      color: '#efff1ed',
      textAlign: 'center'
    },
    txtdescription:{
      fontSize: 26,
      textAlign: 'center',
      color: '#373D20'
    },
  })