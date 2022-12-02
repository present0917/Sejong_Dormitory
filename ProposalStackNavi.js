import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProposalScreen from "../Screens/ProposalScreen";

const Stack = createNativeStackNavigator();

const ProposalStackNavi = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="자유 게시판"
        component= {ProposalScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default ProposalStackNavi;
