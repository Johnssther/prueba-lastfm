/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';

import Artist from './src/screens/artist/artists' 
import Header from './src/components/header/header'
import Loading from './src/components/loading/loading'

import { Provider } from 'react-redux'
import {store, persistor} from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>

        <SafeAreaView style={{backgroundColor:'#fff'}}>
          <StatusBar/>
          <Header />
          <ScrollView>  
            <Artist />
          </ScrollView>
        </SafeAreaView>

      </PersistGate>
    </Provider>    
  );
};

export default App;