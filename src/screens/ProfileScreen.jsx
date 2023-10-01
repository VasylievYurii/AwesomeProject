import React from "react";
import BackgroundPicture from "../img/background.png";
import Background from "../components/Background/Background";
import FullScreenWrapper from "../components/FullScreenWrapper/FullScreenWrapper";
import { Text } from "react-native";

const ProfileScreen = ({ isKeyboardVisible }) => {
  return (
    <>
      <Background source={BackgroundPicture} />
      <FullScreenWrapper>
        <Text>Profile Screen</Text>
      </FullScreenWrapper>
    </>
  );
};

export default ProfileScreen;
