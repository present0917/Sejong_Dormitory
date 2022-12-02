import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FacilityScreen from '../Screens/FacilityScreen';
import AlertScreen from '../Screens/AlertScreen';
const Stack = createNativeStackNavigator();

const AlertStackNavi = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="기숙사 공지사항"
        component={AlertScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default AlertStackNavi;
