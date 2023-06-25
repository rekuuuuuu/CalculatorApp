import React from "react";
import { View, StyleSheet } from "react-native";

import { AppBar } from "../components/AppBar";
import { RectangleArea } from "../components/RectangleArea";

export const RectangleAreaScreen = () => {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
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
