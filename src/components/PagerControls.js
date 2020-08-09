import React from "react";
import { View, StyleSheet } from "react-native";

import Button from "./Button";

const PagerControls = ({ currentPage, viewPager }) => {
  return (
    <View style={styles.pagerControlsContainer}>
      {currentPage >= 1 && (
        <View style={styles.previousButton}>
          <Button
            text="Previous"
            onPress={() => {
              viewPager.current?.setPage(currentPage - 1);
            }}
          />
        </View>
      )}

      {currentPage <= 1 && (
        <View style={styles.nextButton}>
          <Button
            text="Next"
            onPress={() => {
              viewPager.current?.setPage(currentPage + 1);
            }}
          />
        </View>
      )}

      {currentPage === 2 && (
        <View style={styles.doneButton}>
          <Button text="Done" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pagerControlsContainer: {
    flex: 1,
    flexDirection: "row",
  },

  nextButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  previousButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  doneButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PagerControls;
