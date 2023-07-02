import React from "react";
import { View, StyleSheet } from "react-native";

import { TriangleVolume } from "../components/TriangleVolume";

export const TriangleVolumeScreen = () => {
  return (
    <View style={styles.container}>
      <TriangleVolume></TriangleVolume>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8ff"
  }
});
