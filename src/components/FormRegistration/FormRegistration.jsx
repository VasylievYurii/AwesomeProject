import React from "react";
import ButtonAuth from "../../components/ButtonAuth/ButtonAuth";
import InputPassword from "../../components/InputPassword/InputPassword";
import Icon from "react-native-vector-icons/AntDesign";
import MainText from "../../components/MainText/MainText";
import {
  ViewFormStyled,
  WrapperAvatar,
  Avatar,
  WrapperPlus,
  WrapperInput,
  TextInputStyled,
} from "./FormRegistration.styled";
import AvatarImage from "../../../assets/avatar.jpg";
import TextLink from "../TextLink/TextLink";

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
      <MainText>Реєстрація</MainText>
      <WrapperInput isKeyboardVisible={isKeyboardVisible}>
        <TextInputStyled placeholder="Логін" />
        <TextInputStyled placeholder="Адреса електронної пошти" />
        <InputPassword />
      </WrapperInput>

      {!isKeyboardVisible && (
        <>
          <ButtonAuth onPress={onSubmit}>Зареєструватися</ButtonAuth>
          <TextLink onPress={handlePress}>Вже є акаунт? Увійти</TextLink>
        </>
      )}
    </ViewFormStyled>
  );
};

export default FormRegistration;
