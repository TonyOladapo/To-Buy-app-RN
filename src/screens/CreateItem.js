import React, { useState, createRef } from "react";
import { View, StyleSheet } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import PagerControls from "../components/PagerControls";
import CreateViewPager from "../components/CreateViewPager";

const CreateItem = () => {
  const headerHeight = useHeaderHeight();
  const viewPager = createRef();
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <View style={[styles.container, { marginTop: headerHeight }]}>
      <CreateViewPager viewPager={viewPager} setCurrentPage={setCurrentPage} />
      <PagerControls currentPage={currentPage} viewPager={viewPager} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CreateItem;
