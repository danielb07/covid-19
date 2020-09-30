import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';


import WelcomeScreen from './screen/WelcomeScreen';
import NewsScreen from './screen/NewsScreen'


export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  NewsScreen:{screen:NewsScreen}
})

const AppContainer =  createAppContainer(switchNavigator);