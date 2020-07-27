import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import HomeListItem from "../components/HomeListItem";
import NoItems from "../components/NoItems";
import { useHeaderHeight } from "@react-navigation/stack";
import { SwipeListView } from "react-native-swipe-list-view";
import HomeSwipeOptions from "../components/HomeSwipeOptions";
import HeaderAddIcon from "../components/HeaderAddIcon";

const Home = ({ navigation, items }) => {
  const headerHeight = useHeaderHeight();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderAddIcon />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <SwipeListView
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        data={items}
        friction={10}
        onLeftAction={() => console.log("left")}
        onRightAction={() => console.log("right")}
        renderItem={({ item }) => (
          <HomeListItem name={item.name} color={item.color} />
        )}
        renderHiddenItem={(data, rowMap) => (
          <HomeSwipeOptions data={data} rowMap={rowMap} />
        )}
        onRowOpen={(rowKey, rowMap) => {
          setTimeout(() => {
            rowMap[rowKey].closeRow();
          }, 3000);
        }}
        leftOpenValue={150}
        rightOpenValue={-150}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        ListEmptyComponent={() => <NoItems />}
        contentContainerStyle={{ paddingTop: headerHeight }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  flatList: {
    marginEnd: 16,
  },
});

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(Home);
