import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ItemDetails = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={[styles.container, { backgroundColor: item.color }]}>
      <Text>{item.name}</Text>
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

export default ItemDetails;
