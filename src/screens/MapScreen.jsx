import React from "react";
import BackgroundPicture from "../img/background.png";
import Background from "../components/Background/Background";
import FullScreenWrapper from "../components/FullScreenWrapper/FullScreenWrapper";
import { Text } from "react-native";

const MapScreen = ({ isKeyboardVisible }) => {
  return (
    <>
      <Background source={BackgroundPicture} />
      <FullScreenWrapper>
        <Text>Map Screen</Text>
      </FullScreenWrapper>
    </>
  );
};

export default MapScreen;
