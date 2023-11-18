import { StyleSheet, Text, View } from "react-native";
import React from "react";

export function Interests(props: any) {
  return (
    <View>
      <Text>{props.route.params.header}</Text>
      <Text> Yo </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
