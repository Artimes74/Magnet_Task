import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FriendsList } from "screens";

import CustomTabBar from "./tabs/CustomTabBar";
import { AppTabParamList } from "./navigation.types";
import { MagnetTabScreenOptions } from "./options/magnetTabScreenOptions";

const Tab = createBottomTabNavigator<AppTabParamList>();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      initialRouteName="Profile"
      screenOptions={{
        headerShown: true,
        sceneStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name="Groups"
        component={FriendsList}
        options={MagnetTabScreenOptions({
          title: "Groups",
        })}
      />
      <Tab.Screen name="Explore" component={FriendsList} />
      <Tab.Screen name="Add" component={FriendsList} />
      <Tab.Screen name="Messages" component={FriendsList} />
      <Tab.Screen
        name="Profile"
        component={FriendsList}
        options={MagnetTabScreenOptions({
          title: "My Friends",
        })}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
