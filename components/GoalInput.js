import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Enter your goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonView}>
          <View style={styles.buttons}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0ace" />
          </View>
          <View style={styles.buttons}>
            <Button title="Cancel" onPress={props.onClose} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  buttonView: {
    flexDirection: "row",
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#e0d4ff",
    backgroundColor: "#e0d4ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 18,
  },
  buttons: {
    width: 100,
    marginHorizontal: 8,
  },
});
