import React from "react";
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Platform,
  View,
} from "react-native";

const Touchable = ({ highlight, noFeedback, children, onPress, style }) => {
  return Platform.OS === "android" ? (
    //android
    noFeedback ? (
      <View style={style}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View>{children}</View>
        </TouchableWithoutFeedback>
      </View>
    ) : (
      <View style={style}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple("#4d4d4d", true)}
          onPress={onPress}
        >
          <View>{children}</View>
        </TouchableNativeFeedback>
      </View>
    )
  ) : //ios
  highlight ? (
    <TouchableHighlight style={style} onPress={onPress}>
      {children}
    </TouchableHighlight>
  ) : (
    <TouchableOpacity style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;
