import React from "react";
import { StyleSheet, View } from "react-native";
import { CrossPlatformIcon } from "./CrossPlatform/CrossPlatformIcon";
import Touchable from "./CrossPlatform/Touchable";

const HeaderAddIcon = ({ navigation }) => {
  return (
    <Touchable onPress={() => navigation.navigate("CreateItem")}>
      <View style={styles.icon}>
        <CrossPlatformIcon name="add" size={24} color="black" />
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 16,
  },
});

export default HeaderAddIcon;
