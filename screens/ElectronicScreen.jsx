import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export const ElectronicScreen = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handlePress = () => {
    try {
      const evalResult = eval(expression);
      setResult(evalResult.toString());
    } catch (error) {
      setResult("エラー");
    }
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  const handleInput = (text) => {
    setExpression(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={expression} onChangeText={handleInput} placeholder="式を入力してください" keyboardType="numeric" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={styles.buttonText}>クリア</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>計算</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  resultContainer: {
    width: "80%",
    height: 80,
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  resultText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  inputContainer: {
    width: "80%",
    height: 40,
    marginBottom: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  },
  input: {
    flex: 1,
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: "row"
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "#467FD3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 10
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});
