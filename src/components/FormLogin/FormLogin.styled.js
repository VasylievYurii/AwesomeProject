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

export const TouchableButton = styled.TouchableOpacity`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 32px;
  padding-right: 32px;
  border-radius: 100px;
  background-color: #ff6c00;
`;

export const TouchableButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-family: "Roboto";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const WrapperInput = styled.View`
  width: 100%;
  gap: 16px;
  margin-bottom: ${({ isKeyboardVisible }) =>
    isKeyboardVisible ? "32px" : "43px"};
`;

export const TextLinkWrapper = styled.TouchableOpacity``;

export const TextLink = styled.Text`
  text-decoration: underline;
  color: #1b4371;
  text-align: center;
  font-family: "Roboto";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin-top: 16px;
`;
