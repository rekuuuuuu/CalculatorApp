import React from "react";
import { View, StyleSheet } from "react-native";

import { PyramidVolume } from "../components/PyramidVolume";

export const PyramidVolumeScreen = () => {
  return (
    <View style={styles.container}>
      <PyramidVolume></PyramidVolume>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8ff"
  }
});
