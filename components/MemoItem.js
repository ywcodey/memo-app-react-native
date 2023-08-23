import { StyleSheet, View, Text, Pressable } from "react-native";

function MemoItem(props) {
  return (
    <View style={styles.memoItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.memoText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default MemoItem;

const styles = StyleSheet.create({
  memoItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#14BD58",
  },
  memoText: {
    color: "white",
    padding: 8,
  },
});
