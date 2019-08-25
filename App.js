/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Scene, Router } from 'react-native-router-flux';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login"
          component={LoginScreen}
          title="Login"
          initial
        />
        <Scene
          key="welcome"
          component={WelcomeScreen}
          title="Welcome"
        />
      </Scene>
    </Router>
  );
}

export default App;
