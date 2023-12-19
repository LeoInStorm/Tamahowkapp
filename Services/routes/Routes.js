import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TelaLogin } from "../../Telas/TelaLogin";
import { TelaCadastro } from "../../Telas/TelaCadastro";

const Stack = createNativeStackNavigator();

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
        </Stack.Navigator>


    )
}