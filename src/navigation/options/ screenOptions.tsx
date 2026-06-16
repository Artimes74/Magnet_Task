import React from "react";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { MagnetAppBar, IconKeys } from "components";

type Props = {
  title?: string;
  backgroundColor?: string;
  leftIconName?: IconKeys;
  onPressLeftIcon?: () => void;
  LeftComponent?: React.ReactNode;
  RightComponent?: React.ReactNode;
};

export const magnetScreenOptions = (
  props: Props,
): NativeStackNavigationOptions => {
  const {
    title,
    backgroundColor = "transparent",
    leftIconName = "back-button",
    onPressLeftIcon,
    LeftComponent,
    RightComponent,
  } = props;

  return {
    headerShown: true,
    headerShadowVisible: false,
    headerTransparent: true,
    header: ({ options, navigation }) => (
      <SafeAreaView edges={["top"]} style={{ backgroundColor }}>
        <MagnetAppBar
          {...props}
          title={options.headerTitle?.toString() || title}
          leftIconName={leftIconName}
          LeftComponent={LeftComponent}
          RightComponent={RightComponent}
          onPressLeftIcon={onPressLeftIcon || navigation.goBack}
        />
      </SafeAreaView>
    ),
  };
};
