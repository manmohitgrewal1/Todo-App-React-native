import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
  Switch,
} from "react-native";
import Constants from "expo-constants";
import { Card } from "react-native-paper";
let count = 0;

let id = 0;
const Todos = (props) => {
  return (
    <View style={styles.todo}>
      <Switch onValueChange={props.onToggle} value={props.todo.checked} />
      <Text
        style={{ color: "red", fontWeight: "bold", marginLeft: 15, padding: 5 }}
      >
        {props.todo.text}
      </Text>
      <Button style={styles.button} onPress={props.onDelete} title={"Remove"} />
    </View>
  );
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  addTodo(text) {
    console.log(text.nativeEvent.text);
    id++;
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: id,
          text: text.nativeEvent.text,
          checked: false,
        },
      ],
    });
    console.log(this.textInput);
    this.textInput.clear();
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          id: id,
          text: todo.text,
          checked: !todo.checked,
        };
      }),
    });
  }
  removeTodo(id) {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>TODO LIST</Text>

        <Text> Todo Count: {this.state.todos.length} </Text>
        <Text>
          {" "}
          Unchecked TODO Count:{" "}
          {this.state.todos.filter((todo) => todo.checked !== true).length}
        </Text>
        <TextInput
          style={{
            height: 40,
            backgroundColor: "azure",
            width: " 80%",
            position: "relative",
            left: 30,
            marginTop: 20,
            fontSize: 20,
          }}
          placeholder="Type the things TODO!"
          onSubmitEditing={(text) => this.addTodo(text, this)}
          ref={(input) => {
            this.textInput = input;
          }}
        />

        <ScrollView>
          {this.state.todos.map((todo) => (
            <Todos
              onDelete={() => this.removeTodo(todo.id)}
              onToggle={() => this.toggleTodo(todo.id)}
              todo={todo}
              count={count}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  todo: {
    flexDirection: "row",
    margin: 5,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    alignItems: "center",
    padding: 8,
  },
});
