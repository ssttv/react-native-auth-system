import React from "react";
import { StyleSheet, Text, Platform, View } from "react-native";
import SignupForm from "./components/SignupForm";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        paddingTop: 20
      },
      android: {
        paddingTop: 20
      }
    })
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SignupForm />
      </View>
    );
  }
}
