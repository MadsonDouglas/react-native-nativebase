import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

import { createBottomTabNavigator, createAppContainer } from "react-navigation"

import Home from '../pages/Home'
import Auth from '../pages/Formik'
import Navegar from '../pages/Navegar'
import Settings from '../pages/Settings'

const Routes = createBottomTabNavigator({
    home: {
        screen: Home,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Icon name="home" size={26} color={tintColor} />
                )
            }
        })
    },
    navegar: {
        screen: Navegar,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Icon name="search" size={26} color={tintColor} />
                )
            }
        })
    },
    token: {
        screen: Auth,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Icon name="lock" size={26} color={tintColor} />
                )
            }
        })
    },
    settings: {
        screen: Settings,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Icon name="user-o" size={26} color={tintColor} />
                )
            }
        })
    }
});

const AppContainer = createAppContainer(Routes)

export default AppContainer;