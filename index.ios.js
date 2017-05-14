// index.ios.js - Place code in here for iOS


// 1: Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './App/Components/Header';
import AlbumList from './App/Components/AlbumList';


// 2: Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);


// 3: Render it to the device/screen
AppRegistry.registerComponent('albums', () => App);
