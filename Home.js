import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from 'react';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#16191C",
    color: "#fff",
    paddingLeft: 47,
    paddingRight: 47,
    fontFamily: "Al Nile",
    fontWeight: "900",
    fontSize: 40
  },
  greetingContainer: {
    fontFamily: "Cochin",
    marginTop: 160
  },
  loginButtonsContainer: {
    // marginBottom: 16
    paddingBottom: 50
  },
  helloText: {
    color: "#fff",
    fontSize: 24,
    textAlign: "left",
    marginBottom: 8
  },
  myDayText: {
    color: "#fff",
    fontSize: 40,
    textAlign: "left"
  },
  loginButton: {
    width: 320,
    height: 48,
    color: "#fff",
    backgroundColor: "#16191C",
    borderRadius: 8,
    marginBottom: 24,
    borderColor: "#9AA5B1",
    borderWidth: 1
  },
  loginButtonTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 14,
    paddingTop: 17,
    paddingLeft: 24
  },
  ImageIconStyle: {
    height: 28,
    width: 28,
    marginTop: 10,
    marginRight: 18
  }
});

function Home(props) {
  const { navigation } = props
  return (
      <View style={styles.container}>
        <View style={styles.greetingContainer}>
          <Text style={styles.helloText}>Hello There! Welcome to</Text>
          <Text style={styles.myDayText}>My Day.</Text>
        </View>
        <View style={styles.loginButtonsContainer}>
          <TouchableHighlight
            underlayColor="#CCC"
            style={styles.loginButton}
            onPress={logThis}
          >
            <View style={styles.loginButtonTextContainer}>
              <Text style={styles.loginButtonText}>Continue with Google</Text>
              <Image
                source={require("./assets/icon-google.png")}
                style={styles.ImageIconStyle}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#CCC"
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}>
          >
            <View style={styles.loginButtonTextContainer}>
              <Text style={styles.loginButtonText}>Continue with Email</Text>
              <Image
                source={require("./assets/icon-email.png")}
                style={styles.ImageIconStyle}
              />
            </View>
          </TouchableHighlight>
        </View>
        <StatusBar style="auto" />
      </View>
  )
}

const logThis = () => console.log("onPress");

export default Home;
