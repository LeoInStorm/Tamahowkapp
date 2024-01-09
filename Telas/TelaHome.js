import React from "react";
import {View, Text,TouchableOpacity} from 'react-native'
import styles from '../Styles/Estilos'
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export function TelaHome() {
    
    const navigation = useNavigation();

return(
    <Animatable.View style= {styles.container}>
        <Text style= {styles.textlogin}> Escolha o Souls Like do seu interesse </Text>


        <View style = {styles.inputarea}>
            <TouchableOpacity onPress= {() => navigation.navigate('TelaDarkSouls1')}>
                <Text>Dark Souls 1</Text>
            </TouchableOpacity>
            </View>

        <View style = {styles.inputarea}>    
            <TouchableOpacity onPress= {() => navigation.navigate('TelaDarkSouls2')}>
                <Text>Dark Souls 2</Text>
            </TouchableOpacity>
        </View>

        <View style = {styles.inputarea}>
            <TouchableOpacity onPress= {() => navigation.navigate('TelaDarkSouls3')}>
                <Text>Dark Souls 3</Text>
            </TouchableOpacity>
        </View>

        <View style = {styles.inputarea}>
            <TouchableOpacity onPress= {() => navigation.navigate('TelaEldenRing')}>
                <Text>Elden Ring</Text>
            </TouchableOpacity>
        </View>
        

    </Animatable.View>
);
}