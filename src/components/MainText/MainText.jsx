import React from "react";
import { TextStyled } from "./MainText.styled";
const MainText = ({ children }) => {
  return <TextStyled>{children}</TextStyled>;
};

export default MainText;
