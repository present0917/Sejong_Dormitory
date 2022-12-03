// 텍스트 입력창과 추가 버튼이 들어갈 부분

import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

const TodoInsert = ({ onAddTodo }) => {
  const [newTodoItem, setNewTodoItem] = useState("");
  //초기 상태값은 문자열로 '' 초기화
  //setewtodoitem은 업데이트하는 함수
  const todoInputHandler = (newTodo) => {
    setNewTodoItem(newTodo);
  };
  //todoinputhandler은 사용자가 입력한 텍스트값의 변화를 관리

  const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem("");
  };
  //추가하는 함수
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="내가 해야할 일은?"
        value={newTodoItem}
        onChangeText={todoInputHandler}
        placeholderTextColor={"#999"}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title={"추가"} onPress={addTodoHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default TodoInsert;
