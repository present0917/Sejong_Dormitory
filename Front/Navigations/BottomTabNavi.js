import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import LoginScreen from '../Screens/LoginScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import NoticeScreen from '../Screens/NoticeScreen';
import CalendarScreen from '../Screens/CalendarScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavi = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffffff"
      inactiveColor="#d3d3d3"
      barStyle={{backgroundColor: '#BB1029'}}>
      <Tab.Screen
        name="Home"
        component={LoginScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notice"
        component={NoticeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="clipboard-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="face-man" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavi;
