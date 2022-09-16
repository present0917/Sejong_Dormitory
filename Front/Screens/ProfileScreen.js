import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import SejongLogo from "../assets/icons/SejongLogo.png";
import Alert from "../assets/icons/Alert.png";
import power from "../assets/icons/power.png";
import { RollInLeft } from "react-native-reanimated";
const ProfileScreen = ({ navigation }) => {
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
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            marginLeft: 16,
            marginTop: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home_Stack")}>
            <Image
              source={power}
              style={{ width: 30, height: 30, marginRight: 7 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Alert} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Text>이름 홍길동 17xxxxxx</Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            borderRadius: 10,
            borderWidth: 1,
            width: 350,
            height: 70,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 20,
            marginTop: 50,
          }}
        >
          <Text style={{ marginRight: 20 }}>잔액</Text>
          <Text style={{ marginLeft: 40 }}>xxxx 원</Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 10,
              marginLeft: 50,
              width: 90,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#4B5965",
            }}
          >
            <Text style={{ color: "white", fontFamily: "Inter-SemiBold" }}>
              충전하기
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: 350,
            height: 220,
            marginLeft: 20,
            marginTop: 60,
          }}
        >
          <Text>예약 내역</Text>
          <View style={{ marginLeft: 230, marginTop: 25 }}>
            <TouchableOpacity
              style={{
                marginBottom: 50,
                borderRadius: 10,
                borderWidth: 1,
                width: 90,
                height: 45,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#4B5965",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  fontFamily: "Inter-SemiBold",
                }}
              >
                취소하기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginBottom: 50,
                borderRadius: 10,
                borderWidth: 1,
                width: 90,
                height: 45,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#4B5965",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  fontFamily: "Inter-SemiBold",
                }}
              >
                취소하기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            // marginTop: 250,
          }}
        >
          <View style={{ margin: 20 }}>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#A63737",
                width: 100,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: "Inter-SemiBold" }}>
                회원 정보 수정
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#A63737",
                width: 100,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: "Inter-SemiBold" }}>계정 삭제</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
