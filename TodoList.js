import React, { Component } from "react";
import { Image, Text, TouchableHighlight, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import moment from "moment";
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
    dateText: {
        color: "#CBD2D9",
        fontSize: 14,
        textAlign: "left"
    },
    loginButton: {
        width: 200,
        height: 48,
        color: "#fff",
        alignSelf: "center",
        backgroundColor: "#2B6ABF",
        borderRadius: 8,
        marginBottom: 24
    },
    loginButtonText: {
        color: "#fff",
        fontSize: 14,
        paddingTop: 15,
        textAlign:"center"
    }
});
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        date: moment().format(`MMMM DD, YYYY`)
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.greetingContainer}>
          <Text style={styles.helloText}>Hello!</Text>
          <Text style={styles.dateText}>Today is {this.state.date}. Let's make it count.</Text>
        </View>
        <View style={styles.loginButtonsContainer}>
            <TouchableHighlight
                underlayColor="#CCC"
                style={styles.loginButton}
            >
                <Text style={styles.loginButtonText}>+ Add New Task</Text>
            </TouchableHighlight>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}
