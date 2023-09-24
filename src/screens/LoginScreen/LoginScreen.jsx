import React, { useState, useEffect } from "react";
import {
  ViewStyled,
  TextStyled,
  ImageBackgroundStyled,
  TextInputStyled,
  ViewFormStyled,
  TouchableButton,
  TouchableButtonText,
  WrapperInput,
  TextLinkWrapper,
  TextLink,
  TogglePassword,
  TogglePasswordButton,
  InputPasswordWrapper,
} from "./LoginScreen.styled";
import BackgroundPicture from "../../img/background.png";
import { Dimensions, Keyboard, Linking } from "react-native";

const imageStyle = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export let isKeyboardVisibleV = false;

export default function LoginScreen() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
        isKeyboardVisibleV = true;
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
        isKeyboardVisibleV = false;
      }
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const onPressLearnMore = () => {
    console.log("click");
  };

  const handlePress = () => {
    const url = "#";
    Linking.openURL(url);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ViewStyled accessibilityIgnoresInvertColors={true}>
      <ImageBackgroundStyled
        source={BackgroundPicture}
        style={imageStyle}
        resizeMode="cover"
      />

      <ViewFormStyled isKeyboardVisible={isKeyboardVisible}>
        <TextStyled>Увійти</TextStyled>

        <WrapperInput isKeyboardVisible={isKeyboardVisible}>
          <TextInputStyled placeholder="Адреса електронної пошти" />

          <InputPasswordWrapper>
            <TextInputStyled
              placeholder="Введіть пароль"
              secureTextEntry={!showPassword}
            />
            <TogglePassword onPress={togglePasswordVisibility}>
              <TogglePasswordButton>
                {showPassword ? "Приховати" : "Показати"}
              </TogglePasswordButton>
            </TogglePassword>
          </InputPasswordWrapper>
        </WrapperInput>

        {!isKeyboardVisible && (
          <>
            <TouchableButton onPress={onPressLearnMore}>
              <TouchableButtonText>Увійти</TouchableButtonText>
            </TouchableButton>
            <TextLinkWrapper onPress={handlePress}>
              <TextLink>Немає акаунту? Зареєструватися</TextLink>
            </TextLinkWrapper>
          </>
        )}
      </ViewFormStyled>
    </ViewStyled>
  );
}
