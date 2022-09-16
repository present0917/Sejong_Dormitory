import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';

const Stack = createNativeStackNavigator();

const LoginStackNavi = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerStyle: {
            backgroundColor: '#BB1029',
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default LoginStackNavi;
