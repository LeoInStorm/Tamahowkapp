import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TelaLogin } from "../Telas/TelaLogin";
import { TelaCadastro } from "../Telas/TelaCadastro";
import { TelaHome } from "../Telas/TelaHome";
import { TelaPerfil } from "../Telas/TelaPerfil";
import { TelaDarkSouls1 } from "../Telas/TelaDarkSouls1"
import { TelaDarkSouls2 } from "../Telas/TelaDarkSouls2";
import { TelaDarkSouls3 } from "../Telas/TelaDarkSouls3";
import { TelaEldenRing } from "../Telas/TelaEldenRing";
import{Ionicons} from '@expo/vector-icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



export function TabRoutes(){

    return(
       
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="Home" 
                component={TelaHome}  
                options={{tabBarIcon: (size)=> <Ionicons name="home" size={25}/> }}  
                />
                <Tab.Screen name="Perfil" 
                component={TelaPerfil}  
                options={{tabBarIcon: (size)=> <Ionicons name="person" size={25}/> }} 
                />
            </Tab.Navigator>

    )
}

export default function Routes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>

            <Stack.Screen
            name="TelaLogin"
            component={TelaLogin}
            />
            <Stack.Screen
             name="TelaHome"
             component={TabRoutes}
            />
            <Stack.Screen
             name="TelaCadastro"
             component={TelaCadastro}
            />
            <Stack.Screen
             name="TelaDarkSouls1"
             component={TelaDarkSouls1}
            />
            <Stack.Screen
             name="TelaDarkSouls2"
             component={TelaDarkSouls2}
            />
            <Stack.Screen
             name="TelaDarkSouls3"
             component={TelaDarkSouls3}
            />
            <Stack.Screen
             name="TelaEldenRing"
             component={TelaEldenRing}
            />
        </Stack.Navigator>
    )
}


