import React from "react";
import { View, Text } from "react-native";

const HomeListItem = ({ name, color }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color,
        paddingVertical: 16,
        paddingHorizontal: 8,
      }}
    >
      <Text>{name}</Text>
    </View>
  );
};

export default HomeListItem;
