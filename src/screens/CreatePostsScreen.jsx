import React from "react";
import FullScreenWrapper from "../components/FullScreenWrapper/FullScreenWrapper";
import { Text } from "react-native";
import { View } from "react-native";

const CreatePostsScreen = () => {
  return (
    <>
      <FullScreenWrapper>
        <View style={{ flex: 1, width: "100%", backgroundColor: "#fff" }}>
          <Text>Create Posts Screen</Text>
        </View>
      </FullScreenWrapper>
    </>
  );
};

export default CreatePostsScreen;
