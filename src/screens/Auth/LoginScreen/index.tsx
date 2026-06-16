import React, { useState } from "react";
import { View } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import {
  MagnetButton,
  MagnetInput,
  MagnetKeyboardAccessory,
  Screen,
} from "components";
import {
  LoginFormValues,
  loginSchema,
  setCredentials,
  useLogin,
} from "features";
import { useAppDispatch } from "store";

import styles from "./styles";

const LoginScreen = () => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dispatch = useAppDispatch();

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
      onSuccess: (response) => {
        dispatch(
          setCredentials({
            token: response.token,
          }),
        );
      },

      onError: (error) => {
        setLoginError("Wrong Input");
        console.log({ error });
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
                      shouldValidate: false,
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
                    shouldValidate: false,
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
                style={styles.textButtonStyle}
                titleStyle={styles.errorTitleStyle}
                leftIconName="triangle-exclamation"
                leftIconSize={20}
                leftIconColor="#F24822"
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
