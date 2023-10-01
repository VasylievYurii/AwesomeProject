import React from "react";
import BackgroundPicture from "../img/background.png";
import FormRegistration from "../components/FormRegistration/FormRegistration";
import Background from "../components/Background/Background";
import FullScreenWrapper from "../components/FullScreenWrapper/FullScreenWrapper";

export default function RegistrationScreen({ isKeyboardVisible }) {
  return (
    <>
      <Background source={BackgroundPicture} />
      <FullScreenWrapper>
        <FormRegistration isKeyboardVisible={isKeyboardVisible} />
      </FullScreenWrapper>
    </>
  );
}
