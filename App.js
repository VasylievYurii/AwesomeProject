import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MainView } from "./App.styled";
import RegistrationScreen from "./src/screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
export default function App() {
  console.log("first");
  return (
    <MainView>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      {/* <Text>Hello world!!!S</Text> */}
      <StatusBar style="auto" />
    </MainView>
  );
}
