import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TelaLogin } from "../Telas/TelaLogin";
import { TelaCadastro } from "../Telas/TelaCadastro";
import { TelaHome } from "../Telas/TelaHome";
import{Ionicons} from '@expo/vector-icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="TelaLogin"
            component={TelaLogin}
            options={{headerShown: false}}
            />

            <Stack.Screen
             name="TelaCadastro"
             component={TelaCadastro}
             options={{headerShown: false}}
            />

            <Stack.Screen
             name="TelaHome"
             component={TelaHome}
             options={{headerShown: false}}
            />
        </Stack.Navigator>

    )  
}