import React, { useState } from "react";
import Toast from "react-native-toast-message";
import { ViewFormStyled, WrapperInput } from "../FormLogin/FormLogin.styled.js";
import { Linking } from "react-native";
import InputPassword from "../../components/InputPassword/InputPassword";
import MainText from "../../components/MainText/MainText";
import ButtonAuth from "../ButtonAuth/ButtonAuth";
import TextLink from "../TextLink/TextLink";
import InputText from "../InputText/InputText";
import { ScrollView, Keyboard } from "react-native";
import { validationLoginSchema } from "../../schemas/validationLoginSchema";

const FormLogin = ({ isKeyboardVisible }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Welcome! 👋",
    });
  };

  const cleaningForm = () => {
    setEmail("");
    setPassword("");
  };

  const onLogin = () => {
    validationLoginSchema
      .validate({ email, password }, { abortEarly: false })
      .then(() => {
        console.log({ email, password });
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
      <MainText>Увійти</MainText>
      <ScrollView style={{ width: "100%" }} keyboardShouldPersistTaps="handled">
        <WrapperInput isKeyboardVisible={isKeyboardVisible}>
          <InputText
            type="email"
            name="email"
            value={email}
            onChangeText={setEmail}
            placeholder="Адреса електронної пошти"
          />
          <InputPassword value={password} onChangeText={setPassword} />
        </WrapperInput>
        <ButtonAuth onPress={onLogin}>Увійти</ButtonAuth>
        <TextLink onPress={handlePress}>
          Немає акаунту? Зареєструватися
        </TextLink>
      </ScrollView>
    </ViewFormStyled>
  );
};

export default FormLogin;
