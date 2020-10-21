import React from 'react'
import {View} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CovidCase from '../screen/CovidCase'
import Dummy from '../screen/Dummy';


export const AppTabNavigator = createBottomTabNavigator({
  News : {
    screen: CovidCase,
  },
  Next : {
    screen: Dummy,
  }
});

export default AppTabNavigator;
