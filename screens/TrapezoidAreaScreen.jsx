import React from "react";
import { View, StyleSheet } from "react-native";

import { TrapezoidArea } from "../components/TrapezoidArea";

export const TrapezoidAreaScreen = () => {
  return (
    <View style={styles.container}>
      <TrapezoidArea></TrapezoidArea>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8ff"
  }
});
