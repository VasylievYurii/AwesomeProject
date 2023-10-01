import React, { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { MainView } from "./App.styled";
import RegistrationScreen from "./src/screens/RegistrationScreen.jsx";
import LoginScreen from "./src/screens/LoginScreen.jsx";
import {
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Entypo from "@expo/vector-icons/Entypo";
import Toast from "react-native-toast-message";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        setAppIsReady(false);
        await Font.loadAsync(Entypo.font);
        await new Promise((resolve) => setTimeout(resolve, 1500));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

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

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <MainView onLayout={onLayoutRootView}>
          <KeyboardAvoidingView
            style={{
              flex: 1,
              width: "100%",
            }}
            behavior={Platform.OS === "ios" ? "padding" : null}
          >
            {/* <RegistrationScreen isKeyboardVisible={isKeyboardVisible} /> */}
            <LoginScreen isKeyboardVisible={isKeyboardVisible} />
            <StatusBar style="auto" />
          </KeyboardAvoidingView>
        </MainView>
      </TouchableWithoutFeedback>
      <Toast />
    </>
  );
}
