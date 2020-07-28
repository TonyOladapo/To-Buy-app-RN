import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { CrossPlatformIcon } from "./CrossPlatformIcon";

const HeaderAddIcon = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.icon}
      onPress={() => navigation.navigate("CreateItem")}
    >
      <CrossPlatformIcon name="add" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 16,
  },
});

export default HeaderAddIcon;
