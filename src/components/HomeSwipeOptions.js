import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { CrossPlatformIcon } from "./CrossPlatform/CrossPlatformIcon";

const HomeSwipeOptions = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ flex: 4 }}></View>
      <View style={styles.icon}>
        <CrossPlatformIcon name="trash" size={40} color="white" />
        <Text style={{ color: "white", fontSize: 15 }}>Delete</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    backgroundColor: "#ff4444",
    flex: 1,
    flexDirection: "row",
  },

  icon: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeSwipeOptions;
