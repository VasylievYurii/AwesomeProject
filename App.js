import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Toast from "react-native-toast-message";
import { MainView } from "./App.styled";
import { useFonts } from "expo-font";

import RegistrationScreen from "./src/screens/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen";
import Home from "./src/screens/Home";

const MainStack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
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
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <MainView onLayout={onLayoutRootView}>
          <KeyboardAvoidingView
            style={{
              flex: 1,
              width: "100%",
            }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <MainStack.Navigator initialRouteName="Login">
              <MainStack.Screen
                name="Registration"
                options={{ headerShown: false }}
              >
                {(props) => (
                  <RegistrationScreen
                    {...props}
                    isKeyboardVisible={isKeyboardVisible}
                  />
                )}
              </MainStack.Screen>
              <MainStack.Screen name="Login" options={{ headerShown: false }}>
                {(props) => (
                  <LoginScreen
                    {...props}
                    isKeyboardVisible={isKeyboardVisible}
                  />
                )}
              </MainStack.Screen>
              <MainStack.Screen name="Home" component={Home} />
            </MainStack.Navigator>

            <StatusBar style="auto" />
          </KeyboardAvoidingView>
        </MainView>
      </TouchableWithoutFeedback>
      <Toast />
    </NavigationContainer>
  );
}
