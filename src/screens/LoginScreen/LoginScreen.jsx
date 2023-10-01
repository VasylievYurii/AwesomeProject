import { ViewStyled } from "./LoginScreen.styled";
import BackgroundPicture from "../../img/background.png";
import Background from "../../components/Background/Background";
import FormLogin from "../../components/FormLogin/FormLogin";
import { KeyboardAvoidingView } from "react-native";

export default function LoginScreen({ isKeyboardVisible }) {
  return (
    <>
      <Background source={BackgroundPicture} />
      <KeyboardAvoidingView
        style={{
          flex: 1,
          width: "100%",
        }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <ViewStyled accessibilityIgnoresInvertColors={true}>
          <FormLogin isKeyboardVisible={isKeyboardVisible} />
        </ViewStyled>
      </KeyboardAvoidingView>
    </>
  );
}
