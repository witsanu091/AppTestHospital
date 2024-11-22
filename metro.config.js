const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

// Retrieve the default configuration
const defaultConfig = getDefaultConfig(__dirname);

// Add custom configurations if needed
const customConfig = {
  transformer: {
    // Support for SVG files, if used in your project
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    // Exclude SVG from asset extensions and add as source extensions
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  },
};

// Merge default configuration with custom configuration
module.exports = mergeConfig(defaultConfig, customConfig);
