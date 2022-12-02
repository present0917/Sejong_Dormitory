import React from 'react';
import {View, Text, ScrollView,SafeAreaView, Image, TouchableOpacity} from 'react-native';
import SejongLogo from '../assets/icons/SejongLogo.png';
import Alert from '../assets/icons/Alert.png';
import power from '../assets/icons/power.png';

const DeliveryScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row'}}>
        <Image source={SejongLogo} style={{width: 50, height: 50}} />
        <View style={{marginTop: 3, marginLeft: 10}}>
          <Text style={{fontSize: 17, fontFamily: 'Inter-SemiBold'}}>
            세종대학교 행복기숙사
          </Text>
          <Text style={{fontSize: 17, fontFamily: 'Inter-SemiBold'}}>
            Sejong University Dormitory
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginLeft: 16,
            marginTop: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home_Stack')}>
            <Image
              source={power}
              style={{width: 30, height: 30, marginRight: 7}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Alert} style={{width: 30, height: 30}} />
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
      <Text style={{ marginLeft: 100 }}>배달 게시판</Text>

      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderRadius: 10,
          marginLeft: 90,
          width: 70,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <Text style={{ color: "white", fontFamily: "Inter-SemiBold" }}>
          글 쓰기
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
      <Text style={{ marginRight: 20 }}>아이디</Text>
      <Text style={{ marginLeft: 40 }}>글 공간</Text>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderRadius: 10,
          marginLeft: 70,
          width: 70,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#4B5965",
        }}
      >
        <Text style={{ color: "white", fontFamily: "Inter-SemiBold" }}>
          댓글 달기
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default DeliveryScreen;
