import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { calculateTrapezoidArea, resetTrapezoidArea, dismissKeyboard, showAlertPopup } from "./Functions";

export const TrapezoidArea = () => {
  const [base1, setBase1] = useState("");
  const [base2, setBase2] = useState("");
  const [height, setHeight] = useState("");
  const [area, setArea] = useState(0);

  const handlePress = () => {
    if (base1 === "" || base2 === "" || height === "") {
      showAlertPopup(); // ポップアップを表示
    } else {
      const trapezoidArea = calculateTrapezoidArea(base1, base2, height);
      setArea(trapezoidArea);
      dismissKeyboard();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.body}>
        <Image source={require("../assets/台形の面積公式.png")} style={styles.image} />
        <Text style={styles.title}>台形の面積</Text>
        <TextInput style={styles.input} placeholder="上底を入力" value={base1} onChangeText={setBase1} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="下底を入力" value={base2} onChangeText={setBase2} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="高さを入力" value={height} onChangeText={setHeight} keyboardType="numeric" />
        <TouchableOpacity style={styles.calculationButton} onPress={handlePress}>
          <Text style={styles.buttonText}>計算</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={() => resetTrapezoidArea(setBase1, setBase2, setHeight, setArea)}>
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
