import React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView, Image } from "react-native";

import { AppBar } from "../components/AppBar";

export const EquationDetailScreen = () => {
  const [number, onChangeNumber] = React.useState("");

  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <View style={styles.equationHeader}>
        <Text style={styles.equationTitle}>三角形の面積</Text>
        <Text style={styles.equationSubTitle}>底辺 × 高さ ÷ 2</Text>
      </View>
      <SafeAreaView style={styles.equationBody}>
        {/* <Image source={{ uri: "../assets/三角形面積公式.png" }} style={{ width: 40, height: 40 }}></Image> */}
        <Text style={styles.equationText}>底辺</Text>
        <TextInput style={styles.equationInput} onChangeText={onChangeNumber} value={number} placeholder="底辺を入力" keyboardType="numeric"></TextInput>
        <Text style={styles.equationText}>高さ</Text>
        <TextInput style={styles.equationInput} onChangeText={onChangeNumber} value={number} placeholder="高さを入力" keyboardType="numeric"></TextInput>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  equationHeader: {
    backgroundColor: "#467FD3",
    height: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  equationTitle: {
    fontSize: 20,
    lineHeight: 32,
    color: "#ffffff",
    fontWeight: "bold"
  },
  equationSubTitle: {
    fontSize: 15,
    lineHeight: 40,
    color: "#ffffff",
    fontWeight: "bold"
  },
  equationBody: {
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  equationText: {
    fontSize: 16,
    lineHeight: 24
  },
  equationInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});
