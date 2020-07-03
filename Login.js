import { StyleSheet, Text, View } from "react-native";
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
    fontWeight: "900",
    fontSize: 40
  },
  greetingContainer: {
    fontFamily: "Cochin",
    marginTop: 160
  },
});

function Login() {
  return (
      <View style={styles.container}>
        <View style={styles.greetingContainer}>
          <Text style={styles.helloText}>This is Login!!!!</Text>
          <Text style={styles.myDayText}>Today is a productive day!</Text>
        </View>
        <StatusBar style="auto" />
      </View>
  )
}

export default Login;
