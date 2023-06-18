import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const AppBar = () => {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>Calculator App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appbar: {
    width: "100%",
    height: 104,
    backgroundColor: "#467FD3",
    justifyContent: "flex-end"
  },
  appbarInner: {
    alignItems: "center"
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 25,
    lineHeight: 32,
    color: "#ffffff",
    fontWeight: "bold"
  }
});
