import React from "react";
import { ViewStyled } from "./RegistrationScreen.styled";
import BackgroundPicture from "../../img/background.png";
import FormRegistration from "../../components/FormRegistration/FormRegistration";
import Background from "../../components/Background/Background";
import { KeyboardAvoidingView } from "react-native";

export default function RegistrationScreen({ isKeyboardVisible }) {
  return (
    <>
      <Background source={BackgroundPicture} />
      <KeyboardAvoidingView
        style={{
          flex: 1,
          width: "100%",
        }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <ViewStyled accessibilityIgnoresInvertColors={true}>
          <FormRegistration isKeyboardVisible={isKeyboardVisible} />
        </ViewStyled>
      </KeyboardAvoidingView>
    </>
  );
}
