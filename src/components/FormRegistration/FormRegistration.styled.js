import styled, { css } from "@emotion/native";

export const ViewFormStyled = styled.View`
  position: relative;
  align-items: center;
  justify-content: start;
  background-color: white;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  padding: 16px;
  padding-top: 92px;
  width: 100%;
  height: ${({ isKeyboardVisible }) => (isKeyboardVisible ? "auto" : "549px")};
`;

export const WrapperAvatar = styled.View`
  position: absolute;
  top: ${({ isKeyboardVisible }) => (isKeyboardVisible ? "-20%" : "-13%")};
  left: 38%;
  width: 120px;
  height: 120px;
  background-color: #f6f6f6;
  border-radius: 16px;
`;

export const Avatar = styled.ImageBackground`
  width: 100%;
  height: 100%;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const WrapperPlus = styled.TouchableOpacity`
  position: absolute;
  bottom: 12px;
  right: -12px;
  width: 25px;
  height: 25px;
  background-color: #f6f6f6;
  border-radius: 50px;
`;

export const WrapperInput = styled.View`
  width: 100%;
  gap: 16px;
  margin-bottom: ${({ isKeyboardVisible }) =>
    isKeyboardVisible ? "32px" : "43px"};
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
