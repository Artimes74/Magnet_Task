import React from "react";
import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";

import { MagnetAppBar, IAppBarProps } from "components";

type Props = IAppBarProps & {
  backgroundColor?: string;
};

export const MagnetTabScreenOptions = (
  props: Props,
): BottomTabNavigationOptions => {
  const { title, backgroundColor = "transparent", onPressLeftIcon } = props;

  return {
    headerShown: true,
    headerShadowVisible: false,
    headerTransparent: false,
    header: ({ options, navigation }) => (
      <SafeAreaView edges={["top"]} style={{ backgroundColor }}>
        <MagnetAppBar
          {...props}
          title={options.headerTitle?.toString() || title}
          onPressLeftIcon={onPressLeftIcon}
        />
      </SafeAreaView>
    ),
  };
};
