import React from 'react';
import {AuthProvider} from './AuthContext';
import SomeComponent from './SomeComponents';

export default function App(){
    return(
        <AuthProvider>
            <SomeComponent />
        </AuthProvider>
    )
}