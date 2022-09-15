import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LaundryScreen from '../Screens/LaundryScreen';

const Stack = createNativeStackNavigator();

const LaundryStackNavi = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="세탁 시설 예약"
        component={LaundryScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default LaundryStackNavi;
