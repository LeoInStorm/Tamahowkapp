import React from 'react';
import { Text, View, Image,TextInput,TouchableOpacity,ImageBackground, Platform } from 'react-native'
import styles from '../Styles/Estilos'
import{Ionicons} from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
export function TelaLogin() {

  const navigation = useNavigation();


  return (
    //View de container - todas são filhas dela
    <Animatable.View animation={'fadeInUp'}  style={styles.container}>

      <Image
        source={require("../assets/logo_tama.jpg")}
        style={styles.logo}/>
         
      <Text style={styles.textlogin}>Entre agora mesmo para ter as melhores builds de Souls Like</Text>

      <View style={styles.inputarea}>
        <TextInput style={styles.form} placeholder='Usuário'/>
        <ImageBackground>
          <Ionicons name='person' color='grey' size={20}/>
        </ImageBackground>        
      </View>

      <View style={styles.inputarea}>
        <TextInput style={styles.form} placeholder='Senha'/>
        <TouchableOpacity>
          <Ionicons name='eye' color='grey' size={20}/>
        </TouchableOpacity>
      </View>
    
      <View>
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textbutton}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('TelaCadastro')}>
          <Text style={styles.registertext}>Não Possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>


      </View>
    </Animatable.View>
  );
}