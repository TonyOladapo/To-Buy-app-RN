import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Touchable from "./CrossPlatform/Touchable";
import { useNavigation } from "@react-navigation/native";

const HomeListItem = ({ item, color }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Touchable
        onPress={() =>
          navigation.navigate("ItemDetails", {
            item,
          })
        }
        delayPressIn={40}
        style={styles.touchable}
      >
        <View style={styles.ic_container}>
          <Text style={{ fontSize: 30 }}>ic</Text>
        </View>

        <View style={[styles.card, { backgroundColor: color }]}>
          <Text>{item.name}</Text>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    backgroundColor: "#ffffff",
    borderRadius: 7,
  },

  touchable: {
    flex: 1,
    flexDirection: "row",
  },

  ic_container: {
    flex: 1,
    borderRadius: 7,
    alignItems: "center",
  },

  card: {
    flex: 5,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeListItem;
