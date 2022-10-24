const { UniversalFederationPlugin } = require('@module-federation/node');

module.exports = {
  target: false,
  entry: './src/mapBook',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },
  plugins: [
    new UniversalFederationPlugin({
      isServer: true,
      name: 'app2',
      filename: 'remoteEntry.js',
      library: { type: 'commonjs-module' },
      exposes: {
        './mapBook': './src/mapBook',
      },
      remotes: {},
    }),
  ],
};
