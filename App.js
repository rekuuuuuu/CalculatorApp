import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppBar } from "./components/AppBar";
import { EquationList } from "./components/EquationList";

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <EquationList></EquationList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8ff"
  }
});
