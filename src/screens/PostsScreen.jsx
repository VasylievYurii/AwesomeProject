import React from "react";
import BackgroundPicture from "../img/background.png";
import Background from "../components/Background/Background";
import FullScreenWrapper from "../components/FullScreenWrapper/FullScreenWrapper";
import { Text } from "react-native";

const PostsScreen = ({ isKeyboardVisible }) => {
  return (
    <>
      <Background source={BackgroundPicture} />
      <FullScreenWrapper>
        <Text>Posts Screen</Text>
      </FullScreenWrapper>
    </>
  );
};

export default PostsScreen;
