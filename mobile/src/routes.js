import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {createStackNavigator} from 'react-navigation-stack';

import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import DeliveryDetails from './pages/DeliveryDetails';
import ViewProblem from './pages/ViewProblem';
import ConfirmDelivery from './pages/ConfirmDelivery';
import InformProblem from './pages/InformProblem';

export default createAppContainer(
  createSwitchNavigator({
    Sign: createSwitchNavigator({
      SignIn,
    }),
    App: createBottomTabNavigator(
      {
        HelpOrderStudent: {
          screen: createStackNavigator(
            {
              Dashboard,
              DeliveryDetails,
              ViewProblem,
              ConfirmDelivery,
              InformProblem,
            },
            {
              defaultNavigationOptions: {
                //headerTransparent: true,
                headerLeftContainerStyle: {
                  marginLeft: 20,
                },
                headerStyle: {
                  shadowColor: 'transparent',
                  shadowRadius: 0,
                  shadowOffset: {
                    height: 0,
                  },
                },
              },
            },
          ),
          navigationOptions: {
            tabBarLabel: 'Entregas',
            tabBarIcon: ({tintColor}) => (
              <Icon name="reorder" size={20} color={tintColor} />
            ),
          },
        },
        Profile,
      },
      {
        //resetOnBlur: true,
        tabBarOptions: {
          keyboardHidesTabBar: true,
          activeTintColor: '#7D40E7',
          inactiveTintColor: '#999',
        },
      },
    ),
  }),
);
