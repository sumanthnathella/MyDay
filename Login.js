import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableHighlight,
  Image
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#16191C",
    color: "#fff",
    paddingLeft: 47,
    paddingRight: 47,
    fontSize: 40
  },
  greetingContainer: {
    flexDirection: "row",
    fontFamily: "System",
    marginTop: 160
  },
  EmailIconStyle: {
    height: 48,
    width: 48,
    marginTop: 10
  },
  greetingTextContainer: {
    marginLeft: 24,
    fontFamily: "System"
  },
  continueText: {
    color: "#fff",
    fontSize: 24,
    textAlign: "left",
    marginBottom: 8
  },
  emailText: {
    color: "#fff",
    fontSize: 40,
    textAlign: "left"
  },
  loginFormContainer: {
    flex: 1,
    marginTop: 70
  },
  loginFormLabels: {
    textAlign: "left",
    fontSize: 12,
    color: "#9AA5B1"
  },
  loginFormInputContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#fff",
    marginBottom: 40
  },
  ImageIconStyle: {
    height: 14,
    width: 17,
    marginLeft: 1,
    marginBottom: 10,
    alignSelf: "flex-end"
  },
  input: {
    width: 320,
    height: 36,
    paddingLeft: 17,
    color: "#fff"
  },
  loginButton: {
    width: 200,
    height: 48,
    alignSelf: "center",
    backgroundColor: "#2B6ABF",
    borderRadius: 8,
    marginBottom: 24
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 14,
    paddingTop: 15,
    textAlign: "center"
  }
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  // onLogin() {
  //   const { username, password, navigation } = this.state;
  //   // Alert.alert('Credentials', `${username} + ${password}+ ${navigation}`);
  //   Alert.alert(`navigation`)
  //   navigation.navigate('TodoList');
  //
  // }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.greetingContainer}>
          <Image
            source={require("./assets/icon-email.png")}
            style={styles.EmailIconStyle}
          />
          <View style={styles.greetingTextContainer}>
            <Text style={styles.continueText}>Continue with your</Text>
            <Text style={styles.emailText}>Email</Text>
          </View>
        </View>
        <View style={styles.loginFormContainer}>
          <Text style={styles.loginFormLabels}>EMAIL ADDRESS</Text>
          <View style={styles.loginFormInputContainer}>
            <Image
              source={require("./assets/icon-mail-temp.png")}
              style={styles.ImageIconStyle}
            />
            <TextInput
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
              label="Email"
              style={styles.input}
            />
          </View>

          <Text style={styles.loginFormLabels}>PASSWORD</Text>
          <View style={styles.loginFormInputContainer}>
            <Image
              source={require("./assets/icon-key-temp.png")}
              style={styles.ImageIconStyle}
            />
            <TextInput
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              label="Password"
              secureTextEntry={true}
              style={styles.input}
            />
          </View>
          <TouchableHighlight
            underlayColor="#CCC"
            style={{
              ...styles.loginButton,
              backgroundColor: this.state.password === "" ? "#CBD2D9" : "#2B6ABF"
            }}
            onPress={() => navigate("TodoList")}
          >
            <Text
              style={{
                ...styles.loginButtonText,
                color: this.state.username === "" ? "#16191C" : "#fff"
              }}
            >
              Continue
            </Text>
          </TouchableHighlight>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}
