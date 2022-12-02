import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavi from "./BottomTabNavi";
import HomeScreenNavi from "./HomeScreenNavi";
import RegisterStackNavi from "./RegisterStackNavi";
import FindStackNavi from "./FindStackNavi";
import FacilityStackNavi from "./FacilityStackNavi";
import QrStackNavi from "./QrStackNavi";
import LaundryStackNavi from "./LaundryStackNavi";
import AlertStackNavi from "./AlertStackNavi";
import CalendarStackNavi from "./CalendarStackNavi";
import NoticeStackNavi from "./NoticeStackNavi";
import FreeBoardStackNavi from "./FreeBoardStackNavi";
import DeliveryStackNavi from "./DeliveryStackNavi";
import DealStackNavi from "./DealStackNavi";
import ProposalStackNavi from "./ProposalStackNavi";

const Stack = createStackNavigator();

const AppStackNavi = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "#A63737" } }}
    >
      <Stack.Screen
        name="Home_Stack"
        component={HomeScreenNavi}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Calendar_Stack"
        component={CalendarStackNavi}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Facility_Stack"
          component={FacilityStackNavi}
          options={{ headerShown: false }}
        />
      </Stack.Group>
      <Stack.Screen
        name="Bottom_Stack"
        component={BottomTabNavi}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Qr_Stack"
          component={QrStackNavi}
          options={{ headerShown: false }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Alert_Stack"
          component={AlertStackNavi}
          options={{ headerShown: false }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Laundry_Stack"
          component={LaundryStackNavi}
          options={{ headerShown: false }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Register"
          component={RegisterStackNavi}
          options={{ headerShown: false }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Find"
          component={FindStackNavi}
          options={{ headerShown: false }}
        />
      </Stack.Group>

      <Stack.Screen
        name="FreeBoard_Stack"
        component={FreeBoardStackNavi}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Delivery_Stack"
        component={DeliveryStackNavi}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Deal_Stack"
        component={DealStackNavi}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Proposal_Stack"
        component={ProposalStackNavi}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavi;
