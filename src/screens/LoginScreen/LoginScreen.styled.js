import styled, { css } from "@emotion/native";

export const ViewStyled = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

export const ViewFormStyled = styled.View`
  position: relative;
  align-items: center;
  justify-content: start;
  background-color: white;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  padding: 16px;
  padding-top: 32px;
  width: 100%;
  height: ${({ isKeyboardVisible }) => (isKeyboardVisible ? "auto" : "489px")};
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

export const WrapperInput = styled.View`
  width: 100%;
  gap: 16px;
  margin-bottom: ${({ isKeyboardVisible }) =>
    isKeyboardVisible ? "32px" : "43px"};
`;
