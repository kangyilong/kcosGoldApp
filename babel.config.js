module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '*': ['src/*'],
          '@pages/*': ['src/pages/*'],
          '@router/*': ['src/router/*'],
          '@components/*': ['src/components/*'],
          '@methods/*': ['src/methods/*'],
          '@api/*': ['src/api/*'],
          '@redux/*': ['src/reduxs/*'],
        },
      },
    ],
  ],
};
