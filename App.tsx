/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import store from 'reduxs';

import FillLoading from 'components/loading';
import HintDialog from 'components/hintDialog';

import Routes from 'router/index';

const App = () => {
    return (
        <Provider store={store}>
              <NavigationContainer>
                  <Routes />
                  <FillLoading />
                  <HintDialog />
              </NavigationContainer>
        </Provider>
    );
};

export default App;
