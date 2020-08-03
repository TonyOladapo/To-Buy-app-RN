import React from "react";
import { useInput } from "../hooks/useInput";
import { View, TextInput, StyleSheet, Text } from "react-native";

const Input = ({ placeholder }) => {
  const [text, handleInputChange, resetInput] = useInput();

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={handleInputChange}
        style={styles.textInput}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    padding: 8,
    borderRadius: 7,
    backgroundColor: "#eee",
    fontSize: 20,
  },
});

export default Input;
