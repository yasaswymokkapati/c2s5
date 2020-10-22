import * as React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Food from './screens/FoodScreen.js';
import Main from './screens/MainScreen.js';
import Book from './screens/BooksScreen';
import Clothes from './screens/ClothesScreen';
import Groceries from './screens/GroceriesScreen';
import Medicines from './screens/MedicinesScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import OrphanagesScreen from './screens/OrphanagesScreen';
import RegisterScreen from './screens/RegisterScreen';
import CheckingScreen from './screens/CheckingScreen';

export const AppStackNavigator = createStackNavigator({
    Main : {
        screen : Main,
        navigationOptions : {
            headerShown : false,
        }
    },
    Food : {
        screen : Food,
        navigationOptions : {
            headerShown : false,
        }
    },
    Clothes : {
        screen : Clothes,
        navigationOptions : {
            headerShown : false,
        }
    },
    Medicines : {
        screen : Medicines,
        navigationOptions : {
            headerShown : false,
        }
    },
    Groceries : {
        screen : Groceries,
        navigationOptions : {
            headerShown : false,
        }
    },
    Books : {
        screen : Book,
        navigationOptions : {
            headerShown : false,
        }
    },
  initialRouteName : 'Main'  
})