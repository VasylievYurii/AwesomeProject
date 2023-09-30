import React, { useState } from "react";
import Toast from "react-native-toast-message";
import ButtonAuth from "../../components/ButtonAuth/ButtonAuth";
import InputPassword from "../../components/InputPassword/InputPassword";
import AvatarAuthBig from "../AvatarAuthBig/AvatarAuthBig";
import MainText from "../../components/MainText/MainText";
import { ViewFormStyled, WrapperInput } from "./FormRegistration.styled";

import TextLink from "../TextLink/TextLink";
import InputText from "../InputText/InputText";
import { ScrollView, Keyboard } from "react-native";
import { validationRegistrationSchema } from "../../schemas/validationRegistrationSchema";

const FormRegistration = ({ isKeyboardVisible }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Welcome! 👋",
    });
  };

  const cleaningForm = () => {
    setLogin("");
    setEmail("");
    setPassword("");
  };

  const onLogin = () => {
    validationRegistrationSchema
      .validate({ login, email, password }, { abortEarly: false })
      .then(() => {
        console.log({ login, email, password });
        showToast();
        cleaningForm();
        Keyboard.dismiss();
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: `${error.errors[0]}`,
        });
      });
  };

  const handlePress = () => {
    const url = "#";
    Linking.openURL(url);
  };
  return (
    <ViewFormStyled isKeyboardVisible={isKeyboardVisible}>
      <AvatarAuthBig isKeyboardVisible={isKeyboardVisible} />
      <MainText>Реєстрація</MainText>
      <ScrollView keyboardShouldPersistTaps="handled">
        <WrapperInput isKeyboardVisible={isKeyboardVisible}>
          <InputText
            type="text"
            name="login"
            value={login}
            onChangeText={setLogin}
            placeholder="Логін"
          />
          <InputText
            type="email"
            name="email"
            value={email}
            onChangeText={setEmail}
            placeholder="Адреса електронної пошти"
          />
          <InputPassword value={password} onChangeText={setPassword} />
        </WrapperInput>
        <ButtonAuth onPress={onLogin}>Зареєструватися</ButtonAuth>
        <TextLink onPress={handlePress}>Вже є акаунт? Увійти</TextLink>
      </ScrollView>
    </ViewFormStyled>
  );
};

export default FormRegistration;
