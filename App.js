import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';


import WelcomeScreen from './screen/WelcomeScreen';
import {AppDrawer} from './components/AppDrawer'
import SignUpScreen from './screen/SignUpScreen'


export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  SignUpScreen:{screen:SignUpScreen},
  Drawer:{screen:AppDrawer}
})

const AppContainer =  createAppContainer(switchNavigator);