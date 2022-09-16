import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CalendarScreen from '../Screens/CalendarScreen';

const Stack = createNativeStackNavigator();

const CalendarStackNavi = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="달력"
        component={CalendarScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default CalendarStackNavi;
