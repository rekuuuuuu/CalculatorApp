import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

export const EquationList = () => {
  const navigation = useNavigation();

  const GoToTriangleArea = () => {
    navigation.navigate("TriangleArea");
  };

  const GoToRectangleArea = () => {
    navigation.navigate("RectangleArea");
  };

  const GoToCircleArea = () => {
    navigation.navigate("CircleArea");
  };

  const GoToTriangleVolume = () => {
    navigation.navigate("TriangleVolume");
  };

  return (
    <View>
      <TouchableOpacity style={styles.equationList} onPress={GoToTriangleArea}>
        <View style={styles.equationListTitle}>
          <MaterialCommunityIcons name="book-open-page-variant-outline" style={styles.equationListIcon} />
          <Text style={styles.equationListName}>三角形の面積</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.equationList} onPress={GoToRectangleArea}>
        <View style={styles.equationListTitle}>
          <MaterialCommunityIcons name="book-open-page-variant-outline" style={styles.equationListIcon} />
          <Text style={styles.equationListName}>正方形・長方形の面積</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.equationList} onPress={GoToCircleArea}>
        <View style={styles.equationListTitle}>
          <MaterialCommunityIcons name="book-open-page-variant-outline" style={styles.equationListIcon} />
          <Text style={styles.equationListName}>円の面積</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.equationList} onPress={GoToTriangleVolume}>
        <View style={styles.equationListTitle}>
          <MaterialCommunityIcons name="book-open-page-variant-outline" style={styles.equationListIcon} />
          <Text style={styles.equationListName}>○○柱の体積</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  equationList: {
    backgroundColor: "#ffffff",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.15)"
  },
  equationListTitle: {
    flexDirection: "row",
    alignItems: "center"
  },
  equationListIcon: {
    fontSize: 25,
    lineHeight: 32,
    fontWeight: "bold",
    marginRight: 15
  },
  equationListName: {
    fontSize: 18,
    lineHeight: 32,
    fontWeight: "bold"
  }
});
