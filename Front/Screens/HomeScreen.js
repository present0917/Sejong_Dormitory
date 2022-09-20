import axios from "axios";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  useState,
  Alert,
} from "react-native";
import SejongLogo from "../assets/icons/SejongLogo.png";

const HomeScreen = ({ navigation }) => {
  const [ID, PutID] = React.useState(null);
  const [PWD, PutPWD] = React.useState(null);

  const [id, setId] = useState("");
  const [password, setpassword] = useState("");

  function login() {
    if (id.trim() === "") {
      Alert.alert("아이디를 입력해주세요");
    } else if (password.trim() === "") {
      Alert.alert("비밀번호를 입력해주세요");
    }
    else{
      axios.post("http:http://localhost:8080/join", null,{params: {id:id, pwd:password}}).then(function())
    }
  }
  return (
    <View style={Styles.home}>
      <Image source={SejongLogo} style={Styles.SejongHomeLogo} />
      <SafeAreaView>
        <View style={Styles.IdContainer}>
          <Text style={Styles.Id}>아이디 입력</Text>
          <TextInput
            style={Styles.input1}
            PutID={PutID}
            value={ID}
            placeholder="ID"
            placeholderTextColor="#808080"
            keyboardType="url"
          />
        </View>
        <View style={Styles.PwdContainer}>
          <Text style={Styles.Pwd}>비밀번호 입력</Text>
          <TextInput
            style={Styles.input2}
            PutPWD={PutPWD}
            value={PWD}
            placeholder="Password"
            placeholderTextColor="#808080"
            keyboardType="url"
          />
        </View>
      </SafeAreaView>
      <TouchableOpacity
        style={Styles.LoginBox}
        onPress={() => navigation.navigate("Bottom_Stack")}
      >
        <Text style={Styles.LoginText}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.RegisterBox}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={Styles.RegisterText}>회원가입</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.FindBox}
        onPress={() => navigation.navigate("Find")}
      >
        <Text style={Styles.FindText}>아이디 / 비밀번호 찾기</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  LoginBox: {
    backgroundColor: "white",
    width: 90,
    height: 36,
    marginTop: 15,
    marginLeft: 150,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
  // Login 텍스트 디자인
  LoginText: {
    fontFamily: "Inter-SemiBold",
    fontSize: 17,
    marginTop: 3,
  },
  // 아이디 비밀번호 찾기
  FindBox: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  FindText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Inter-SemiBold",
  },
  // 회원가입
  RegisterBox: {
    backgroundColor: "white",
    width: 90,
    height: 36,
    marginTop: 5,
    marginLeft: 150,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
  RegisterText: {
    fontFamily: "Inter-SemiBold",
    fontSize: 17,
    marginTop: 3,
  },
  home: {
    flex: 1,
    backgroundColor: "#BB1029",
  },
  SejongHomeLogo: {
    width: 202,
    height: 200,
    marginLeft: 100,
    marginTop: 150,
  },
  IdContainer: {
    marginLeft: 60,
    marginTop: 15,
  },
  Id: {
    fontFamily: "Inter-SemiBold",
    fontSize: 14,
    color: "white",
    marginLeft: 2,
  },
  input1: {
    height: 35,
    borderWidth: 1,
    padding: 10,
    color: "black",
    borderRadius: 10,
    fontFamily: "Inter-SemiBold",
    fontSize: 14,
    width: 270,
    height: 55,
    backgroundColor: "white",
  },
  input2: {
    height: 35,
    //  marginLeft: 60,
    borderWidth: 1,
    padding: 10,
    color: "black",
    borderRadius: 10,
    fontFamily: "Inter-SemiBold",
    fontSize: 14,
    width: 270,
    height: 55,
    backgroundColor: "white",
  },
  PwdContainer: {
    marginLeft: 60,
    marginTop: 1,
  },
  Pwd: {
    fontFamily: "Inter-SemiBold",
    fontSize: 14,
    marginTop: 5,
    marginLeft: 2,
    color: "white",
  },
});

export default HomeScreen;
