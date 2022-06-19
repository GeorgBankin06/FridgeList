import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Fridges from './Fridges';
import AddFridge from "./AddFridge";
import Products from "./Products";

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="EventList">
                <Stack.Screen
                    name="Fridges"
                    component={Fridges}
                    options={{ title: "Your Fridges" }}
                />
                <Stack.Screen
                    name="Fridge List"
                    component={AddFridge}
                    options={{ title: "Add Fridge" }}
                />
                <Stack.Screen
                    name="Product List"
                    component={Products}
                    options={{ title: "Products" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
