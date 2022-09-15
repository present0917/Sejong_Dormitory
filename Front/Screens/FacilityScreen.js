// 호실 시설 조절 페이지

import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import SejongLogo from '../assets/icons/SejongLogo.png';
import Alert from '../assets/icons/Alert.png';
import power from '../assets/icons/power.png';
const FacilityScreen = ({navigation}) => {
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 300,
        }}>
        <Text>호실 전등</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              width: 80,
              height: 80,
              borderRadius: 10,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: 'rgba(0,0,0, .4)', // IOS
              shadowOffset: {height: 1, width: 1}, // IOS
              // shadowOpacity: 1, // IOS
              shadowRadius: 1, //IOS
            }}>
            <Text>ON</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 80,
              height: 80,
              borderRadius: 10,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>OFF</Text>
          </TouchableOpacity>
        </View>
        <Text>화장실 전등</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              width: 80,
              height: 80,
              borderRadius: 10,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>ON</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 80,
              height: 80,
              borderRadius: 10,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>OFF</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FacilityScreen;
