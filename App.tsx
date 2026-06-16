import React from "react";
import { ImageBackground } from "react-native";

import { AppProvider } from "providers";
import { RootNavigator } from "navigation";

import bg from "./src/assets/images/bg.png";

const App = () => {
  return (
    <AppProvider>
      <ImageBackground source={bg} style={{ flex: 1 }} resizeMode="cover">
        <RootNavigator />
      </ImageBackground>
    </AppProvider>
  );
};

export default App;
