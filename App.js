import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import EventList from './Fridges';
import AddFridge from "./AddFridge";

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="EventList">
                <Stack.Screen
                    name="Fridges"
                    component={EventList}
                    options={{ title: "Your Firdges" }}
                />
                <Stack.Screen
                    name="Fridge List"
                    component={AddFridge}
                    options={{ title: "Add Fridge" }}
                />
                <Stack.Screen
                    name="Product List"
                    component={EventList}
                    options={{ title: "Add Product" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
