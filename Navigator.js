import React from "react";
import { BlurView } from "expo-blur";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

import Home from "./src/screens/Home";
import CreateItem from "./src/screens/CreateItem";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTransparent: true,
          headerBackground: () => (
            <BlurView
              tint="light"
              intensity={100}
              style={StyleSheet.absoluteFill}
            />
          ),
          headerStyle: { elevation: 0 },
          cardStyle: { backgroundColor: "#ffffff" },
        }}
      >
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={CreateItem} name="CreateItem" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
