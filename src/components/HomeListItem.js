import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

const HomeListItem = ({ name, color }) => {
  return (
    <TouchableHighlight>
      <View style={styles.container}>
        <View style={styles.leftCard}>
          <Text style={{ fontSize: 30 }}>ic</Text>
        </View>
        <View
          style={{
            flex: 5,
            backgroundColor: color,
            height: 150,
            borderRadius: 7,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>{name}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 7,
  },

  leftCard: {
    flex: 1,
    height: 150,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 7,
  },
});

export default HomeListItem;
