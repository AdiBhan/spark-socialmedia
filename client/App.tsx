import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View, Button } from "react-native";
import { Login } from "./components/HomePage/Login.tsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Interests } from "./components/HomePage/Interests.tsx";

// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";
// const Stack = createNativeStackNavigator();
// GoogleSignin.configure();
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
