import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import {
  WrapperAvatar,
  WrapperImg,
  Avatar,
  WrapperPlus,
} from "./AvatarAuthBig.styled";
import AvatarImage from "../../../assets/avatar.jpg";

const AvatarAuthBig = ({ isKeyboardVisible }) => {
  return (
    <WrapperAvatar isKeyboardVisible={isKeyboardVisible}>
      <WrapperImg>
        {isKeyboardVisible && (
          <Avatar source={AvatarImage} resizeMode="cover" />
        )}
      </WrapperImg>

      <WrapperPlus>
        {!isKeyboardVisible ? (
          <Icon name="pluscircleo" size={25} color="#ff6c00" />
        ) : (
          <Icon name="closecircleo" size={25} color="#BDBDBD" />
        )}
      </WrapperPlus>
    </WrapperAvatar>
  );
};

export default AvatarAuthBig;
