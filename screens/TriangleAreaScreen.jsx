import React from "react";
import { View, StyleSheet } from "react-native";

import { TriangleArea } from "../components/TriangleArea";

export const TriangleAreaScreen = () => {
  return (
    <View style={styles.container}>
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
