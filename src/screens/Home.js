import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FlatGrid } from "react-native-super-grid";
import HomeListItem from "../components/HomeListItem";
import NoItems from "../components/NoItems";

const Home = ({ navigation, items }) => {
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
      {items.length > 0 ? (
        <FlatGrid
          style={styles.list}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          itemDimension={130}
          spacing={8}
          data={items}
          renderItem={({ item }) => (
            <HomeListItem name={item.name} color={item.color} />
          )}
        />
      ) : (
        <NoItems />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list: {
    marginHorizontal: 8,
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
