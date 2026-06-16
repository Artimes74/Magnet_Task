module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    "@babel/plugin-transform-export-namespace-from",
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        root: ["./src"],

        alias: {
          assets: "./src/assets",
          components: "./src/components",
          features: "./src/features",
          navigation: "./src/navigation",
          providers: "./src/providers",
          services: "./src/services",
          store: "./src/store",
          theme: "./src/theme",
          utils: "./src/utils",
          screens: "./src/screens",
        },
      },
    ],
  ],
};
