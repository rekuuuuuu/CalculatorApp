import React from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";

export const RectangleArea = () => {
  const [height, setHeight] = React.useState("");
  const [width, setWidth] = React.useState("");
  const [area, setArea] = React.useState(0);

  const calculateArea = () => {
    const heightValue = parseFloat(height);
    const widthValue = parseFloat(width);

    if (isNaN(heightValue) || isNaN(widthValue)) {
      setArea(0);
    } else {
      const rectangleArea = heightValue * widthValue;
      setArea(rectangleArea);
    }
  };

  const resetValues = () => {
    setHeight("");
    setWidth("");
    setArea(0);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handlePress = () => {
    calculateArea();
    dismissKeyboard();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.body}>
        <Image source={require("../assets/長方形・正方形面積公式.png")} style={styles.image} resizeMode="stretch" />
        <Text style={styles.title}>正方形・長方形の面積</Text>
        <TextInput style={styles.input} placeholder="縦の値を入力" value={height} onChangeText={setHeight} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="横の値を入力" value={width} onChangeText={setWidth} keyboardType="numeric" />
        <TouchableOpacity style={styles.calculationButton} onPress={handlePress}>
          <Text style={styles.buttonText}>計算</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={resetValues}>
          <Text style={styles.buttonText}>リセット</Text>
        </TouchableOpacity>
        <Text style={styles.result}>面積: {area}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    padding: 16
  },
  image: {
    width: 300,
    height: 200,
    marginTop: 20,
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
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
  calculationButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#467FD3",
    width: "30%",
    padding: 10,
    marginBottom: 16
  },
  resetButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#467FD3",
    width: "30%",
    padding: 10
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold"
  },
  result: {
    fontSize: 18,
    marginTop: 16,
    fontWeight: "bold"
  }
});
