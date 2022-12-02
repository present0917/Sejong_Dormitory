import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DealScreen from "../Screens/DealScreen";

const Stack = createNativeStackNavigator();

const DealStackNavi = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="중고거래 게시판"
        component={DealScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default DealStackNavi;
