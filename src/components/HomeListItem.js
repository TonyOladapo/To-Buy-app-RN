import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const HomeListItem = ({ name, color }) => {
  return (
    <TouchableOpacity>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            height: 150,
            padding: 8,
            marginVertical: 16,
            marginLeft: 16,
            marginRight: 8,
            borderRadius: 7,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30 }}>ic</Text>
        </View>
        <View
          style={{
            flex: 5,
            backgroundColor: color,
            height: 150,
            padding: 8,
            marginVertical: 16,
            marginRight: 16,
            borderRadius: 7,
          }}
        >
          <Text>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeListItem;
