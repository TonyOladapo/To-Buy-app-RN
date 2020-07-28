import React, { useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import HomeListItem from "../components/HomeListItem";
import NoItems from "../components/NoItems";
import { useHeaderHeight } from "@react-navigation/stack";
import { SwipeListView } from "react-native-swipe-list-view";
import HomeSwipeOptions from "../components/HomeSwipeOptions";
import HeaderAddIcon from "../components/HeaderAddIcon";

const Home = ({ navigation, items }) => {
  const headerHeight = useHeaderHeight();
  const [swipeOptionPressed, setSwipeOptionPressed] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderAddIcon navigation={navigation} />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <SwipeListView
        showsVerticalScrollIndicator={false}
        swipeRowStyle={styles.swipeRow}
        data={items}
        rightOpenValue={-150}
        disableRightSwipe
        ListEmptyComponent={() => <NoItems />}
        contentContainerStyle={{ paddingTop: headerHeight }}
        renderItem={({ item }) => (
          <HomeListItem name={item.name} color={item.color} />
        )}
        renderHiddenItem={(data, rowMap) => (
          <HomeSwipeOptions data={data} rowMap={rowMap} />
        )}
        onRowOpen={(rowKey, rowMap) => {
          !swipeOptionPressed &&
            setTimeout(() => {
              rowMap[rowKey].closeRow();
            }, 3000);
        }}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  swipeRow: {
    flex: 1,
    margin: 8,
    borderRadius: 7,
  },
});

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(Home);
