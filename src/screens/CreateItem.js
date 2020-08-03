import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";
import ItemForm from "../components/ItemForm";

const CreateItem = () => {
  const headerHeight = useHeaderHeight();

  return (
    <View style={[styles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: headerHeight }}
      >
        <View style={styles.innerContainer}>
          <ItemForm />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  innerContainer: {
    marginHorizontal: 16,
  },
});

export default CreateItem;
