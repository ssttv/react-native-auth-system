import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        paddingTop: 30
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
        <Text>We might see some boilerplate here</Text>
      </View>
    );
  }
}