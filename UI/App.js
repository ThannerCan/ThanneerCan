
import React from 'react';
import {
  Button,
  StyleSheet,
  Text, View
} from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import Test from './src/components/Test';
import SplashScreen from './src/components/organisms/SplashScreen';

import store from './src/store';


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const App = () => {

  return (
    <Provider store={store}>
      <SplashScreen />
      </Provider>
  );
};

export default App;
