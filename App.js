import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import MemoItem from "./components/MemoItem";
import MemoInput from "./components/MemoInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [myMemos, setMyMemos] = useState([]);

  function startAddMemoHandler() {
    setModalIsVisible(true);
  }

  function endAddMemoHandler() {
    setModalIsVisible(false);
  }

  function addMemoHandler(enteredMemoText) {
    setMyMemos((currentMyMemos) => [
      ...currentMyMemos,
      { text: enteredMemoText, id: Math.random().toString() },
    ]);
    endAddMemoHandler();
  }

  function deleteMemoHandler(id) {
    setMyMemos((currentMyMemos) => {
      return currentMyMemos.filter((memo) => memo.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Memo"
          color="#08652D"
          onPress={startAddMemoHandler}
        />
        <MemoInput
          onAddMemo={addMemoHandler}
          visible={modalIsVisible}
          onCancel={endAddMemoHandler}
        />
        <View style={styles.memosContainer}>
          <FlatList
            data={myMemos}
            renderItem={(itemData) => {
              return (
                <MemoItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteMemoHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#14D260",
  },
  memosContainer: {
    flex: 5,
  },
});
