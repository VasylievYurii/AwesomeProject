import React from "react";
import FullScreenWrapper from "../components/FullScreenWrapper/FullScreenWrapper";
import { Text } from "react-native";
import { View } from "react-native";

const ProfileScreen = () => {
  return (
    <>
      <FullScreenWrapper>
        <View style={{ flex: 1, width: "100%", backgroundColor: "#fff" }}>
          <Text>Profile Screen</Text>
        </View>
      </FullScreenWrapper>
    </>
  );
};

export default ProfileScreen;
