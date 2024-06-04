import React,{useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, FlatList} from 'react-native'
import { database, doc, deleteDoc } from "../config/firebaseconfig";
import { onSnapshot, collection } from 'firebase/firestore';


export default function Task ({ navigation }) {
  
  const [task, setTask ] = useState([])
  
  useEffect (() =>{
    const taskCoolection = collection(database, 'Tasks')
    const listen = onSnapshot(taskCoolection, (query) =>{
      const list= []
      query.forEach((doc) =>{
        list.push({...doc.data(), id: doc.id})
      })
      setTask(list)
    })
      return () => listen();
    }, [])

  return (
      <View style={StyleSheet.container}>
        <Text>Tarefas</Text>
        <TouchableOpacity
        style = {styles.btnNewTask}
        onPress={() => navigation.navigate('NewTask')}>
          <Text style={styles.txtbtnNewTask}> + </Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff1ed'
  },
  btnNewTask:{
    backgroundColor: '#373D20',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 50,
    bottom: 50,
    marginLeft: 20,
    position: 'absolute',
  },
  txtbtnNewTask:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#BCBD8B',
    
  }
})