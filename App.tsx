import React from 'react';

import { AppProvider } from 'providers';
import { RootNavigator } from 'navigation';
import { ImageBackground } from 'react-native';
import bg from './app/assets/images/bg.png';

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
