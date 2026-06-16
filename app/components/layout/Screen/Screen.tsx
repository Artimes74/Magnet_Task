import React, { forwardRef, useEffect } from 'react';
import { ActivityIndicator, Keyboard, ScrollView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import type { ScreenProps } from './types';

const Screen = forwardRef<
  View | ScrollView | KeyboardAwareScrollView,
  ScreenProps
>((props, ref) => {
  const {
    testID,
    children,
    style,
    loading = false,
    hasPaddingHorizontal = true,
    parentType = 'View',
    edges,
    safeAreaStyle,
    ...rest
  } = props;

  useEffect(() => {
    if (loading) {
      Keyboard.dismiss();
    }
  }, [loading]);

  const innerStyle = [
    styles.innerContainer,
    hasPaddingHorizontal && styles.padding,
    style,
  ];

  const renderParent = () => {
    if (parentType === 'KeyboardAwareScrollView') {
      return (
        <KeyboardAwareScrollView
          {...rest}
          testID={testID}
          ref={ref as React.Ref<KeyboardAwareScrollView>}
          keyboardShouldPersistTaps="handled"
          enableOnAndroid
          style={innerStyle}
        >
          {children}
        </KeyboardAwareScrollView>
      );
    }

    if (parentType === 'ScrollView') {
      return (
        <ScrollView
          {...rest}
          testID={testID}
          ref={ref as React.Ref<ScrollView>}
          keyboardShouldPersistTaps="handled"
          style={innerStyle}
        >
          {children}
        </ScrollView>
      );
    }

    return (
      <View
        {...rest}
        testID={testID}
        ref={ref as React.Ref<View>}
        style={innerStyle}
      >
        {children}
      </View>
    );
  };

  return (
    <SafeAreaView
      testID={testID}
      style={[styles.container, safeAreaStyle]}
      edges={edges}
    >
      <View style={styles.container}>
        {renderParent()}
        {loading && (
          <View style={styles.loadingStyle}>
            <ActivityIndicator />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
});

export default Screen;
