import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MainView } from "./App.styled";
import RegistrationScreen from "./src/screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  console.log("first");
  return (
    <MainView>
      <RegistrationScreen />
      {/* <Text>Hello world!!!S</Text> */}
      <StatusBar style="auto" />
    </MainView>
  );
}
