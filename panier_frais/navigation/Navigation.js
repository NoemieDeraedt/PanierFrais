import React from 'react'
import { createStackNavigator, } from 'react-navigation'
import Ratatouille from '../screens/plats/Ratatouille'

const RatatouilleStack = createStackNavigator({
    /*Ratatouille1: Ratatouille,*/
    Ratatouille: {screen: Ratatouille},
});

export default createStackNavigator({
    RatatouilleStack,
});