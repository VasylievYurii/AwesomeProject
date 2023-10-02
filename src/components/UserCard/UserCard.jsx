import React from "react";
import {
  UserWrapper,
  UserAvatarWrapper,
  Avatar,
  TextWrapper,
  NameText,
  EmailText,
} from "./UserCard.styled";
import AvatarImage from "../../../assets/avatar.jpg";

const UserCard = () => {
  return (
    <UserWrapper>
      <UserAvatarWrapper>
        <Avatar source={AvatarImage} resizeMode="cover" />
      </UserAvatarWrapper>
      <TextWrapper>
        <NameText>Natali Romanova</NameText>
        <EmailText>email@example.com</EmailText>
      </TextWrapper>
    </UserWrapper>
  );
};

export default UserCard;
