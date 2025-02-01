import React, {useState} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Instagram from '../../Screen/Instagram/Instagram';
import Home from '../../Screen/Home';
import PersonalInfo from '../../Screen/PersonalInfo/Personal';
import Profile from '../../Screen/Profile/Profile';
import Reducer from '../../Screen/Reducer/reducer';
import Animation from '../../Screen/Animation/animation';

const Tab = createBottomTabNavigator();

const TabNavigation = ({navigation}) => {
  return (
    
    <Tab.Navigator

      initialRouteName="Instagram"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarLabelStyle: {fontSize: 12,color:'#000'},
          tabBarIcon: () => {
            return (
              <Image
                style={{tintColor: '#055294',height:30,width:30}}
                source={require('../../../assest/image/homepage.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Instagram"
        component={Instagram}
        options={{
            title: 'Reels',

          tabBarLabelStyle: {fontSize: 12},

          tabBarIcon: () => {
            return (
              <Image
                style={{tintColor: '#055294', height: 20, width: 20}}
                source={require('../../../assest/image/Star.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Animation"
        component={Animation}
        options={{
            title: 'Animation',

          tabBarLabelStyle: {fontSize: 12},

          tabBarIcon: () => {
            return (
              <Image
                style={{tintColor: '#055294', height: 20, width: 20}}
                source={require('../../../assest/image/search.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Reducer"
        component={Reducer}
        options={{
            title: 'Reducer',

          tabBarLabelStyle: {fontSize: 12},
          tabBarIcon: () => {
            return (
              <Image
                style={{tintColor: '#055294', height: 20, width: 20}}
                source={require('../../../assest/image/fb.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
