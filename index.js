// prettier-ignore
import './shim';

import { AppRegistry, LogBox } from 'react-native';

import App from './App';
import { name as appName } from './app.json';

LogBox.ignoreLogs([
  // FIXME: Task orphaned for request warnings
  'Task orphaned for request',

  // https://github.com/tradle/react-native-crypto/issues/30
  'Require cycle',
]);

AppRegistry.registerComponent(appName, () => App);
