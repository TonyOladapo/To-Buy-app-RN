import React, { createRef } from "react";
import { BlurView } from "expo-blur";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { CommonActions } from "@react-navigation/native";

import Home from "./src/screens/Home";
import CreateItem from "./src/screens/CreateItem";
import { CrossPlatformIcon } from "./src/components/CrossPlatform/CrossPlatformIcon";
import Touchable from "./src/components/CrossPlatform/Touchable";
import ItemDetails from "./src/screens/ItemDetails";

const Stack = createStackNavigator();

const Navigator = () => {
  const navigationRef = createRef();

  const goBack = () => {
    navigationRef.current?.dispatch(CommonActions.goBack());
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTransparent: true,
          headerBackground: () => (
            <BlurView
              tint="light"
              intensity={100}
              style={[StyleSheet.absoluteFill]}
            />
          ),
          headerLeft: ({ canGoBack }) => {
            return (
              canGoBack && (
                <Touchable style={styles.ic_back} onPress={goBack}>
                  <CrossPlatformIcon
                    name="arrow-back"
                    size={24}
                    color="black"
                  />
                </Touchable>
              )
            );
          },
          headerStyle: { elevation: 0 },
          cardStyle: { backgroundColor: "#ffffff" },
          headerTitleStyle: { fontSize: 30, fontWeight: "bold" },
        }}
      >
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen
          component={CreateItem}
          name="CreateItem"
          options={{
            title: "Add item",
          }}
        />
        <Stack.Screen component={ItemDetails} name="ItemDetails" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  ic_back: {
    padding: 16,
  },
});

export default Navigator;
