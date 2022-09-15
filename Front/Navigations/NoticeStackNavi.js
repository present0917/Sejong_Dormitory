import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NoticeScreen from '../Screens/NoticeScreen';
const Stack = createNativeStackNavigator();

const NoticeStackNavi = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NoticeScreen" component={NoticeScreen} />
    </Stack.Navigator>
  );
};
export default NoticeStackNavi;
