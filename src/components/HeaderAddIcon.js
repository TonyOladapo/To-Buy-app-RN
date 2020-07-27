import React from "react";
import { TouchableOpacity, Platform, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const HeaderAddIcon = () => {
  return (
    <TouchableOpacity style={styles.icon}>
      {Platform.OS === "ios" ? (
        <Ionicons name="ios-add" size={24} color="black" />
      ) : (
        <MaterialIcons name="add" size={24} color="black" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 16,
  },
});

export default HeaderAddIcon;
