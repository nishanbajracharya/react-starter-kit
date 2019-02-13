const dotenv = require('dotenv');
const webpack = require('webpack');

const env = dotenv.config();

const envVariables = env.error ?  {} : Object.keys(env.parsed)
  .reduce((acc, key) => ({
    ...acc,
    [key]: JSON.stringify(env.parsed[key])
  }), {});

module.exports = function override(config, env) {
  //do stuff with the webpack config...

  const envPlugin = new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      ...envVariables
    }
  })

  config.plugins.push(envPlugin);

  return config;
}