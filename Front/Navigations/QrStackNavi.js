import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QrScreen from '../Screens/QrScreen';

const Stack = createNativeStackNavigator();

const QrStackNavi = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Qr 코드"
        component={QrScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default QrStackNavi;
