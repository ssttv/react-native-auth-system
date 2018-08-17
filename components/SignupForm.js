import React, { Component } from "react";
import { View } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { phone: "" };
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 20 }}>
          <FormLabel>Enter Phone Number Here</FormLabel>
          <FormInput />
        </View>
        <Button title="Submit" />
      </View>
    );
  }
}

export default SignupForm;
