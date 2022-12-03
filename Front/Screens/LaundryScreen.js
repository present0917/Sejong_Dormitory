import React, {useContext,useState} from 'react';
import { format } from "date-fns";
import {View, Text, SafeAreaView, Image, TouchableOpacity,ScrollView} from 'react-native';
import SejongLogo from '../assets/icons/SejongLogo.png';
import Alert from '../assets/icons/Alert.png';
import power from '../assets/icons/power.png';
import { Calendar } from "react-native-calendars";
import {StyleSheet } from "react-native";

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 10,
    borderBottomColor: '#e0e0e0',
  }
});
const LaundryScreen = ({navigation}) => {
  const posts = [
    
  ];
  const markedDates = posts.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});
  

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd"),
  );
  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    }
  }
  const [Timee, setTimee] = useState('1');
  const TimeBox = (props) => {
      return (
  <TouchableOpacity
  onPress = {() => {setTimee(props.time)}}
              style={Styles.TimeBox}
            >
              <Text style={{ color: "black" }}>
                {props.time}
              </Text>
            </TouchableOpacity>
      );
  };

  const [laun, setlaun] = useState('1');
  const LaunBox = (props) => {
      return (
  <TouchableOpacity
  onPress = {() => {setlaun(props.kind)}}
              style={Styles.laund}
            >
              <Text style={{ color: "black" }}>
                {props.kind}
              </Text>
            </TouchableOpacity>
      );
  };

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
      <Calendar style={styles.calendar}
      markedDates={markedSelectedDates}
      theme={{
        selectedDayBackgroundColor:"blue",
        todayBackgroundColor: "green",
        arrowColor: "blue",
        dotColor :'blue',
        todayTextColor:'black',
      }}
      onDayPress={(day) => {
        setSelectedDate(day.dateString)
      }}
      />
      <View>
        <Text
        style= {{
        marginLeft: 40,
        marginTop : 10,
        marginBottom : 10,
        color:"black",
        }}>
          시간 선택
        </Text>
        <ScrollView
        horizontal={true}>
            <TimeBox time='00:00'/>
            <TimeBox time='00:30'/>
            <TimeBox time='01:00'/>
            <TimeBox time='01:30'/>
            <TimeBox time='02:00'/>
            <TimeBox time='02:30'/>
            <TimeBox time='03:00'/>
            <TimeBox time='03:30'/>
            <TimeBox time='04:00'/>
            <TimeBox time='04:30'/>
            <TimeBox time='05:00'/>
            <TimeBox time='05:30'/>
            <TimeBox time='06:00'/>
            <TimeBox time='06:30'/>
            <TimeBox time='07:00'/>
          </ScrollView>
          <Text
        style= {{
        marginLeft: 40,
        marginTop : 10,
        
        color:"black",
        }}>
          기기선택
        </Text>
          <ScrollView
           horizontal={true}
          >
            
          <LaunBox kind='세탁기'/>
          <LaunBox kind='건조기'/>
          </ScrollView>

          <TouchableOpacity
   style={{
    borderWidth: 2,
  borderRadius: 10,
  marginTop:10,
  marginBottom:10,
  marginLeft: 10,
  width: 330,
  height: 40,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",

  }}
    >
          <Text>
        이용료 :1000원
      </Text>
    </TouchableOpacity>

          <TouchableOpacity
    style={{
      marginLeft:150,
      borderRadius:1,
      borderWidth:1,
      width:50,
      alignItems:'center',
    }}>
    
          <Text
          style={{
            color:'black'
          }}>
        예약
      </Text>
    </TouchableOpacity>
    
      </View>
    </SafeAreaView>
    
      
  );
};



const Styles = StyleSheet.create({
  TimeBox: {
    borderWidth: 1,
    borderRadius: 10,
    
    marginLeft: 10,
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    
  },
  laund: {
    marginTop :10,
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 40,
    width: 120,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  }
});

export default LaundryScreen;
