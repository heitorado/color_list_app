/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import ColorItem from './src/components/ColorItem'

export class App extends Component {
  render(){
    return (
    <>
      <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ColorItem/>
        <ColorItem/>
        <ColorItem/>
        <ColorItem/>
        <ColorItem/>
        <ColorItem/>
        <ColorItem/>
      </ScrollView>
      </SafeAreaView>
    </>
  )};
};

export default App;
