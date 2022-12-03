import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import SejongLogo from "../assets/icons/SejongLogo.png";
import Alert from "../assets/icons/Alert.png";
import power from "../assets/icons/power.png";
import { Calendar } from "react-native-calendars";

const CalendarScreen = ({ navigation }) => {
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
      <View style={{ marginTop: 30 }}>
        <Calendar
          style={{ width: 400, height: 200 }}
          theme={{
            todayBackgroundColor: "red",
            arrowColor: "blue",
            todayTextColor: "white",
          }}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Todo_Stack")}
          style={{
            marginLeft: 50,
            marginTop: 180,
            justifyContent: "center",
            width: 300,
            height: 80,
            borderWidth: 10,
            borderColor: "#EFE0E0",
            borderRadius: 100,
            backgroundColor: "white",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Inter-SemiBold",
              fontSize: 20,
              textShadowColor: "black",
              color: "black",
            }}
          >
            To Do List 🚀
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CalendarScreen;
