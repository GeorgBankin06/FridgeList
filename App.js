import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import EventList from './EventList';
import EventForm from './EventForm';

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
          component={EventForm}
          options={{ title: "Add Fridge" }}
        />
        <Stack.Screen
          name="Product List"
          component={EventForm}
          options={{ title: "Add Product" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
