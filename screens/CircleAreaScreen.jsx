import React from "react";
import { View, StyleSheet } from "react-native";

import { CircleArea } from "../components/CircleArea";

export const CircleAreaScreen = () => {
  return (
    <View style={styles.container}>
      <CircleArea></CircleArea>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8ff"
  }
});
