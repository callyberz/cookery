import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, YellowBox } from "react-native";
import { Provider } from "react-redux";
import store from "./src/reducers/store";
// import SplashScreen from 'react-native-splash-screen';

import RootNavigation from "./src/containers/navigation";

export default class App extends Component {
  componentDidMount() {
    YellowBox.disableYellowBox = true;
    console.disableYellowBox = true;
    // SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootNavigation />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
