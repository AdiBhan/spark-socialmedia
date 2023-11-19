import { StatusBar } from "expo-status-bar";
import { Text, Image, View, Button, Pressable, TouchableOpacity } from "react-native";
import styles from "./LoginStyles.js";
import { useEffect, useState } from "react";
import { Divider } from "@rneui/themed";
import auth, { firebase } from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import {
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  MEASUREMENT_ID,
  MESSAGING_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
  DATABASE_URL,
  WEB_CLIENT_ID,
} from "@env";

export function Login({ navigation }) {
  const [signedIn, setSignedIn] = useState(false);

  const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID,
    databaseURL: DATABASE_URL
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
  });

  useEffect(() => {
    // Check the initial user sign-in state
    const subscriber = auth().onAuthStateChanged((user) => {
      setSignedIn(!!user);
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  if (signedIn) {
    navigation.navigate("NamePage")
  }

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

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
      <View>
        <TouchableOpacity style={styles.button_container} onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log("Signed in with Google!")
          ).catch(() => console.log("Cancelled."))
        }>
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>
        {/* <Button
          title="Sign in with Github"
          onPress={() => alert("Button pressed")}
        ></Button> */}
      </View>
    </View>
  );
}
