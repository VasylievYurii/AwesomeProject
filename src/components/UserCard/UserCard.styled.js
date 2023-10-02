import styled, { css } from "@emotion/native";

export const UserWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const UserAvatarWrapper = styled.View`
  overflow: hidden;
  border-radius: 16px;
  width: 60px;
  height: 60px;
`;

export const Avatar = styled.ImageBackground`
  display: block;
  width: 100%;
  height: 100%;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;
export const TextWrapper = styled.View``;
export const NameText = styled.Text`
  color: #212121;
  font-family: "Roboto-Bold";
  font-size: 13px;
  font-style: normal;
`;
export const EmailText = styled.Text`
  color: rgba(33, 33, 33, 0.8);
  font-family: "Roboto-Regular";
  font-size: 11px;
  font-style: normal;
`;
