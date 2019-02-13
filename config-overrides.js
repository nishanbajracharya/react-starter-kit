const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const argv = require('minimist')(process.argv.slice(2));

function getEnvironmentFile(env) {
  switch (env) {
    case 'example':
      return path.resolve('./.env.example')
    default:
      return path.resolve('./.env');
  }
}

module.exports = function override(config, environment) {
  // Inject environment using shell arguments or in package.json.
  // This does not override NODE_ENV and is only limited to this file.
  // Use this to choose env files for different environments
  // Eg: $ yarn start --environment=production
  const injectedEnvironment = argv.environment || environment;
  console.log('Enviromnent:', injectedEnvironment);

  const envPath = getEnvironmentFile(injectedEnvironment);
  console.log('Env file:', envPath);

  const env = dotenv.config({
    path: envPath
  });

  const envVariables = env.error ?  {} : Object.keys(env.parsed)
    .reduce((acc, key) => ({
      ...acc,
      [key]: JSON.stringify(env.parsed[key])
    }), {});

  const envPlugin = new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      ...envVariables
    }
  })

  config.plugins.push(envPlugin);

  return config;
}