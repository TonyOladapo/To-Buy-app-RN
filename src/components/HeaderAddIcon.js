import React from "react";
import { StyleSheet } from "react-native";
import { CrossPlatformIcon } from "./CrossPlatform/CrossPlatformIcon";
import Touchable from "./CrossPlatform/Touchable";

const HeaderAddIcon = ({ navigation }) => {
  return (
    <Touchable
      noFeedback
      style={styles.icon}
      onPress={() => navigation.navigate("CreateItem")}
    >
      <CrossPlatformIcon name="add" size={24} color="black" />
    </Touchable>
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 16,
  },
});

export default HeaderAddIcon;
