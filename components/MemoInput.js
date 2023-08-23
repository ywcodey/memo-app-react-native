import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function MemoInput(props) {
  const [enteredMemoText, setEnteredMemoText] = useState("");

  function memoInputHandler(enteredText) {
    setEnteredMemoText(enteredText);
  }

  function addMemoHandler() {
    props.onAddMemo(enteredMemoText);
    setEnteredMemoText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/memo-emoji.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Write a memo"
          onChangeText={memoInputHandler}
          value={enteredMemoText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#14BD58" />
          </View>
          <View style={styles.button}>
            <Button title="Add Memo" onPress={addMemoHandler} color="#08652D" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default MemoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#14BD58",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
