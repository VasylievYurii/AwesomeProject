import React from "react";
import {
  ViewStyled,
  TextStyled,
  ImageBackgroundStyled,
  TextInputStyled,
  ViewFormStyled,
  ButtonStyled,
} from "./RegistrationScreen.styled";
import BackgroundPicture from "../../img/background.png";
import { Dimensions } from "react-native";

function onPressLearnMore() {
  console.log("click");
}

const imageStyle = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export default function RegistrationScreen() {
  return (
    <ViewStyled accessibilityIgnoresInvertColors={true}>
      <ImageBackgroundStyled
        source={BackgroundPicture}
        style={imageStyle}
        resizeMode="cover"
      />
      <ViewFormStyled>
        <TextStyled>Реєстрація</TextStyled>
        <TextInputStyled
        // style={{ borderColor: "#e8e8e8" }}
        />
        <ButtonStyled
          onPress={onPressLearnMore}
          color="#ff6c00"
          title="Зареєструватися"
        />
      </ViewFormStyled>
    </ViewStyled>
  );
}
