import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";

import {
  MagnetButton,
  MagnetInput,
  MagnetKeyboardAccessory,
  Screen,
} from "components";
import { LoginFormValues, loginSchema, useLogin } from "features";

import { Colors } from "theme/colors";
import styles from "./styles";

const LoginScreen = () => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { mutate, isPending, isError, error } = useLogin();

  const {
    control,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginFormValues) => {
    mutate(data, {
      onError: () => {
        setLoginError("Wrong Input");
      },
    });
  };

  return (
    <Screen
      parentType="KeyboardAwareScrollView"
      style={styles.container}
      enableAutomaticScroll={false}
      keyboardShouldPersistTaps={"handled"}
      bounces={false}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <View style={styles.wrapper}>
        <View style={styles.formContainer}>
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange, onBlur } }) => (
              <MagnetInput
                testID="login-email-input"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Your email"
                leftIconName="mail-alt-3"
                hasError={!!errors.email || !!loginError}
                ErrorText={errors.email?.message}
                hasClear={value?.length > 0}
                editable={!isPending}
                onPressClear={() => {
                  setLoginError(null);
                  clearErrors("email"),
                    setValue("email", "", {
                      shouldDirty: true,
                      shouldValidate: true,
                    });
                }}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange, onBlur } }) => (
              <MagnetInput
                testID="login-password-input"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={!showPassword}
                placeholder="Password"
                leftIconName="key-alt"
                hasError={!!errors.password || !!loginError}
                ErrorText={errors.password?.message}
                rightIconName={showPassword ? "eye-icon" : "eye-slash-icon"}
                hasClear={value?.length > 0}
                onPressRightIcon={() => setShowPassword(!showPassword)}
                editable={!isPending}
                onPressClear={() => {
                  setLoginError(null);
                  clearErrors("password");
                  setValue("password", "", {
                    shouldDirty: true,
                    shouldValidate: true,
                  });
                }}
              />
            )}
          />
          <View style={styles.actionContainer}>
            {loginError && (
              <MagnetButton
                type="Text"
                title={loginError}
                titleStyle={styles.errorTitleStyle}
                leftIconName="triangle-exclamation"
                leftIconSize={20}
                leftIconColor={Colors.status.error}
              />
            )}
            <MagnetButton
              type={"Text"}
              title={"Forgot Your Password?"}
              style={styles.textButtonStyle}
              titleStyle={styles.textButtonTitleStyle}
            />
          </View>
        </View>
        <MagnetKeyboardAccessory
          testID="login-submit-button"
          type="Gradient"
          title={"Login"}
          accessoryProps={{ avoidKeyboard: true, inSafeAreaView: true }}
          disabled={!isValid}
          isLoading={isPending}
          leftIconName="arrow-right-to-bracket"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </Screen>
  );
};

export default LoginScreen;
