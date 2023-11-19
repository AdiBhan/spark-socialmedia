import { StatusBar } from "expo-status-bar";
import {
  Text,
  Image,
  View,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import styles from "./LoginStyles.js";
import { useEffect, useState } from "react";
import { Divider } from "@rneui/themed";
import auth, { firebase } from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { WEB_CLIENT_ID } from "@env";

export function Login({ navigation }) {
  const [signedIn, setSignedIn] = useState(false);

  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
  });

  useEffect(() => {
    // Check the initial user sign-in state
    const subscriber = auth().onAuthStateChanged((user) => {
      const loggedIn = !!user;
      setSignedIn(loggedIn);
      if (loggedIn) {
        navigation.navigate("NamePage");
      }
    });
    return subscriber; // unsubscribe on unmount
  }, []);

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
        <TouchableOpacity
          style={styles.button_container}
          onPress={() =>
            onGoogleButtonPress()
              .then(() => {
                console.log("Signed in with Google!");
                navigation.navigate("NamePage");
              })
              .catch(() => alert("Something went wrong. Please try again."))
          }
        >
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
