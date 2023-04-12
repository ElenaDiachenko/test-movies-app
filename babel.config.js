module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
        },
      ],
      [
        'module-resolver',
        {
          alias: {
            navigation: './src/navigation',
            components: './src/components',
            screens: './src/screens',
            stores: './src/stores',
            utils: './src/utils',
            styles: './src/styles',
            types: './src/types',
            hooks: './src/hooks',
            src: './src',
          },
        },
      ],
    ],
  };
};
