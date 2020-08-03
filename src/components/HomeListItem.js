import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Touchable from "./CrossPlatform/Touchable";

const HomeListItem = ({ name, color }) => {
  return (
    <Touchable>
      <View style={styles.container}>
        <View style={styles.left_section}>
          <Text style={{ fontSize: 30 }}>ic</Text>
        </View>
        <View style={[styles.card, { backgroundColor: color }]}>
          <Text>{name}</Text>
        </View>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 7,
  },

  card: {
    flex: 5,
    height: 150,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },

  left_section: {
    flex: 1,
    height: 150,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 7,
  },
});

export default HomeListItem;
