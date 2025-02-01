/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartApp from '../../Screen/StartApp';
import Onboarding from '../../Screen/Onboarding';
import Onboarding1 from '../../Screen/Onboarding1';
import Onboarding2 from '../../Screen/Onboarding2';
import SignUp from '../../Screen/SignUp';
import LogIn from '../../Screen/LogIn';
import Home from '../../Screen/Home';
import Calculator from '../../Screen/calculator';
import JavaScreen from '../../Screen/JavaScreen/java';
import Search from '../../Screen/Search/search';
import Profile from '../../Screen/Profile/Profile';
import PersonalInfo from '../../Screen/PersonalInfo/Personal';
import Animation from '../../Screen/Animation/animation';
import Instagram from '../../Screen/Instagram/Instagram';
import TabNavigation from '../TabNavigation/tabNavigation';
import Details from '../../Screen/Details/Details';
import Reducer from '../../Screen/Reducer/reducer';
import NewScreen from '../../Screen/NewScreen';
import Burger from '../../Components/Burger/Burger';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Burger"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="StartApp" component={StartApp} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Onboarding2" component={Onboarding2} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Calculator" component={Calculator} />
      <Stack.Screen name="JavaScreen" component={JavaScreen} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="Animation" component={Animation} />
      <Stack.Screen name="Instagram" component={Instagram} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Reducer" component={Reducer} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="NewScreen" component={NewScreen} />
      <Stack.Screen name="Burger" component={Burger} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
