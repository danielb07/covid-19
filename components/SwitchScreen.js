import React from 'react'
import {View} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CovidCase from '../screen/CovidCase'
import CovidHospitals from '../screen/CovidHospitals';
import MyTravelHistory from '../screen/MyTravelHistory'
import AboutMe from '../screen/AboutMe'



export const AppTabNavigator = createBottomTabNavigator({
  TestCenter : {
    screen: CovidHospitals,
  },
  
  CovidCases:{
    screen: CovidCase,
  },
});

export default AppTabNavigator;
