import React from "react";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { styles } from "./styles";
import type { ISwapListItem } from "./types";

const ACTION_WIDTH = 76;
const OPEN_VALUE = -ACTION_WIDTH;

let openedCloser: (() => void) | null = null;

export const closeOpenedSwipeable = () => {
  openedCloser?.();
  openedCloser = null;
};

const SwipeableListItem = ({
  children,
  RightAction,
  enabled = true,
}: ISwapListItem) => {
  const translateX = useSharedValue(0);
  const startX = useSharedValue(0);

  const closeSelf = () => {
    translateX.value = withTiming(0, { duration: 120 });
  };

  const openSelf = () => {
    translateX.value = withTiming(OPEN_VALUE, { duration: 120 });
  };

  const registerOpen = () => {
    if (openedCloser && openedCloser !== closeSelf) {
      openedCloser();
    }

    openedCloser = closeSelf;
  };

  const unregisterOpen = () => {
    if (openedCloser === closeSelf) {
      openedCloser = null;
    }
  };

  const gesture = Gesture.Pan()
    .activeOffsetX([-10, 10])
    .failOffsetY([-8, 8])
    .onBegin(() => {
      startX.value = translateX.value;
    })
    .onUpdate((event) => {
      let nextValue = startX.value + event.translationX;

      if (nextValue < OPEN_VALUE) {
        nextValue = OPEN_VALUE;
      }

      if (nextValue > 0) {
        nextValue = 0;
      }

      translateX.value = nextValue;
    })
    .onEnd(() => {
      const shouldOpen = translateX.value < -ACTION_WIDTH / 2;

      if (shouldOpen) {
        translateX.value = withTiming(OPEN_VALUE, { duration: 120 });
        runOnJS(registerOpen)();
      } else {
        translateX.value = withTiming(0, { duration: 120 });
        runOnJS(unregisterOpen)();
      }
    });

  const itemStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const actionStyle = useAnimatedStyle(() => ({
    opacity: translateX.value < -10 ? 1 : 0,
  }));

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <View style={styles.root}>
      <Animated.View
        style={[styles.rightAction, { width: ACTION_WIDTH }, actionStyle]}
      >
        <LinearGradient
          style={styles.gradient}
          start={{ x: 1, y: 0.5 }}
          end={{ x: 0, y: 0.5 }}
          colors={["rgba(0,0,0,1)", "rgba(194,158,255,0)"]}
        >
          {RightAction}
        </LinearGradient>
      </Animated.View>

      <GestureDetector gesture={gesture}>
        <Animated.View style={itemStyle}>{children}</Animated.View>
      </GestureDetector>
    </View>
  );
};

export default SwipeableListItem;
