import React from 'react'
import {View} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CovidCase from '../screen/CovidCase'
import CovidHospitals from '../screen/CovidHospitals';
import MyTravelHistory from '../screen/MyTravelHistory'
import AboutMe from '../screen/AboutMe'
import Covidcontacts from '../screen/CovidContacts'



export const AppTabNavigator = createBottomTabNavigator({
    TestCenter : {
      screen: CovidHospitals,
    },
    
    CovidCases:{
      screen: CovidCase,
    },
    Contacts:{
      screen:Covidcontacts
    }
  },
  {
    labeled: true,
    initialRouteName: 'TestCenter',
    activeTintColor: '#FF9800',
    inactiveTintColor: 'black',
    barStyle: { 
      backgroundColor: '#FF9800',
      
    }, 
  }, 
);

export default AppTabNavigator;
