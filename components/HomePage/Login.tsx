import { StatusBar } from "expo-status-bar";
import { Text, Image, View, Button, Pressable } from "react-native";
import styles from "./LoginStyles.js";
import { useState } from "react";
import { Divider } from "@rneui/themed";

export function Login({ navigation }) {
  const [userInfo, setUserInfo] = useState(null);
  // Somewhere in your code

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/spark_logo.png")}
        style={styles.image}
      />
      <Text style={styles.header}>SPARK CONNECTS</Text>
      <Divider color="black" />
      <Text style={styles.subheader}>Sign in to continue</Text>
      <StatusBar style="auto" />
      <View style={styles.button_container}>
        <Button
          style={styles.button}
          title="Sign in with Google"
          onPress={() => navigation.navigate("Interests")}
        ></Button>
        <Button
          style={styles.button}
          title="Sign in with Github"
          onPress={() => alert("Button pressed")}
        ></Button>
      </View>
    </View>
  );
}
