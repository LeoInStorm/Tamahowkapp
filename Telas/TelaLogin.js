import React from 'react';
import { Text, View, Image,TextInput,TouchableOpacity,ImageBackground,KeyboardAvoidingView, Platform } from 'react-native'
import styles from '../Styles/Estilos'
import{Ionicons} from '@expo/vector-icons'
export function TelaLogin() {
  return (
    //View de container - todas são filhas dela
    <KeyboardAvoidingView style={styles.container}behavior={Platform.OS == "ios" ? "padding" : "height"}>
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}>Login</Text>
        </TouchableOpacity>

      </View>
      
    </KeyboardAvoidingView>
  );
}