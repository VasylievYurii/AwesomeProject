import React from "react";
import {
  ViewFormStyled,
  TextInputStyled,
  WrapperInput,
} from "../../screens/LoginScreen/LoginScreen.styled";
import { Linking } from "react-native";
import InputPassword from "../../components/InputPassword/InputPassword";
import MainText from "../../components/MainText/MainText";
import ButtonAuth from "../ButtonAuth/ButtonAuth";
import TextLink from "../TextLink/TextLink";

const FormLogin = ({ isKeyboardVisible }) => {
  const onSubmit = () => {
    console.log("click");
  };

  const handlePress = () => {
    const url = "#";
    Linking.openURL(url);
  };

  return (
    <ViewFormStyled isKeyboardVisible={isKeyboardVisible}>
      <MainText>Увійти</MainText>
      <WrapperInput isKeyboardVisible={isKeyboardVisible}>
        <TextInputStyled placeholder="Адреса електронної пошти" />
        <InputPassword />
      </WrapperInput>

      {!isKeyboardVisible && (
        <>
          <ButtonAuth onPress={onSubmit}>Увійти</ButtonAuth>
          <TextLink onPress={handlePress}>
            Немає акаунту? Зареєструватися
          </TextLink>
          {/* <TextLinkWrapper onPress={handlePress}>
            <TextLink>Немає акаунту? Зареєструватися</TextLink>
          </TextLinkWrapper> */}
        </>
      )}
    </ViewFormStyled>
  );
};

export default FormLogin;
