# React Starter Kit
A boilterplate react application with network interceptors, error handling and routing.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Webpack configuration
This boilerplate uses [`react-app-rewired`](https://github.com/timarney/react-app-rewired) in order to modify webpack configs without ejecting. To learn more, visit [`react-app-rewired`](https://github.com/timarney/react-app-rewired).

## Environment Variables
You can add a `.env` file in the root directory of the project to use in the project. The starter kit has an `.env.example` file included to get started.

```sh
$ cp .env.example .env
```

Add your environment variables in `.env` file. Then use it in your project.

```js
console.log(process.env.APP_NAME)
```

## Advanced Environment Configuration
If you need to configure your project for multiple environments, (eg. `development`, `staging`, `production`, etc), you can modify the `config-overrides.js` file to add environments and respective `env` files.

You can inject a custom environment into the config file by adding shell arguments or modifying the `package.json` file.

```sh
$ yarn start --environment=staging
```
OR
```json
"start:staging": "react-app-rewired --environment:staging"
```

Next, in the `config-overrides.js` file, you receive the value in the `injectedEnvironment` variable. To map your custom environment to a `.env` file, modify the `getEnvironmentFile` function.

```js
function getEnvironmentFile(env) {
  switch (env) {
   case 'staging':
      return path.resolve('./.env.staging')
    default:
      return path.resolve('./.env');
  }
}
```

If you do not inject any environment, it will use the default `NODE_ENV` value and the `.env` file.
