import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import AddQuizCard from '../components/AddQuizCard';
import Decks from '../components/Decks';
import AddDeck from '../components/AddDeck';
import DeckDetail from '../components/DeckDetail';
import CustomQuiz from '../components/CustomQuiz';
import FlashCardSettings from '../components/FlashCardSettings';

import { darkGray, white, green, lightGreen } from '../utils/colors';

const isIOS = Platform.OS === 'ios' ? true : false;

const routeConfigs = {
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name={isIOS ? 'ios-bookmarks' : 'md-bookmarks'}
          size={30}
          color={tintColor}
        />
      )
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => (
        <Feather name="plus-square" size={30} color={tintColor} />
      )
    }
  },
  FlashCardSettings: {
    screen: FlashCardSettings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="sliders" size={30} color={tintColor} />
      )
    }
  }
};

routeConfigs.FlashCardSettings.navigationOptions.tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};
routeConfigs.AddDeck.navigationOptions.tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};
routeConfigs.Decks.navigationOptions.tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};

const tabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  defaultNavigationOptions: {
    bounces: true
  },
  tabBarOptions: {
    activeTintColor: green,
    style: {
      height: 80,
      backgroundColor: white,
      shadowColor: 'rgba(0,0,0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 8,
      shadowOpacity: 2,
      borderTopWidth: 2,
      borderTopColor: darkGray
    },
    labelStyle: {
      paddingTop: 3,
      fontSize: 14,
      fontWeight: "bold"
    },
    tabStyle: {
      marginTop: 8,
      marginBottom: 4
    },
    showIcon: true
  }
};

const Tabs = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Tabs
    },
    DeckDetail: {
      screen: DeckDetail,
      navigationOptions: {
        headerTintColor: green,
        headerStyle: {
          backgroundColor: lightGreen
        },
        title: 'Deck Details'
      }
    },
    AddQuizCard: {
      screen: AddQuizCard,
      navigationOptions: {
        headerTintColor: green,
        headerStyle: {
          backgroundColor: lightGreen
        },
        headerTitleStyle: {
          justifyContent: 'center',
          textAlign: 'center'
        },
        title: 'Add Card'
      }
    },
    CustomQuiz: {
      screen: CustomQuiz,
      navigationOptions: {
        headerTintColor: green,
        headerStyle: {
          backgroundColor: lightGreen
        }
      }
    },
   
  },
  { headerLayoutPreset: 'center' }
);

export default MainNavigator;
