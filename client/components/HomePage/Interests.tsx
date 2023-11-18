import { StyleSheet, Text, View } from "react-native";
import React from "react";

export function Interests(props: any) {
  return (
    <View>
      <Text>{props.route.params.header}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
