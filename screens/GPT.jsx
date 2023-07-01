import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import { calculateTriangleArea, resetValues } from "../components/Functions";

export const GPT = () => {
  const [base, setBase] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [area, setArea] = React.useState(0);

  const calculateArea = () => {
    const triangleArea = calculateTriangleArea(base, height);
    setArea(triangleArea);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Image source={require("../assets/三角形面積公式.png")} style={styles.image} />
        <Text style={styles.heading}>Triangle Area Calculator</Text>
        <TextInput style={styles.input} placeholder="Enter base" value={base} onChangeText={setBase} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Enter height" value={height} onChangeText={setHeight} keyboardType="numeric" />
        <Button title="Calculate" onPress={calculateArea} />
        <Text style={styles.result}>Area: {area}</Text>
        <Button title="Reset" onPress={() => resetValues(setBase, setHeight, setArea)} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8
  },
  result: {
    fontSize: 18,
    marginTop: 16
  }
});
