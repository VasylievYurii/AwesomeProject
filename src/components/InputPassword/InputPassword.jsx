import React, { useState } from "react";
import {
  InputPasswordWrapper,
  TextInputStyled,
  TogglePassword,
  TogglePasswordButton,
} from "./InputPassword.styled";
const InputPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputPasswordWrapper>
      <TextInputStyled
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
