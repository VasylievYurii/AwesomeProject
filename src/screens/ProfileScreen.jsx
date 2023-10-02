import React from "react";
import FullScreenWrapper from "../components/FullScreenWrapper/FullScreenWrapper";
import { Text } from "react-native";
import { View } from "react-native";
import Background from "../components/Background/Background";
import BackgroundPicture from "../img/background.png";

const ProfileScreen = () => {
  return (
    <>
      <FullScreenWrapper>
        <View style={{ flex: 1, width: "100%", backgroundColor: "#fff" }}>
          <Background source={BackgroundPicture} />
          <Text>Profile Screen</Text>
        </View>
      </FullScreenWrapper>
    </>
  );
};

export default ProfileScreen;
