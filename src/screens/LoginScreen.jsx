import React from "react";
import BackgroundPicture from "../img/background.png";
import Background from "../components/Background/Background";
import FormLogin from "../components/FormLogin/FormLogin";
import FullScreenWrapper from "../components/FullScreenWrapper/FullScreenWrapper";

const LoginScreen = ({ isKeyboardVisible }) => {
  return (
    <>
      <Background source={BackgroundPicture} />
      <FullScreenWrapper>
        <FormLogin isKeyboardVisible={isKeyboardVisible} />
      </FullScreenWrapper>
    </>
  );
};
export default LoginScreen;
