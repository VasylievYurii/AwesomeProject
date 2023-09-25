import React from "react";
import ButtonAuth from "../../components/ButtonAuth/ButtonAuth";
import InputPassword from "../../components/InputPassword/InputPassword";
import AvatarAuthBig from "../AvatarAuthBig/AvatarAuthBig";
import MainText from "../../components/MainText/MainText";
import { ViewFormStyled, WrapperInput } from "./FormRegistration.styled";

import TextLink from "../TextLink/TextLink";
import InputText from "../InputText/InputText";
import { ScrollView } from "react-native";

const FormRegistration = ({ isKeyboardVisible }) => {
  const onSubmit = () => {
    console.log("click");
  };

  const handlePress = () => {
    const url = "#";
    Linking.openURL(url);
  };
  return (
    <ViewFormStyled isKeyboardVisible={isKeyboardVisible}>
      <AvatarAuthBig isKeyboardVisible={isKeyboardVisible} />
      <MainText>Реєстрація</MainText>
      <ScrollView>
        <WrapperInput isKeyboardVisible={isKeyboardVisible}>
          <InputText type="text" name="login" placeholder="Логін" />
          <InputText
            type="email"
            name="email"
            placeholder="Адреса електронної пошти"
          />
          <InputPassword />
        </WrapperInput>
        <ButtonAuth onPress={onSubmit}>Зареєструватися</ButtonAuth>
        <TextLink onPress={handlePress}>Вже є акаунт? Увійти</TextLink>
      </ScrollView>
    </ViewFormStyled>
  );
};

export default FormRegistration;
