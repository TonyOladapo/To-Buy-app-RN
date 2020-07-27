import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import HomeListItem from "../components/HomeListItem";
import NoItems from "../components/NoItems";
import { useHeaderHeight } from "@react-navigation/stack";

const Home = ({ navigation, items }) => {
  const headerHeight = useHeaderHeight();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.headerIcon}>
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
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        ListEmptyComponent={() => <NoItems />}
        contentContainerStyle={{ paddingTop: headerHeight }}
        data={items}
        renderItem={({ item }) => (
          <HomeListItem name={item.name} color={item.color} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerIcon: {
    padding: 16,
  },
});

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(Home);
