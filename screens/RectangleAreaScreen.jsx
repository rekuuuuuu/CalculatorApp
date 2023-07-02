import React from "react";
import { View, StyleSheet } from "react-native";

import { RectangleArea } from "../components/RectangleArea";

export const RectangleAreaScreen = () => {
  return (
    <View style={styles.container}>
      <RectangleArea></RectangleArea>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8ff"
  }
});
