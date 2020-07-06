import React, { Component } from "react";
import Buffer from "safe-buffer";
import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";
import { StatusBar } from "expo-status-bar";
import moment from "moment";
import TodoCard from "./TodoCard.js";

global.Buffer = Buffer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:'System',
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
    marginTop: 160,
    marginBottom: 34
  },
  addNewTaskButtonContainer: {
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
  addNewTaskButton: {
    width: 200,
    height: 48,
    alignSelf: "center",
    backgroundColor: "#2B6ABF",
    borderRadius: 8,
    marginBottom: 24
  },
  addNewTaskButtonText: {
    color: "#fff",
    fontSize: 14,
    paddingTop: 15,
    textAlign: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#282A2E",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  addNewTaskText: {
    color: "#CBD2D9",
    fontSize: 24,
    textAlign: "left",
    marginTop: 25,
    marginBottom: 75
  },
  input: {
    width: 320,
    height: 36,
    paddingLeft: 17,
    color: "#CBD2D9",
    borderBottomWidth: 1,
    borderColor: "#616E7C",
    paddingBottom: 20,
    marginBottom: 66
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 36,
    marginBottom: 36,
    borderColor: "#9AA5B1"
  },
  modalButton: {
    width: 200,
    height: 48,
    alignSelf: "center",
    backgroundColor: "#2B6ABF",
    borderRadius: 8
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 14,
    paddingTop: 15,
    textAlign: "center"
  }
});
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format(`MMMM DD, YYYY`),
      todos: [],
      modalVisible: false,
      addTaskTitle: "",
      addTaskTime: ""
    };
  }
  componentDidMount() {
    const todos = require("./db.json").todos;
    this.setState({ todos: todos });
  }

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  addTask() {
    const { todos, addTaskTitle, addTaskTime, modalVisible } = this.state;
    const todosfromState = todos;
    const lastTodo = todosfromState[todosfromState.length - 1];
    const newTodo = {
      title: addTaskTitle,
      time: addTaskTime,
      checked: false,
      id: lastTodo.id + 1
    };
    // Alert.alert("New Task", `${todosfromState} + ${addTaskTitle}+ ${addTaskTime}`);
    todosfromState.push(newTodo);
    this.setState({
      todos: todosfromState,
      modalVisible: !modalVisible,
      addTaskTitle: "",
      addTaskTime: ""
    });
  }

  setChecked(todo) {
    let stateChangedTodo = [];
    this.state.todos.forEach(stateTodo => {
      if (stateTodo.id !== todo.id) {
        stateChangedTodo.push(stateTodo);
      } else {
        const newTodo = { ...todo, checked: todo.checked };
        stateChangedTodo.push(newTodo);
      }
    });
    this.setState({ todos: stateChangedTodo });
  }

  render() {
    const { modalVisible, addTaskTitle, addTaskTime } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.greetingContainer}>
          <Text style={styles.helloText}>Hello!</Text>
          <Text style={styles.dateText}>
            Today is {this.state.date}. Let's make it count.
          </Text>
        </View>
        <SafeAreaView>
          <FlatList
            data={this.state.todos}
            renderItem={({ item }) => (
              <TodoCard todo={item} setChecked={this.setChecked.bind(this)} />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </SafeAreaView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          // onRequestClose={() => {
          //   Alert.alert("Modal has been closed.");
          // }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.addNewTaskText}>Add New Task</Text>
              <TextInput
                placeholderTextColor={"#CBD2D9"}
                placeholder="Enter you task name"
                value={addTaskTitle}
                onChangeText={addTaskTitle =>
                  this.setState({ addTaskTitle: addTaskTitle })
                }
                label="addTaskTitle"
                style={styles.input}
              />
              <TextInput
                placeholderTextColor={"#CBD2D9"}
                placeholder="How long is this gonna take?"
                value={addTaskTime}
                onChangeText={addTaskTime =>
                  this.setState({ addTaskTime: addTaskTime })
                }
                label="addTaskTime"
                style={styles.input}
              />
              <View style={styles.modalButtonContainer}>
                <TouchableHighlight
                  style={{
                    ...styles.modalButton,
                    width: 118,
                    backgroundColor: "#282A2E",
                    borderWidth: 1,
                    borderColor: "#9AA5B1",
                    marginRight: 24
                  }}
                  onPress={() => {
                    this.setState({ addTaskTitle: "", addTaskTime: "" });
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.modalButton }}
                  onPress={() => {
                    this.addTask();
                  }}
                >
                  <Text style={styles.modalButtonText}>Save Task</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.addNewTaskButtonContainer}>
          <TouchableHighlight
            underlayColor="#CCC"
            style={styles.addNewTaskButton}
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Text style={styles.addNewTaskButtonText}>+ Add New Task</Text>
          </TouchableHighlight>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}
