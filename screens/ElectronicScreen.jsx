import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

export const ElectronicScreen = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleCalculate = () => {
    try {
      const evalResult = eval(expression);
      setResult(evalResult.toString());
    } catch (error) {
      setResult("エラー");
    }
  };

  const handleDelete = () => {
    setExpression((prevExpression) => prevExpression.slice(0, -1));
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.expressionText}>{expression}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("7")}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("8")}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("9")}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("+")}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("4")}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("5")}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("6")}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("-")}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("1")}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("2")}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("3")}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("*")}>
            <Text style={styles.buttonText}>×</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("0")}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(".")}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("%")}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("÷")}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.bottomButton} onPress={handleClear}>
            <Text style={styles.bottomButtonText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress={handleDelete}>
            <Text style={styles.bottomButtonText}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
            <Text style={styles.calculateButtonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5"
  },
  resultContainer: {
    width: width * 0.8,
    height: 200,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff"
  },
  expressionText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  resultText: {
    fontSize: 40,
    fontWeight: "bold"
  },
  buttonContainer: {
    width: width * 0.8,
    marginBottom: 20
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 5,
    height: 60
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  bottomButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    height: 60
  },
  bottomButtonText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  calculateButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#467FD3",
    marginHorizontal: 5,
    height: 60
  },
  calculateButtonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff"
  }
});
