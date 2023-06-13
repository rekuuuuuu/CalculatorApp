import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppBar } from "./components/AppBar";

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
