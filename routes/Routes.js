import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TelaLogin } from "../Telas/TelaLogin";
import { TelaCadastro } from "../Telas/TelaCadastro";
import { TelaHome } from "../Telas/TelaHome";
import { TelaPerfil } from "../Telas/TelaPerfil";
import{Ionicons} from '@expo/vector-icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



export function TabRoutes(){

    return(
       
            <Tab.Navigator>
                <Tab.Screen name="Home" component={TelaHome}  options={{headerShown: false}} />
                <Tab.Screen name="Perfil" component={TelaPerfil}  options={{headerShown: false}} />     
            </Tab.Navigator>

    )
}

export default function Routes(){
    return(
        <Stack.Navigator>

            <Stack.Screen
            name="TelaLogin"
            component={TelaLogin}
            options={{headerShown: false}}
            />
            <Stack.Screen
             name="TelaHome"
             component={TabRoutes}
             options={{headerShown: false}}
            />
            
           

            <Stack.Screen
             name="TelaCadastro"
             component={TelaCadastro}
             options={{headerShown: false}}
            />

           

        </Stack.Navigator>
    )
}


