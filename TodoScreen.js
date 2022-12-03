import React, {useState} from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Text,
} from "react-native";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";
import TodoListItem from "../components/TodoListItem";


// const [todos, setTodos] = useState([]);

const Todo = () => {
  // todos: {id: Number, textValue: string, checked: boolean }
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
      //id 는 랜덤으로. 사용자가 입력한 텍스트는 textvalue로,
      //기존 할 일 목록은 현재 상태를 나타내는 todos를 통해 들고옴 
      //setTodos 함수를 통해 이전에 있던 목록은 그대로 유지하면서 새로운 목록을 투가한 배열을 생성함.
    ]);
  };
  //addTodo를 TodoInsert 컴포넌트로 prpos 로 전달


  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Sejong Todo List🚀</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
};
//contentContainerStyle 은 스크롤뷰에 매핑하는 flatlist의 컨테이너 스타일 옵션이라고 함

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFE0E0",
  },
  appTitle: {
    color: "#BF360C",
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: "300",
    textAlign: "center",
    backgroundColor: "#EFE0E0",
  },
  card: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },

});

export default Todo;

//아이콘 설치 npm install react-native-vector-icons --save
