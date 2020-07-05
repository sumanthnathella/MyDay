import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox } from "react-native-elements";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#282A2E",
    flex: 1,
    paddingTop: 24,
    paddingBottom: 26,
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 16,
    borderRadius: 8
  },
  cardContentWithCheckBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  checkBoxStyles: {
    padding: 0,
    margin: 0
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 14,
    fontWeight: "300",
    marginLeft: 7,
    color: "#fff",
    textAlign: "left"
  },
  time: {
    fontWeight: "200",
    fontSize: 12,
    color: "#9AA5B1",
    textAlign: "right",
    textTransform: "uppercase"
  }
});

export default function TodoCard(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContentWithCheckBox}>
        <CheckBox
          checkedColor="#2B6ABF"
          checked={props.todo.checked}
          onPress={() =>
            props.setChecked({ ...props.todo, checked: !props.todo.checked })
          }
          containerStyle={styles.checkBoxStyles}
        />
        <View style={styles.cardContent}>
          <Text
            onPress={() => {
              props.setChecked({ ...props.todo, checked: !props.todo.checked });
            }}
            style={styles.title}
          >
            {props.todo.title}
          </Text>
          <Text style={styles.time}>{props.todo.time}</Text>
        </View>
      </View>
    </View>
  );
}

TodoCard.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    id: PropTypes.number,
    checked: PropTypes.bool.isRequired
  })
};
