import { primitive } from "theme/primitive/colors";

export const Colors = {
  background: {
    primary: primitive.black,
    secondary: primitive.purple950,
    tertiary: primitive.surface900,
    elevated: primitive.gray800,
    accent: primitive.blue10,
  },

  text: {
    primary: primitive.white,
    secondary: primitive.white50,
    disabled: primitive.gray500,
    inverse: primitive.black,
  },

  border: {
    primary: primitive.gray700,
    subtle: primitive.white06,
  },

  button: {
    primary: primitive.purple500,
    primaryPressed: primitive.purple300,
    primaryLight: primitive.purple400,
    disabled: primitive.gray500,
  },

  status: {
    success: primitive.green500,
    error: primitive.red500,
  },

  input: {
    background: primitive.white06,
    border: primitive.gray700,
    placeholder: primitive.gray500,
  },

  switch: {
    track: primitive.white08,
    active: primitive.purple500,
  },

  surface: {
    primary: primitive.purple950,
    secondary: primitive.surface900,
  },

  segmentedControl: {
    background: primitive.white06,
    label: primitive.white50,
    activeLabel: primitive.white,
  },

  indicator: {
    track: primitive.white08,
    active: primitive.purple500,
  },

  chip: {
    background: primitive.blue10,

    text: primitive.blue500,
  },

  overlay: {
    light: primitive.white06,
    medium: primitive.white08,
  },
} as const;
