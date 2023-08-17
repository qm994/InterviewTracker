/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {decode, encode} from 'base-64';

//fix axios atob issue in react-native project

if (!globalThis.btoa) {
    globalThis.btoa = encode;
}

if (!globalThis.atob) {
    globalThis.atob = decode;
}

AppRegistry.registerComponent(appName, () => App);
