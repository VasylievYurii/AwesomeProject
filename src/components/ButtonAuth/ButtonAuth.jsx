import React from "react";
import { TouchableButton, TouchableButtonText } from "./ButtonAuth.styled";
const ButtonAuth = ({ onPress, children }) => {
  return (
    <TouchableButton onPress={onPress}>
      <TouchableButtonText>{children}</TouchableButtonText>
    </TouchableButton>
  );
};

export default ButtonAuth;
