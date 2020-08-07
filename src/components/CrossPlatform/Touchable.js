import React from "react";
import { TouchableHighlight, TouchableOpacity } from "react-native";

const Touchable = ({ highlight, style, onPress, children, delayPressIn }) => {
  return highlight ? (
    <TouchableHighlight
      delayPressIn={delayPressIn}
      style={style}
      onPress={onPress}
    >
      {children}
    </TouchableHighlight>
  ) : (
    <TouchableOpacity
      style={style}
      onPress={onPress}
      delayPressIn={delayPressIn}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;
