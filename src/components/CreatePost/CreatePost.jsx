import React from "react";
import {
  PhotoWrapper,
  Photo,
  IconCameraWrapper,
  PhotoDescription,
  TitleInput,
  LocationInputWrapper,
  LocationInput,
  ButtonPublic,
  TouchableButtonText,
  DeleteWrapper,
} from "./CreatePost.styled";
import IconCamera from "react-native-vector-icons/FontAwesome";
import IconDelete from "react-native-vector-icons/AntDesign";
import IconLocation from "react-native-vector-icons/SimpleLineIcons";

const CreatePost = () => {
  return (
    <>
      <PhotoWrapper>
        <Photo />
        <IconCameraWrapper>
          <IconCamera name="camera" size={24} color="#BDBDBD" />
        </IconCameraWrapper>
      </PhotoWrapper>
      <PhotoDescription>Завантажте фото</PhotoDescription>
      <TitleInput name="title" placeholder="Назва..." />
      <LocationInputWrapper>
        <LocationInput name="location" placeholder="Місцевість..." />
        <IconLocation
          name="location-pin"
          size={24}
          color="#BDBDBD"
          style={{ position: "absolute", top: "30%" }}
        />
      </LocationInputWrapper>
      <ButtonPublic>
        <TouchableButtonText>Опублікувати</TouchableButtonText>
      </ButtonPublic>
      <DeleteWrapper>
        <IconDelete name="delete" size={24} color="#BDBDBD" />
      </DeleteWrapper>
    </>
  );
};

export default CreatePost;
