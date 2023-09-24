import { ViewStyled } from "./LoginScreen.styled";
import BackgroundPicture from "../../img/background.png";
import Background from "../../components/Background/Background";
import FormLogin from "../../components/FormLogin/FormLogin";

export default function LoginScreen({ isKeyboardVisible }) {
  return (
    <ViewStyled accessibilityIgnoresInvertColors={true}>
      <Background source={BackgroundPicture} />
      <FormLogin isKeyboardVisible={isKeyboardVisible} />
    </ViewStyled>
  );
}
