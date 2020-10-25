import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Main from '../screens/MainScreen';
import OrphanagesScreen from '../screens/OrphanagesScreen';

export const AppTabNavigator = createBottomTabNavigator({
    DonorScreen : {
        screen : Main,
        navigationOptions : {
            tabBarIcon : <Image source = {require('./')} style = {{width : 20, height : 20}}/>,
            tabBarLabel : 'Donor Screen'
        }
    },
    Orphanage : {
        screen : OrphanagesScreen,
        navigationOptions : {
            tabBarIcon : <Image source = {require('./')} style = {{width : 20, height : 20}}/>,
            tabBarLabel : 'Orphanage Screen'
        }
    }
},
{
    defaultNavigationOptions : ({navigation})=>({
        tabBarIcon:()=>{
            const routeName = navigation.state.routeName
            if(routeName == "DonorScreen"){
                return(
                    <Image
                    source = {require('../assets/donate.jpg')}
                    style = {{width : 50, height : 50}}/>
                )
            }
            else if(routeName == "Orphanage"){
                return(
                    <Image
                    source = {require('../assets/orph.jpg')}
                    style = {{width : 50, height : 50}}/>
                )  
            }
        }
    })
}
)