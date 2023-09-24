import styled, { css } from "@emotion/native";

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

export const TextStyled = styled.Text`
  color: #212121;
  text-align: center;
  font-family: "Roboto";
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.3px;
  margin-bottom: 33px;
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

export const InputPasswordWrapper = styled.View`
  position: relative;
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
