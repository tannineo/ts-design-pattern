module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/tests'],

  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],

  testPathIgnorePatterns: ['/node_modules/', 'stories.tsx'],

  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },

  transform: {
    '\\.tsx?$': 'ts-jest',
  },
}
