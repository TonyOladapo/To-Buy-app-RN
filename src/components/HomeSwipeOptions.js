import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeSwipeOptions = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    backgroundColor: "#ff4444",
    flex: 1,
  },
});

export default HomeSwipeOptions;
