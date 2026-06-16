module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-transform-export-namespace-from',
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./app'],

        alias: {
          assets: './app/assets',
          components: './app/components',
          features: './app/features',
          navigation: './app/navigation',
          providers: './app/providers',
          services: './app/services',
          store: './app/store',
          theme: './app/theme',
          utils: './app/utils',
          screens: './app/screens',
        },
      },
    ],
  ],
};
