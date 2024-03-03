import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
