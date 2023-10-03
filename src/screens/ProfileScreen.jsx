import React from "react";
import { View } from "react-native";
import Background from "../components/Background/Background";
import BackgroundPicture from "../img/background.png";
import UserProfile from "../components/UserProfile/UserProfile";

const ProfileScreen = () => {
  return (
    <>
      <View style={{ flex: 1, width: "100%", backgroundColor: "#fff" }}>
        <Background source={BackgroundPicture} />
        <UserProfile />
      </View>
    </>
  );
};

export default ProfileScreen;
