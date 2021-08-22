import React from 'react';
import {Splash, GetStarted} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import FlashMessage from 'react-native-flash-message';
import {LogBox} from 'react-native';

const App = () => {
  LogBox.ignoreLogs(['Setting', "Can't Perform"]);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
