import React from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { calculateRectangleArea, resetRectangleArea, dismissKeyboard, showAlertPopup } from "../components/Functions";

export const RectangleArea = () => {
  const [height, setHeight] = React.useState("");
  const [width, setWidth] = React.useState("");
  const [area, setArea] = React.useState(0);

  const handlePress = () => {
    if ((height, width === "")) {
      showAlertPopup(); // ポップアップを表示
    } else {
      const rectangleArea = calculateRectangleArea(height, width);
      setArea(rectangleArea);
      dismissKeyboard();
    }
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
        <TouchableOpacity style={styles.resetButton} onPress={() => resetRectangleArea(setHeight, setWidth, setArea)}>
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
