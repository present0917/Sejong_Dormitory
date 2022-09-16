import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FindScreen from '../Screens/FindScreen';

const Stack = createNativeStackNavigator();

const FindStackNavi = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="아이디 / 비밀번호 찾기" component={FindScreen} />
    </Stack.Navigator>
  );
};
export default FindStackNavi;
