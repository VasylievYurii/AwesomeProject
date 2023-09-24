import { View, Text } from "react-native";
import React from "react";
import { TextLinkWrapper, TextLinkStyled } from "./TextLink.styled";

const TextLink = ({ onPress, children }) => {
  return (
    <TextLinkWrapper onPress={onPress}>
      <TextLinkStyled>{children}</TextLinkStyled>
    </TextLinkWrapper>
  );
};

export default TextLink;
