import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./components/HomePage/Login";
import { Interests } from "./components/HomePage/Interests";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Header"
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen
            name="Interests"
            component={Interests}
            initialParams={{ header: "Hi, there what's your name?" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}


