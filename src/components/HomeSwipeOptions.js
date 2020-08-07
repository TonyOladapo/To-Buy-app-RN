import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { CrossPlatformIcon } from "./CrossPlatform/CrossPlatformIcon";
import { connect } from "react-redux";
import { deleteItem } from "../redux/actions/itemActions";

const HomeSwipeOptions = ({ data, deleteItem }) => {
  const handleDelete = () => {
    deleteItem(data.id);
  };

  return (
    <TouchableHighlight onPress={handleDelete} style={styles.touchable}>
      <View style={styles.container}>
        <View style={{ flex: 4 }}></View>
        <View style={styles.ic_container}>
          <CrossPlatformIcon name="trash" size={40} color="white" />
          <Text style={styles.text}>Delete</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    borderRadius: 7,
  },

  container: {
    flex: 1,
    backgroundColor: "#ff4444",
    borderRadius: 7,
    flexDirection: "row",
  },

  ic_container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#ffffff",
    fontSize: 15,
  },
});

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = {
  deleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeSwipeOptions);
