import React from "react";
import { View, StyleSheet } from "react-native";

import { EquationList } from "../components/EquationList";

export const EquationListScreen = () => {
  return (
    <View style={styles.container}>
      <EquationList></EquationList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8ff"
  }
});
