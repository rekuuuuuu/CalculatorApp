import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableWithoutFeedback, Keyboard } from "react-native";

export const GPT = () => {
  const [base, setBase] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [area, setArea] = React.useState(0);

  const calculateArea = () => {
    const baseValue = parseFloat(base);
    const heightValue = parseFloat(height);

    if (isNaN(baseValue) || isNaN(heightValue)) {
      setArea(0);
    } else {
      const triangleArea = (baseValue * heightValue) / 2;
      setArea(triangleArea);
    }
  };

  const resetValues = () => {
    setBase("");
    setHeight("");
    setArea(0);
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
        <Button title="Reset" onPress={resetValues} />
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
