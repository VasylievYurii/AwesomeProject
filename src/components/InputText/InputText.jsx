import React, { useState } from "react";
import { TextInputStyled } from "./InputText.styled";
import { v4 as uuidv4 } from "uuid";

const InputText = ({
  placeholder,
  type,
  name,
  secureTextEntry,
  value,
  onChangeText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <TextInputStyled
      type={type}
      name={name}
      value={value}
      onChangeText={onChangeText}
      id={uuidv4()}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onFocus={handleFocus}
      onBlur={handleBlur}
      isFocused={isFocused}
    />
  );
};

export default InputText;
