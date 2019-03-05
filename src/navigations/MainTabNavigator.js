import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import HomeScreen from "../containers/home";

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class UserScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>User info</Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "主頁"
    })
  },
  User: {
    screen: UserScreen,
    navigationOptions: ({ navigation }) => ({
      title: "詳情"
    })
  }
});

export default (TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack
  },
  Event: SettingsScreen
}));
