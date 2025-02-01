/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext, createContext,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './scr/Navigation/StackNavigation/stack';
import {UidProvider} from './scr/Screen/UidContext';
import notifee from '@notifee/react-native';
import  messaging from '@react-native-firebase/messaging';
import{Provider} from 'react-redux';
import Store from './scr/Components/Reduxs/Store';
 

const App = () => {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      // console.log('Authorization status:', authStatus);
    }
  }
  const getToken = async () => {
    const token = await messaging().getToken();
    // console.log(token, 'token');
  };
  useEffect(() => {
    getToken();
    requestUserPermission();
  }, []);

  async function onDisplayNotification(remoteMessage) {
    // Request permissions (required for iOS)

    
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: remoteMessage?.notification?.title,
      body: remoteMessage?.notification?.body,
      android: {
        channelId,
        // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      onDisplayNotification(remoteMessage)
    });
    return unsubscribe;
  }, []);

  return (
    <Provider store={Store}>
    <UidProvider>
      <NavigationContainer> 
        <StackNavigation />
      </NavigationContainer>
    </UidProvider>
    </Provider>
  );
};

export default App;
