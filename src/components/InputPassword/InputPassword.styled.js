import styled, { css } from "@emotion/native";

export const InputPasswordWrapper = styled.View`
  position: relative;
`;
export const TextInputStyled = styled.TextInput`
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-color: #e8e8e8;
  background-color: #f6f6f6;
  border-radius: 10px;
  &:placeholder {
    padding-left: 16px;
  }
`;
export const TogglePassword = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  top: 25%;
`;

export const TogglePasswordButton = styled.Text`
  color: #1b4371;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  padding-right: 16px;
`;
