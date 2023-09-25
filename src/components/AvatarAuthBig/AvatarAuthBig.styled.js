import styled, { css } from "@emotion/native";

export const WrapperAvatar = styled.View`
  position: absolute;
  top: ${({ isKeyboardVisible }) => (isKeyboardVisible ? "-18%" : "-13%")};
  left: 38%;
  width: 120px;
  height: 120px;
  background-color: #f6f6f6;
  border-radius: 16px;
`;

export const WrapperImg = styled.View`
  overflow: hidden;
  border-radius: 16px;
  width: 120px;
  height: 120px;
`;

export const Avatar = styled.ImageBackground`
  display: block;
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
