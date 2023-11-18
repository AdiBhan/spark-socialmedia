import { StatusBar } from "expo-status-bar";
import { Text, Image, View, Button, Pressable } from "react-native";
import styles from "./LoginStyles.js";
import { useState } from "react";
import { Divider } from "@rneui/themed";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

export function Login({ navigation }) {
  const [userInfo, setUserInfo] = useState(null);
  // Somewhere in your code
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
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
          onPress={signIn}
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
