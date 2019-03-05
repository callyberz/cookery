/* eslint-disable no-underscore-dangle,import/no-unresolved,react/prop-types */
import React from "react";
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  StatusBar
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";

const styles = StyleSheet.create({});

const RootStackNavigator = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator
    }
  },
  { headerMode: "none" }
);

export default createAppContainer(RootStackNavigator);
