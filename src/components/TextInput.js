import React from "react";
import { useInput } from "../hooks/useInput";
import { useHeaderHeight } from "@react-navigation/stack";
import { View, TextInput } from "react-native";

const Input = () => {
  const headerHeight = useHeaderHeight();
  const [text, handleInputChange, resetInput] = useInput("Text");

  return (
    <View style={{ flex: 1, padding: headerHeight }}>
      <TextInput
        value={text}
        onChangeText={handleInputChange}
        style={{ borderColor: "red", borderWidth: 2 }}
      />
    </View>
  );
};

export default Input;
