import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FacilityScreen from '../Screens/FacilityScreen';

const Stack = createNativeStackNavigator();

const FacilityStackNavi = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="호실 시설 조절"
        component={FacilityScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default FacilityStackNavi;
