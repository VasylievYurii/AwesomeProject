import React, { useState, useEffect } from "react";
import { Keyboard } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MainView } from "./App.styled";
import RegistrationScreen from "./src/screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";

export default function App() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <MainView>
      <RegistrationScreen isKeyboardVisible={isKeyboardVisible} />
      {/* <LoginScreen isKeyboardVisible={isKeyboardVisible} /> */}
      <StatusBar style="auto" />
    </MainView>
  );
}
