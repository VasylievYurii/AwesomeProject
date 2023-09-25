import React from "react";
import {
  ViewFormStyled,
  WrapperInput,
} from "../../screens/LoginScreen/LoginScreen.styled";
import { Linking } from "react-native";
import InputPassword from "../../components/InputPassword/InputPassword";
import MainText from "../../components/MainText/MainText";
import ButtonAuth from "../ButtonAuth/ButtonAuth";
import TextLink from "../TextLink/TextLink";
import InputText from "../InputText/InputText";
import { ScrollView } from "react-native";

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
      <ScrollView style={{ width: "100%" }}>
        <WrapperInput isKeyboardVisible={isKeyboardVisible}>
          <InputText
            type="email"
            name="email"
            placeholder="Адреса електронної пошти"
          />
          <InputPassword />
        </WrapperInput>
        <ButtonAuth onPress={onSubmit}>Увійти</ButtonAuth>
        <TextLink onPress={handlePress}>
          Немає акаунту? Зареєструватися
        </TextLink>
      </ScrollView>
    </ViewFormStyled>
  );
};

export default FormLogin;
