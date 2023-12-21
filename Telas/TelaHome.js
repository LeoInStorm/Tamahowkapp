import React from "react";
import {View, Text,TouchableOpacity} from 'react-native'
import styles from '../Styles/Estilos'
import * as Animatable from 'react-native-animatable'

export function TelaHome() {
return(
    <Animatable.View style= {styles.container}>
        <Text style= {styles.textlogin}> Escolha o Souls Like do seu interesse </Text>


        <View style = {styles.inputarea}>
            <TouchableOpacity>
                <Text>Dark Souls 1</Text>
            </TouchableOpacity>
            </View>

        <View style = {styles.inputarea}>    
            <TouchableOpacity>
                <Text>Dark Souls 2</Text>
            </TouchableOpacity>
        </View>

        <View style = {styles.inputarea}>
            <TouchableOpacity>
                <Text>Dark Souls 3</Text>
            </TouchableOpacity>
        </View>

        <View style = {styles.inputarea}>
            <TouchableOpacity>
                <Text>Elden Ring</Text>
            </TouchableOpacity>
        </View>
        

    </Animatable.View>
);
}