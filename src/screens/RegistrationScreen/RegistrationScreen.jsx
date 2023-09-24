import React from "react";
import { ViewStyled } from "./RegistrationScreen.styled";
import BackgroundPicture from "../../img/background.png";
import FormRegistration from "../../components/FormRegistration/FormRegistration";
import Background from "../../components/Background/Background";

export default function RegistrationScreen({ isKeyboardVisible }) {
  return (
    <ViewStyled accessibilityIgnoresInvertColors={true}>
      <Background source={BackgroundPicture} />
      <FormRegistration isKeyboardVisible={isKeyboardVisible} />
    </ViewStyled>
  );
}
