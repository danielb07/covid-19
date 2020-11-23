import React from 'react'
import {View} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CovidCase from '../screen/CovidCase'
import CovidHospital from '../screen/CovidHospital';
import MyTravelHistory from '../screen/MyTravelHistory'
import AboutMe from '../screen/AboutMe'



export const AppTabNavigator = createBottomTabNavigator({
  TestCenter : {
    screen: CovidHospital,
  },
  
  CovidCases:{
    screen: CovidCase,
  },
});

export default AppTabNavigator;
