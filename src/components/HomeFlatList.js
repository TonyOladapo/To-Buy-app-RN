import React from "react";
import { connect } from "react-redux";
import { SwipeListView } from "react-native-swipe-list-view";
import { StyleSheet } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import HomeSwipeOptions from "./HomeSwipeOptions";
import HomeListItem from "./HomeListItem";
import NoItems from "./NoItems";

const HomeFlatList = ({ items }) => {
  const headerHeight = useHeaderHeight();

  return (
    <>
      <SwipeListView
        showsVerticalScrollIndicator={false}
        swipeRowStyle={styles.swipeRow}
        data={items}
        rightOpenValue={-130}
        disableRightSwipe
        swipeToOpenPercent={10}
        ListEmptyComponent={() => <NoItems />}
        contentContainerStyle={{ paddingTop: headerHeight }}
        renderItem={({ item }) => (
          <HomeListItem item={item} color={item.color} />
        )}
        renderHiddenItem={(data, rowMap) => (
          <HomeSwipeOptions data={data.item} rowMap={rowMap} />
        )}
        // onRowDidOpen={(rowKey, rowMap) => {
        //   setTimeout(() => {
        //     rowMap[rowKey].closeRow();
        //   }, 3000);
        // }}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  swipeRow: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(HomeFlatList);
