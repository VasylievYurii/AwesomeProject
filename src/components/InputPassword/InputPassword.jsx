import React, { useState } from "react";
import {
  InputPasswordWrapper,
  TogglePassword,
  TogglePasswordButton,
} from "./InputPassword.styled";
import InputText from "../InputText/InputText";

const InputPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputPasswordWrapper>
      <InputText
        type="password"
        name="password"
        placeholder="Введіть пароль"
        secureTextEntry={!showPassword}
      />
      <TogglePassword onPress={togglePasswordVisibility}>
        <TogglePasswordButton>
          {showPassword ? "Приховати" : "Показати"}
        </TogglePasswordButton>
      </TogglePassword>
    </InputPasswordWrapper>
  );
};

export default InputPassword;
