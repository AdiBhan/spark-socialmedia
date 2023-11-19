import { Login } from "./components/HomePage/Login.tsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Interests } from "./components/HomePage/Interests.tsx";
import { useEffect, useState } from "react";
import { FormPages } from "./data.tsx";
import { View } from "react-native";
const Stack = createNativeStackNavigator();

export default function App() {
  {
    response: FormPages;
  }
  const [SurveyResults, setSurveyResults] = useState<any>({
    // Holds the results of the survey
    "Hi, there what's your name?": [],
    "What are your interests?": [],
    "What classes are you taking?": [],
    "What year are you?": [],
    "Are you looking to connect with a...": [],
    "What tools do you use?": [],
  });
  useEffect(() => {
    console.log(SurveyResults);
  }, [SurveyResults]);

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Header"
            options={{ headerShown: false }}
            component={Login}
          />

          {FormPages.map((page, index) => {
            console.log(page.name);
            console.log("Key for Stack.Screen:", `${page.name}-${index}`);
            return (
              <Stack.Screen
                // name={name}
                key={`${page.name}-${index}`}
                name={page.name}
                component={Interests}
                initialParams={{
                  name: page.name,
                  nextName: page.next,
                  header: page.header,
                  choices: page.choices,
                  InputNeeded: page.InputNeeded,
                  SurveyResults: SurveyResults,
                  setSurveyResults: setSurveyResults,
                }}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
