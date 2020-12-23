import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FB from './screens/fb';
import IN from './screens/in';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component() {
  return ( 
    <AppContainer/>
  );
} 

const bottomTabNavigator = createBottomTabNavigator ({
  fb : {screen:fb} ,
  in : {screen:in}
})
const AppContainer =  createAppContainer(bottomTabNavigator);

