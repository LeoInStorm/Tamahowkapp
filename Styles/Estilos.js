import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7C7A7A',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  
    logo: {
      marginTop: '10%',
      width: '100%',
      height: '30%',
      borderRadius: 2,
      resizeMode: 'center'
    },

    textlogin: {
      marginTop: '10%',
      marginBottom: '25%',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },

    inputarea: {
      flexDirection: 'row',
      width: '80%',
      height: '7%',
      backgroundColor:'#FFFFFF',
      marginTop: '5%',
      alignItems: 'center',
      borderRadius: 5,
    },

    form: {
      width:'90%',
      color:'grey',
      fontSize: 16,
      padding: 10,
      fontWeight: 'bold',
    },
    
    button: {
      position:'absolute',
      marginTop: "20%",
      width: '30%',
      height:'10%',
      backgroundColor: '#FFFFFF',
      alignSelf: 'center',
      borderRadius: 30,
      alignItems:'center',
      paddingVertical: 10,
    },
    textbutton: {
      fontSize:18,
      fontWeight: 'bold',

    }


  })
  
  export default styles;