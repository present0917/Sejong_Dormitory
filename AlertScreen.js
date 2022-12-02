import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import SejongLogo from "../assets/icons/SejongLogo.png";
import Alert from "../assets/icons/Alert.png";

const AlertScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row" }}>
        <Image source={SejongLogo} style={{ width: 50, height: 50 }} />
        <View style={{ marginTop: 3, marginLeft: 10 }}>
          <Text style={{ fontSize: 17, fontFamily: "Inter-SemiBold" }}>
            세종대학교 행복기숙사
          </Text>
          <Text style={{ fontSize: 17, fontFamily: "Inter-SemiBold" }}>
            Sejong University Dormitory
          </Text>
        </View>
        <View style={{ justifyContent: "center", marginLeft: 50 }}>
          <TouchableOpacity>
            <Image source={Alert} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Write />
      </View>

      <ScrollView>
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </ScrollView>
    </SafeAreaView>
  );
};
function Write() {
  return (
    <View
      style={{
        flexDirection: "row",
        //borderRadius: 10,
        borderWidth: 1,
        width: 350,
        height: 50,
        alignItems: "center",
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 28,
        marginRight: 1,
        backgroundColor: "#EFE0E0",
      }}
    >
      <Text style={{ marginLeft: 100 }}>행복기숙사 공지사항</Text>

      <TouchableOpacity
        style={{
          borderRadius: 10,
          marginLeft: 50,
          width: 70,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Text style={{ color: "#EFE0E0", fontFamily: "Inter-SemiBold" }}>
          글 등록
        </Text>
      </TouchableOpacity>
    </View>
  );
}
function List() {
  return (
    <View
      style={{
        flexDirection: "row",
        borderRadius: 10,
        borderWidth: 1,
        width: 350,
        height: 90,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 30,
        marginTop: 5,
        marginRight: 10,
      }}
    >
      <Text style={{ marginRight: 150 }}>날짜</Text>
      <Text style={{ marginLeft: 10 }}>글 공간</Text>
    </View>
  );
}

export default AlertScreen;
