// import styled, { css } from "@emotion/native";
import styled from "styled-components/native";
// import styles from "styled-components/native";
// import { View, Text, ImageBackground, TextInput, Button } from "react-native";
export const TextInputStyled = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 1px solid red;
  border-color: #e8e8e8;
  background-color: #f6f6f6;
  border: 1px;
  border-radius: 10px;
`;

export const ViewStyled = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

export const ImageBackgroundStyled = styled.ImageBackground`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const ViewFormStyled = styled.View`
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 16px;
  width: 100%;
  height: 549px;
`;

export const TextStyled = styled.Text``;

export const ButtonStyled = styled.Button`
  /* width: 100%; */
  /* height: 20px; */
`;
