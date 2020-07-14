import * as React from "react";
import { Text, Button, View, StyleSheet, Image } from "react-native";

export default class Todos extends React.Component {
  increment() {
    pass;
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}></Text>
        <Button
          style={styles.button}
          title={"Increment"}
          onPress={() => this.increment()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  button: {
    className: "btn btn-primary",
    backgroundColor: "#61dafb",
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    height: 128,
    width: 128,
  },
});
