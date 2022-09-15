import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../Screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const RegisterStackNavi = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="회원가입"
        component={RegisterScreen}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default RegisterStackNavi;
