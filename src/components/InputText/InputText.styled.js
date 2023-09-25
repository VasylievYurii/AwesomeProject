import styled, { css } from "@emotion/native";

export const TextInputStyled = styled.TextInput`
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-color: #e8e8e8;
  background-color: #f6f6f6;
  border-radius: 10px;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff6c00;
      background-color: #fff;
    `}

  &:placeholder {
    padding-left: 16px;
  }
`;
