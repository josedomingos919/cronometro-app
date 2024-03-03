import React from "react";
import { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      lastTime: 0,
      running: false,
    };

    this.timer = null;
    this.go = this.go.bind(this);
    this.clean = this.clean.bind(this);
  }

  pause() {
    clearInterval(this.timer);
    this.timer = null;
    this.setState({
      running: false,
    });
  }

  go() {
    if (this.timer) {
      this.pause();
    } else {
      this.setState({
        running: true,
      });

      this.timer = setInterval(() => {
        this.setState({
          number: this.state.number + 0.1,
        });
      }, 100);
    }
  }

  clean() {
    this.pause();

    this.setState({
      number: 0,
      lastTime: this.state.number,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require("./src/cronometro.png")} />

        <Text style={styles.textTimer}>{this.state.number.toFixed(1)}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.go} style={styles.button}>
            <Text style={styles.buttonText}>
              {this.state.running ? "PAUSAR" : "INICIAR"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.clean} style={styles.button}>
            <Text style={styles.buttonText}>LIMPAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lastTimeView}>
          <Text style={styles.lastTimeText}>
            Último tempo: {this.state.lastTime.toFixed(1)}s
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00aeef",
  },
  buttonContainer: {
    height: 40,
    marginTop: 70,
    flexDirection: "row",
  },
  textTimer: {
    fontSize: 65,
    color: "#fff",
    marginTop: -160,
    fontWeight: "bold",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef",
  },
  lastTimeView: {
    marginTop: 40,
  },
  lastTimeText: {
    fontSize: 25,
    color: "#fff",
    fontStyle: "italic",
  },
});
