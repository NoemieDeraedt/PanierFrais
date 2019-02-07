import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import IngredientsScreen from '../screens/IngredientsScreen';
import InfosScreen from '../screens/InfosScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Accueil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'}
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: IngredientsScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Ingrédients',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: InfosScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Infos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'md-information-circle-outline'}
    />
  ),
};

export default createDrawerNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
