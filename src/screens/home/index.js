import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  Button
} from "react-native";
import PropTypes from "prop-types";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.HomeActions.getPosts();
  }

  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Hello i'm in home screen now</Text>
        <Button
          onPress={() => this.props.navigation.navigate("User")}
          title="Learn More"
          color="#841584"
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
