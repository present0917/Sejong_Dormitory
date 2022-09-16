import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import SejongLogo from '../assets/icons/SejongLogo.png';
import Alert from '../assets/icons/Alert.png';
import power from '../assets/icons/power.png';
const LaundryScreen = ({navigation}) => {
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
    </SafeAreaView>
  );
};

export default LaundryScreen;
