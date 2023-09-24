import React, { useState, useEffect } from "react";
import {
  ViewStyled,
  TextStyled,
  ImageBackgroundStyled,
  TextInputStyled,
  ViewFormStyled,
  TouchableButton,
  TouchableButtonText,
  WrapperAvatar,
  WrapperPlus,
  WrapperInput,
  TextLinkWrapper,
  TextLink,
  TogglePassword,
  TogglePasswordButton,
  InputPasswordWrapper,
  Avatar,
} from "./RegistrationScreen.styled";
import BackgroundPicture from "../../img/background.png";
import AvatarImage from "../../../assets/avatar.jpg";
import { Dimensions, Keyboard, Linking } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const imageStyle = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export default function RegistrationScreen() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
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
        <WrapperAvatar isKeyboardVisible={isKeyboardVisible}>
          {isKeyboardVisible && (
            <Avatar source={AvatarImage} resizeMode="cover" />
          )}

          <WrapperPlus>
            {!isKeyboardVisible ? (
              <Icon name="pluscircleo" size={25} color="#ff6c00" />
            ) : (
              <Icon name="closecircleo" size={25} color="#BDBDBD" />
            )}
          </WrapperPlus>
        </WrapperAvatar>
        <TextStyled>Реєстрація</TextStyled>
        <WrapperInput isKeyboardVisible={isKeyboardVisible}>
          <TextInputStyled placeholder="Логін" />
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
              <TouchableButtonText>Зареєструватися</TouchableButtonText>
            </TouchableButton>
            <TextLinkWrapper onPress={handlePress}>
              <TextLink>Вже є акаунт? Увійти</TextLink>
            </TextLinkWrapper>
          </>
        )}
      </ViewFormStyled>
    </ViewStyled>
  );
}
