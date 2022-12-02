import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FreeBoardScreen from '../Screens/FreeBoardScreen';

const Stack = createNativeStackNavigator();

const FreeBoardStackNavi = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="자유 게시판"
        component={FreeBoardScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default FreeBoardStackNavi;
