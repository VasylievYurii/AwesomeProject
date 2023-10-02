import styled, { css } from "@emotion/native";

export const PhotoWrapper = styled.View`
  width: 100%;
  height: 240px;
  background-color: #e8e8e8;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const Photo = styled.Image``;

export const IconCameraWrapper = styled.TouchableOpacity`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
`;
export const PhotoDescription = styled.Text`
  color: #bdbdbd;
  font-family: "Roboto-Regular";
  font-size: 16px;
  font-style: normal;
  margin-bottom: 32px;
`;
export const TitleInput = styled.TextInput`
  padding-top: 16px;
  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-color: #e8e8e8;
  color: #bdbdbd;
  font-family: "Roboto-Regular";
  font-size: 16px;
  font-style: normal;
`;

export const LocationInputWrapper = styled.View`
  position: relative;
  margin-bottom: 32px;
`;

export const LocationInput = styled.TextInput`
  padding-top: 16px;
  padding-bottom: 15px;
  padding-left: 28px;
  border-bottom-width: 1px;
  border-color: #e8e8e8;
  color: #bdbdbd;
  font-family: "Roboto-Regular";
  font-size: 16px;
  font-style: normal;
`;

export const ButtonPublic = styled.TouchableOpacity`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 32px;
  padding-right: 32px;
  border-radius: 100px;
  background-color: #ff6c00;
`;

export const TouchableButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-family: "Roboto-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const DeleteWrapper = styled.TouchableOpacity`
  align-items: center;
  margin: auto;
  margin-bottom: 34px;
  width: 70px;
  border-radius: 30px;
  background-color: #f6f6f6;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 23px;
  padding-right: 23px;
`;
