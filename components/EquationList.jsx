import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const EquationList = () => {
  return (
    <View>
      <View style={styles.equationList}>
        <View style={styles.equationListTitle}>
          <Text style={styles.equationListIcon}>★</Text>
          <Text style={styles.equationListName}>三角形の面積</Text>
        </View>
      </View>

      <View style={styles.equationList}>
        <View style={styles.equationListTitle}>
          <Text style={styles.equationListIcon}>★</Text>
          <Text style={styles.equationListName}>正方形・長方形の面積</Text>
        </View>
      </View>

      <View style={styles.equationList}>
        <View style={styles.equationListTitle}>
          <Text style={styles.equationListIcon}>★</Text>
          <Text style={styles.equationListName}>○○柱の体積</Text>
        </View>
      </View>
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
    fontSize: 18,
    lineHeight: 32,
    fontWeight: "bold",
    marginRight: 10
  },
  equationListName: {
    fontSize: 18,
    lineHeight: 32,
    fontWeight: "bold"
  }
});
