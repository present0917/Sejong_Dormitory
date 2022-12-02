/* import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import SejongLogo from '../assets/icons/SejongLogo.png';
import Alert from '../assets/icons/Alert.png';
import power from '../assets/icons/power.png';*/

import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import SejongLogo from "../assets/icons/SejongLogo.png";
import Alert from "../assets/icons/Alert.png";
import power from "../assets/icons/power.png";
import { RollInLeft } from "react-native-reanimated";
// import { useNavigation } from '@react-navigation/native';



const NoticeScreen = ({ navigation }) => {
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

      <View style={{ marginTop: 50 }}>
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "center",
            // margin: 10,
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("FreeBoard_Stack")}
              style={{
                marginLeft: 25,
                marginTop: 10,
                justifyContent: "center",
                width: 350,
                height: 100,
                borderWidth: 2,
                borderColor : "pink",
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
                }}
              >
                자유 게시판
              </Text>
            </TouchableOpacity>
            {/* </View> */}

            {/* <View style={{ marginLeft: 10 }}> */}

            <TouchableOpacity
              onPress={() => navigation.navigate("Delivery_Stack")}
              style={{
                marginLeft: 25,
                marginTop: 10,
                justifyContent: "center",
                width: 350,
                height: 100,
                borderWidth: 2,
                borderColor : "pink",
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
                  // marginTop: 10,
                }}
              >
                배달 게시판
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "center"
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Deal_Stack")}
              style={{
                marginLeft: 25,
                marginTop: 10,
                justifyContent: "center",
                width: 350,
                height: 100,
                borderWidth: 2,
                borderColor : "pink",
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
                }}
              >
                중고거래 게시판
              </Text>
            </TouchableOpacity>
            {/* </View> */}
            {/* <View style={{ marginLeft: 10 }}> */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Proposal_Stack")}
              style={{
                marginLeft: 25,
                marginTop: 10,
                justifyContent: "center",
                width: 350,
                height: 100,
                borderWidth: 2,
                borderColor : "pink",
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
                }}
              >
                건의 게시판
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NoticeScreen;
