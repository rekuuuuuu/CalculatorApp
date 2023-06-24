import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { AppBar } from "../components/AppBar";
import { TriangleArea } from "../components/TriangleArea";

export const TriangleAreaScreen = () => {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <TriangleArea></TriangleArea>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8ff"
  }
});
