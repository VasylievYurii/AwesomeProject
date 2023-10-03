import React from "react";
import FullScreenWrapper from "../components/FullScreenWrapper/FullScreenWrapper";
import { View } from "react-native";
import UserCard from "../components/UserCard/UserCard";
import Posts from "../components/Posts/Posts";

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
            paddingBottom: 60,
          }}
        >
          <UserCard />
          <Posts />
        </View>
      </FullScreenWrapper>
    </>
  );
};

export default PostsScreen;
