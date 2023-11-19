import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Input } from "@rneui/themed";
import axios from "axios";
import styles from "./InterestsStyles.js";

const BACKEND_URL = "https://localhost:3000/api/submit";

export function Interests({ route, navigation }) {
  const {
    name,
    nextName,
    InputNeeded,
    choices,
    header,
    setSurveyResults,
    SurveyResults,
  } = route.params;

  const [selectedChoices, setSelectedChoices] = useState({});
  const [inputText, setInputText] = useState("");
  const textRef = React.useRef(null);
  const nextRef = React.useRef(null);

  useEffect(() => {
    console.log(inputText);
  }, [inputText]);

  async function handlePress() {
    navigation.navigate(nextName);
    if (InputNeeded) {
      setSurveyResults((prevState) => ({
        ...prevState,
        [header]: [...prevState[header], inputText],
      }));

      if (nextName == "InterPage") {
        alert("You have reached the end of the survey! 🎆");
        await axios.post(BACKEND_URL, {
          response: SurveyResults,
        });
      }
    }
  }

  return (
    <ScrollView>
      <Text style={styles.header}>{header}</Text>

      {InputNeeded ? (
        <Input
          ref={textRef}
          onChange={(event) => setInputText(event.nativeEvent.text)}
          style={styles.inputText}
          placeholder="Enter your name"
        />
      ) : (
        <View style={styles.surveyContainer}>
          {choices.map((choice, index) => (
            <Text
              key={choice + index}
              onPress={() => {
                setSurveyResults((prevState) => ({
                  ...prevState,
                  [header]: [...prevState[header], choice],
                }));

                setSelectedChoices((prevChoices) => ({
                  ...prevChoices,
                  [choice]: !prevChoices[choice],
                }));
              }}
              style={
                selectedChoices[choice]
                  ? styles.selectedText
                  : styles.selectables
              }
            >
              {choice}
            </Text>
          ))}
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text ref={nextRef} style={styles.buttonText}>
          Next
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
