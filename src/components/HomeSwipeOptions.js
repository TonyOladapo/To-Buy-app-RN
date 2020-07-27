import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeSwipeOptions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text>Left</Text>
      </View>

      <View style={styles.rightSection}>
        <Text>Right</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 150,
    marginVertical: 8,
  },

  leftSection: {
    flex: 1,
    backgroundColor: "#00C851",
    justifyContent: "center",
  },

  rightSection: {
    flex: 1,
    backgroundColor: "#ff4444",
    justifyContent: "center",
  },
});

export default HomeSwipeOptions;
