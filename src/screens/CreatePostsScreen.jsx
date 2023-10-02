import React from "react";
import { View } from "react-native";
import CreatePost from "../components/CreatePost/CreatePost";

const CreatePostsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <CreatePost />
    </View>
  );
};

export default CreatePostsScreen;
