import React from "react";
import {
  MainWrapper,
  PhotoWrapper,
  Photo,
  Description,
  BottomDescriptionWrapper,
  ReactionsWrapper,
  CommentsWrapper,
  CommentsNumber,
  LikesWrapper,
  LikesNumber,
  LocationWrapper,
  LocationText,
} from "./PostCard.styled";
import IconLocation from "react-native-vector-icons/SimpleLineIcons";
import IconComments from "react-native-vector-icons/FontAwesome";
import IconLike from "react-native-vector-icons/AntDesign";

const PostCard = ({ item }) => {
  const { title, comments, likes, location, photo } = item;

  let colorComments;
  if (comments > 0) {
    colorComments = "#FF6C00";
  } else {
    colorComments = "#BDBDBD";
  }

  let colorLike;
  if (likes > 0) {
    colorLike = "#FF6C00";
  } else {
    colorLike = "#BDBDBD";
  }

  return (
    <MainWrapper>
      <PhotoWrapper>
        <Photo source={require("../../img/forest.jpg")} resizeMode="cover" />
      </PhotoWrapper>
      <Description>{title}</Description>
      <BottomDescriptionWrapper>
        <ReactionsWrapper>
          <CommentsWrapper>
            <IconComments name="comment" size={26} color={colorComments} />
            <CommentsNumber>{comments}</CommentsNumber>
          </CommentsWrapper>
          <LikesWrapper>
            <IconLike name="like2" size={22} color={colorLike} />
            <LikesNumber>{likes}</LikesNumber>
          </LikesWrapper>
        </ReactionsWrapper>
        <LocationWrapper>
          <IconLocation name="location-pin" size={19} color="#BDBDBD" />
          <LocationText>{location}</LocationText>
        </LocationWrapper>
      </BottomDescriptionWrapper>
    </MainWrapper>
  );
};

export default PostCard;
