import React from "react";
import Touchable from "./CrossPlatform/Touchable";
import { View, Text, StyleSheet } from "react-native";

const Button = ({ text, onPress }) => {
  return (
    <Touchable onPress={onPress} style={styles.container}>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },

  text: {
    fontSize: 20,
  },
});

export default Button;
