import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={style.headerIcon}>
          {Platform.OS === "ios" ? (
            <Ionicons name="ios-add" size={24} color="black" />
          ) : (
            <MaterialIcons name="add" size={24} color="black" />
          )}
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={style.container}>
      <Text>Home</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  headerIcon: {
    padding: 16,
  },
});

export default Home;
