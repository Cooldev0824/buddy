import { View, Text } from 'react-native'
import React from 'react'

import Icon from "react-native-vector-icons/Feather";

import { Provider } from 'react-redux';
import store from '../store'; // Adjust the path as necessary
import MainChat from './MainChat';

export default function HomeScreen() {

  return (
    <Provider store={store}>
      <MainChat/>
    </Provider>
  );
}