import React from "react";
import { MainWrapper, NameTitle } from "./UserProfile.styled";
import Posts from "../Posts/Posts";
import AvatarAuthBig from "../AvatarAuthBig/AvatarAuthBig";
import Icon from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native";

const UserProfile = () => {
  const onLogOut = () => {
    navigation.navigate("Login");
  };
  return (
    <>
      <MainWrapper>
        <AvatarAuthBig />
        <TouchableOpacity onPress={onLogOut}>
          <Icon
            name="log-out"
            size={24}
            style={{ marginRight: 16 }}
            color="#BDBDBD"
          />
        </TouchableOpacity>
        <NameTitle>Natali Romanova</NameTitle>
        <Posts />
      </MainWrapper>
    </>
  );
};

export default UserProfile;
