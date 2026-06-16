module.exports = {
  testEnvironment: 'node',

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testMatch: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*.test.tsx'],

  moduleNameMapper: {
    '^react-native$': '<rootDir>/__mocks__/react-native.js',
    '^components/atom/Icon/Icon$': '<rootDir>/__mocks__/Icon.js',
    '^react-native-vector-icons/(.*)$': '<rootDir>/__mocks__/Icon.js',
    '^react-native-fast-image$':
      '<rootDir>/__mocks__/react-native-fast-image.js',
    '^react-native-keyboard-accessory$':
      '<rootDir>/__mocks__/react-native-keyboard-accessory.js',
    '^react-native-linear-gradient$':
      '<rootDir>/__mocks__/react-native-linear-gradient.js',
    '^react-native-svg$': '<rootDir>/__mocks__/react-native-svg.js',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^react-native-vector-icons/lib/create-icon-set-from-icomoon$':
      '<rootDir>/__mocks__/createIconSetFromIcoMoon.js',
    '^react-native-reanimated$':
      '<rootDir>/__mocks__/react-native-reanimated.js',

    '^react-native-vector-icons/lib/create-icon-set-from-icomoon$':
      '<rootDir>/__mocks__/createIconSetFromIcoMoon.js',

    '^features/(.*)$': '<rootDir>/app/features/$1',
    '^components/(.*)$': '<rootDir>/app/components/$1',
    '^theme/(.*)$': '<rootDir>/app/theme/$1',
    '^store/(.*)$': '<rootDir>/app/store/$1',
  },
};
