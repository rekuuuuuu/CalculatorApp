import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { calculateCircleArea, resetCircleArea, dismissKeyboard, showAlertPopup } from "../components/Functions";

export const CircleArea = () => {
  const [radius, setRadius] = useState("");
  const [area, setArea] = useState(0);

  const handlePress = () => {
    if (radius === "") {
      showAlertPopup(); // ポップアップを表示
    } else {
      const circleArea = calculateCircleArea(radius);
      setArea(circleArea);
      dismissKeyboard();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.body}>
        <Image source={require("../assets/円の面積公式.png")} style={styles.image} />
        <Text style={styles.title}>円の面積</Text>
        <TextInput style={styles.input} placeholder="半径を入力" value={radius} onChangeText={setRadius} keyboardType="numeric" />
        <TouchableOpacity style={styles.calculationButton} onPress={handlePress}>
          <Text style={styles.buttonText}>計算</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={() => resetCircleArea(setRadius, setArea)}>
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
