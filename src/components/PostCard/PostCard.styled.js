import styled, { css } from "@emotion/native";

export const MainWrapper = styled.View`
  margin-top: 32px;
  margin-bottom: 32px;
`;
export const PhotoWrapper = styled.View`
  width: 100%;
  height: 240px;
  background-color: #f6f6f6;
  border-radius: 8px;
  margin-bottom: 4px;
`;
export const Photo = styled.Image`
  width: 100%;
  height: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
export const Description = styled.Text`
  color: #212121;
  font-family: "Roboto-Bold";
  font-size: 16px;
  margin-bottom: 8px;
`;
export const BottomDescriptionWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ReactionsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
export const CommentsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;
export const CommentsNumber = styled.Text`
  color: #212121;
  font-family: "Roboto-Regular";
  font-size: 16px;
`;
export const LikesWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;
export const LikesNumber = styled.Text`
  color: #212121;
  font-family: "Roboto-Regular";
  font-size: 16px;
`;
export const LocationWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;
export const LocationText = styled.Text`
  color: #212121;
  font-family: "Roboto-Regular";
  font-size: 16px;
  text-decoration-line: underline;
`;
