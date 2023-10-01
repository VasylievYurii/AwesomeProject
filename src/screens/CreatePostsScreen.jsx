import React from "react";
import BackgroundPicture from "../img/background.png";
import Background from "../components/Background/Background";
import FullScreenWrapper from "../components/FullScreenWrapper/FullScreenWrapper";
import { Text } from "react-native";

const CreatePostsScreen = ({ isKeyboardVisible }) => {
  return (
    <>
      <Background source={BackgroundPicture} />
      <FullScreenWrapper>
        <Text>Create Posts Screen</Text>
      </FullScreenWrapper>
    </>
  );
};

export default CreatePostsScreen;
