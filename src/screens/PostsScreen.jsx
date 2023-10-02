import React from "react";
import FullScreenWrapper from "../components/FullScreenWrapper/FullScreenWrapper";
import { View } from "react-native";
import UserCard from "../components/UserCard/UserCard";

const PostsScreen = () => {
  return (
    <>
      <FullScreenWrapper>
        <View
          style={{
            flex: 1,
            gap: 10,
            width: "100%",
            backgroundColor: "#fff",
            paddingTop: 32,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <UserCard />
        </View>
      </FullScreenWrapper>
    </>
  );
};

export default PostsScreen;
