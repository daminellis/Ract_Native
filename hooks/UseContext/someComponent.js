import React, {useContext} from 'react';
import {AuthContext} from './AuthContext';
import {Text, View} from 'react-native';

export default function SomeComponent() {
    const {user} = useContext(AuthContext);

    return(
        <View>
            <Text>Bem vindo, {user ? user.name : 'Neves'}</Text>
        </View>
    )
}