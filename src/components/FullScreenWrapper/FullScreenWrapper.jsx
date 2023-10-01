import { ViewStyled } from "./FullScreenWrapper.styled";
import React from "react";

const FullScreenWrapper = ({ children }) => {
  return (
    <ViewStyled accessibilityIgnoresInvertColors={true}>{children}</ViewStyled>
  );
};

export default FullScreenWrapper;
