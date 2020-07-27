import React from "react";
import { Text, View, StyleSheet } from "react-native";

const NoItems = () => {
  return (
    <View style={styles.container}>
      <Text>No items</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NoItems;
