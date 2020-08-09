import React from "react";
import { View, StyleSheet } from "react-native";
import ViewPager from "@react-native-community/viewpager";

import ItemForm from "./ItemForm";

const CreateViewPager = ({ viewPager, setCurrentPage }) => {
  return (
    <ViewPager
      ref={viewPager}
      style={styles.viewPager}
      initialPage={0}
      scrollEnabled={false}
      pageMargin={16}
      onPageSelected={(page) => {
        setCurrentPage(page.nativeEvent.position);
      }}
    >
      <View key="1" style={styles.pages}>
        <ItemForm />
      </View>
      <View key="2" style={styles.pages}></View>
      <View key="3" style={styles.pages}></View>
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 5,
    margin: 16,
  },

  pages: {
    backgroundColor: "#eee",
    borderRadius: 20,
    padding: 8,
  },
});

export default CreateViewPager;
