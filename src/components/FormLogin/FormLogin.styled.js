import styled, { css } from "@emotion/native";

export const ViewFormStyled = styled.View`
  position: relative;
  background-color: white;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  padding: 16px;
  padding-top: 32px;
  width: 100%;
  height: ${({ isKeyboardVisible }) => (isKeyboardVisible ? "auto" : "489px")};
  padding-bottom: ${({ isKeyboardVisible }) =>
    isKeyboardVisible ? "-220px" : "8px"};
`;

export const WrapperInput = styled.View`
  width: 100%;
  gap: 16px;
  margin-bottom: ${({ isKeyboardVisible }) =>
    isKeyboardVisible ? "32px" : "43px"};
`;
