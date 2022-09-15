import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SejongLogo from "../assets/icons/SejongLogo.png";
import Alert from "../assets/icons/Alert.png";
import power from "../assets/icons/power.png";
import laundry from "../assets/icons/laundry.png";
import qrcode from "../assets/icons/qrcode.png";
import remote from "../assets/icons/remote.png";

const LoginScreen = ({ navigation }) => {
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
      <View style={{ marginTop: 100 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            margin: 10,
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Facility_Stack")}
              style={{
                width: 140,
                height: 190,
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: "#EFE0E0",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Inter-SemiBold",
                  fontSize: 16,
                  marginTop: 10,
                }}
              >
                호실 시설 조절
              </Text>
              <Image
                source={remote}
                style={{
                  height: 100,
                  width: 100,
                  marginTop: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 10 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Qr_Stack")}
              style={{
                width: 140,
                height: 190,
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: "#ECEFE0",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Inter-SemiBold",
                  fontSize: 16,
                  marginTop: 10,
                }}
              >
                QR 코드
              </Text>
              <Image
                source={qrcode}
                style={{
                  height: 100,
                  width: 100,
                  marginTop: 20,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Alert_Stack")}
              style={{
                width: 140,
                height: 190,
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: "#E9E0EF",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Inter-SemiBold",
                  fontSize: 16,
                  marginTop: 10,
                }}
              >
                기숙사 공지사항
              </Text>
              <Image
                source={Alert}
                style={{
                  height: 80,
                  width: 80,
                  marginTop: 33,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 10 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Laundry_Stack")}
              style={{
                width: 140,
                height: 190,
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: "#EFEAE0",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Inter-SemiBold",
                  fontSize: 16,
                  marginTop: 10,
                }}
              >
                세탁 시설 예약
              </Text>
              <Image
                source={laundry}
                style={{
                  height: 80,
                  width: 80,
                  marginTop: 33,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
