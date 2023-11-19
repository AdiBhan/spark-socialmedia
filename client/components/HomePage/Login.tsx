import { StatusBar } from "expo-status-bar";
import { Text, Image, View, Button, Pressable } from "react-native";
import styles from "./LoginStyles.js";
import { useState } from "react";
import { Divider } from "@rneui/themed";

export function Login({ navigation }) {
  const [userInfo, setUserInfo] = useState(null);

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
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("NamePage")}
        >
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => alert("Button pressed")}
        >
          <Text style={styles.buttonText}>Sign in with Github</Text>
        </Pressable>
      </View>
    </View>
  );
}
