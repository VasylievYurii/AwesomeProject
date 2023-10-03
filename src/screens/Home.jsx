import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import CreatePostsScreen from "./CreatePostsScreen";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Tabs = createBottomTabNavigator();

const initialTabBarStyle = {
  display: "flex",
  flexDirection: "row",
  height: 83,
  paddingBottom: 9,
  borderTopWidth: 1,
  borderTopColor: "rgba(0, 0, 0, 0.30)",
};

const Home = () => {
  const navigation = useNavigation();
  const [tabBarStyle, setTabBarStyle] = useState(initialTabBarStyle);

  const onBack = () => {
    setTabBarStyle(initialTabBarStyle);
    navigation.navigate("Home", { screen: "PostsScreen" });
  };

  const onLogOut = () => {
    navigation.navigate("Login");
  };

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          switch (route.name) {
            case "ProfileScreen":
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
              return <Icon name="user" size={24} color={color} />;

            case "CreatePostsScreen":
              iconName = focused ? "ios-list-box" : "ios-list";
              return (
                <View
                  style={{
                    backgroundColor: "#FF6C00",
                    paddingLeft: 27,
                    paddingRight: 27,
                    paddingTop: 11,
                    paddingBottom: 11,
                    borderRadius: 25,
                  }}
                >
                  <Icon name="plus" size={24} color="#fff" />
                </View>
              );

            case "PostsScreen":
              iconName = focused ? "ios-list-box" : "ios-list";
              return <Icon name="grid" size={24} color={color} />;

            default:
              return null;
          }
        },
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
        tabBarStyle: tabBarStyle,
        tabBarShowLabel: false,
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "rgba(0, 0, 0, 0.30)",
        },
        headerTitleStyle: {
          fontSize: 17,
        },
        headerTitleAlign: "center",
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarIconStyle: {
            alignSelf: "flex-end",
            paddingRight: 39,
          },
          headerTitle: "Публікації",
          headerRight: () => (
            <TouchableOpacity onPress={onLogOut}>
              <Icon
                name="log-out"
                size={24}
                style={{ marginRight: 16 }}
                color="#BDBDBD"
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: { display: "none" },
          headerTitle: "Створити публікацію",

          headerLeft: () => (
            <TouchableOpacity onPress={onBack}>
              <Icon
                name="arrow-left"
                size={24}
                style={{ marginLeft: 20 }}
                color="#000"
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIconStyle: {
            alignSelf: "flex-start",
            paddingRight: 39,
          },
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default Home;
