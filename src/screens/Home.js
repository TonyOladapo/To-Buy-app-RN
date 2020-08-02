import React, { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import HeaderAddIcon from "../components/HeaderAddIcon";
import HomeFlatList from "../components/HomeFlatList";

const Home = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderAddIcon navigation={navigation} />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <HomeFlatList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
