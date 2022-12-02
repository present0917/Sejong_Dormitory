import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeliveryScreen from "../Screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

const DeliveryStackNavi = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="배달 게시판"
        component={DeliveryScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default DeliveryStackNavi;
