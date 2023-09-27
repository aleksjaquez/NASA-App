import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "../types";

import Home from "../views/Home";
import Detail from "../views/Detail";

const Stack = createNativeStackNavigator<RootStackParams>();
const routeScreenOptions = {
    headerShown: false,
}

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={routeScreenOptions}/>
                <Stack.Screen name="Detail" component={Detail} options={routeScreenOptions} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;