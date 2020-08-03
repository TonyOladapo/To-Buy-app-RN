import React, { useState, useEffect } from "react";
import * as Picker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

import Touchable from "./CrossPlatform/Touchable";
import { Image, StyleSheet } from "react-native";

const ImagePicker = () => {
  const [itemImage, setItemImage] = useState();

  const getPermission = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await Picker.launchImageLibraryAsync({
        mediaTypes: Picker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setItemImage(result.uri);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPermission();
  });

  return (
    <Touchable style={styles.imagePicker} onPress={_pickImage}>
      {itemImage ? (
        <Image
          resizeMethod="auto"
          resizeMode="cover"
          source={{ uri: itemImage }}
          style={styles.image}
        />
      ) : (
        <Image
          source={require("../../assets/splash.png")}
          style={styles.image}
        />
      )}
    </Touchable>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    borderRadius: 100,
    backgroundColor: "#e0e0e0",
    width: 100,
    height: 100,
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
});

export default ImagePicker;
