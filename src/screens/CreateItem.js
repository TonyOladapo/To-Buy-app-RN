import React, { useState, createRef } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";
import ViewPager from "@react-native-community/viewpager";
import ItemForm from "../components/ItemForm";

const CreateItem = () => {
  const headerHeight = useHeaderHeight();
  const viewPager = createRef();
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <View style={[styles.container, { marginTop: headerHeight }]}>
      <ViewPager
        ref={viewPager}
        style={styles.viewPager}
        initialPage={0}
        // scrollEnabled={false}
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

      {/* <Button
        onPress={(e) => {
          // viewPager.current?.setPage(1);
        }}
        title="Btn"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  viewPager: {
    flex: 1,
    margin: 16,
  },

  pages: {
    backgroundColor: "#eee",
    borderRadius: 20,
    padding: 8,
  },
});

export default CreateItem;
