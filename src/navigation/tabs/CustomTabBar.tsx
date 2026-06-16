import React from "react";
import { Platform, Pressable, useWindowDimensions, View } from "react-native";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { MagnetIcon, IconKeys } from "components";
import { logout } from "features";
import { useAppDispatch } from "store";

import TabGradientShell from "./TabGradientShell";
import { customTabBarStyles } from "./styles";
import { TabRouteName } from "./tabs.navigation.types";
import { Colors } from "theme";

const tabIcons: Record<TabRouteName, IconKeys> = {
  Groups: "users-alt-2",
  Explore: "shapes",
  Add: "plus",
  Messages: "message-circle-lines",
  Profile: "user-alt-1",
};

const CustomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const { width } = useWindowDimensions();

  const isCompactTabBar = width < 400;
  const isLargeDevice = width >= 430;

  const horizontalSpace = isCompactTabBar ? 28 : Math.max(width * 0.13, 36);

  const bottomSpace =
    Platform.OS === "ios"
      ? Math.max(insets.bottom + 24, 40)
      : Math.max(insets.bottom + 36, 36);

  const sideHeight =
    Platform.OS === "ios"
      ? isLargeDevice
        ? 56
        : 54
      : isCompactTabBar
      ? 50
      : 58;

  const centerSize =
    Platform.OS === "ios"
      ? isLargeDevice
        ? 70
        : 68
      : isCompactTabBar
      ? 62
      : 76;

  const gap = isCompactTabBar ? 8 : 14;

  const iconSize = isCompactTabBar ? 19 : 22;
  const centerIconSize = isCompactTabBar ? 24 : 30;

  const leftRoutes = state.routes.slice(0, 2);
  const centerRoute = state.routes[2];
  const rightRoutes = state.routes.slice(3, 5);

  const handlePress = (route: (typeof state.routes)[number]) => {
    const routeIndex = state.routes.findIndex((item) => item.key === route.key);

    const isFocused = state.index === routeIndex;

    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const handleLongPress = (route: (typeof state.routes)[number]) => {
    const routeIndex = state.routes.findIndex((item) => item.key === route.key);

    if (routeIndex === 4) {
      dispatch(logout());
    }
  };

  const renderTab = (route: (typeof state.routes)[number]) => {
    const routeName = route.name as TabRouteName;

    const routeIndex = state.routes.findIndex((item) => item.key === route.key);

    const isFocused = state.index === routeIndex;

    return (
      <Pressable
        key={route.key}
        onPress={() => handlePress(route)}
        onLongPress={() => handleLongPress(route)}
        style={[
          customTabBarStyles.tab,
          isFocused && customTabBarStyles.activeTab,
        ]}
      >
        <MagnetIcon
          name={tabIcons[routeName]}
          size={iconSize}
          color={isFocused ? "#160B20" : Colors.text.primary}
        />
      </Pressable>
    );
  };

  return (
    <View
      pointerEvents="box-none"
      style={[
        customTabBarStyles.wrapper,
        {
          left: horizontalSpace,
          right: horizontalSpace,
          bottom: bottomSpace,
          height: centerSize + 8,
          gap,
        },
      ]}
    >
      <TabGradientShell height={sideHeight}>
        {leftRoutes.map(renderTab)}
      </TabGradientShell>

      <Pressable onPress={() => handlePress(centerRoute)}>
        <TabGradientShell variant="center" size={centerSize}>
          <View
            style={[
              customTabBarStyles.centerButton,
              {
                width: centerSize - 10,
                height: centerSize - 10,
                borderRadius: (centerSize - 10) / 2,
              },
            ]}
          >
            <MagnetIcon
              name={tabIcons.Add}
              size={centerIconSize}
              color={Colors.text.primary}
            />
          </View>
        </TabGradientShell>
      </Pressable>

      <TabGradientShell height={sideHeight}>
        {rightRoutes.map(renderTab)}
      </TabGradientShell>
    </View>
  );
};

export default CustomTabBar;
