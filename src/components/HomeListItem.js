import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

const HomeListItem = ({ name, color }) => {
  return (
    <TouchableHighlight>
      <View
        style={{ flex: 1, flexDirection: "row", backgroundColor: "#ffffff" }}
      >
        <View
          style={{
            flex: 1,
            height: 150,
            marginVertical: 8,
            alignItems: "center",
            padding: 4,
          }}
        >
          <Text style={{ fontSize: 30 }}>ic</Text>
        </View>
        <View
          style={{
            flex: 5,
            backgroundColor: color,
            height: 150,
            marginVertical: 8,
            padding: 4,
            borderRadius: 7,
            // marginEnd: 16,
          }}
        >
          <Text>{name}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default HomeListItem;
