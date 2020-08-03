import React from "react";
import { View, StyleSheet } from "react-native";

import ImagePicker from "./ImagePicker";
import TextInput from "./TextInput";

const ItemForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imagePicker}>
        <ImagePicker />
      </View>
      <TextInput placeholder="Item name" />
      <TextInput placeholder="Price" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagePicker: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});

export default ItemForm;
