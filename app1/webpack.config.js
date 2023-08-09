const { UniversalFederationPlugin } = require('@module-federation/node');
const deps = require('./package.json').dependencies;

module.exports = {
  target: false,
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new UniversalFederationPlugin({
      isServer: true,
      name: 'app1',
      filename: 'remoteEntry.js',
      library: { type: 'commonjs-module' },
      shared: {
        ...deps,
      },
      remotes: {
        app2: 'app2@http://localhost:3002/remoteEntry.js',
      },
    }),
  ],
};
