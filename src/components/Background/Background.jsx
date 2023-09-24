import { Dimensions } from "react-native";
import React from "react";
import { ImageBackgroundStyled } from "./Background.styled";

const imageStyle = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

const Background = ({ source }) => {
  return (
    <ImageBackgroundStyled
      source={source}
      style={imageStyle}
      resizeMode="cover"
    />
  );
};

export default Background;
