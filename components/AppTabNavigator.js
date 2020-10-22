import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Main from '../screens/MainScreen';
import OrphanagesScreen from '../screens/OrphanagesScreen';

export const AppTabNavigator = createBottomTabNavigator({
    Donor : {
        screen : Main,
        navigationOptions : {
            //tabBarIcon : <Image source = {require('#')} style = {{width : 20, height : 20}}/>,
            tabBarLabel : 'Donor Screen'
        }
    },
    Orphanage : {
        screen : OrphanagesScreen,
        navigationOptions : {
            //tabBarIcon : <Image source = {require('#')} style = {{width : 20, height : 20}}/>,
            tabBarLabel : 'Orphanage Screen'
        }
    }
})