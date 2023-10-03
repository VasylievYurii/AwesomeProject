import { View, Text } from "react-native";
import React from "react";
import postsDB from "../../db/posts.json";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import { FlatList } from "react-native";
import PostCard from "../PostCard/PostCard";

const Posts = () => {
  const [posts, setPosts] = useState(postsDB);

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={({ item }) => {
          return <PostCard item={item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Posts;
