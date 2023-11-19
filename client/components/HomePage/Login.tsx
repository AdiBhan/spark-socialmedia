import { StatusBar } from "expo-status-bar";
import { Text, Image, View, Button, Pressable } from "react-native";
import styles from "./LoginStyles.js";
import { useEffect, useState } from "react";
import { Divider } from "@rneui/themed";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { WEB_CLIENT_ID } from "@env";

export function Login({ navigation }) {
  const [signedIn, setSignedIn] = useState(false);

  GoogleSignin.configure({
    webClientId: "668801422697-vhmi604godgqvb0m5pj2lufdiu4p9dof.apps.googleusercontent.com",
  });

  // useEffect(() => {
  //   // Check the initial user sign-in state
  //   const subscriber = auth().onAuthStateChanged((user) => {
  //     setSignedIn(!!user);
  //   });
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // async function onGoogleButtonPress() {
  //   // Get the users ID token
  //   const { idToken } = await GoogleSignin.signIn();

  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(googleCredential);
  // }

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
          title="Sign in with Google"
          onPress={() =>
            console.log("test")
          }
        ></Button>
        <Button
          title="Sign in with Github"
          onPress={() => alert("Button pressed")}
        ></Button>
      </View>
    </View>
  );
}
