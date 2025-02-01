import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
const {width, height} = Dimensions.get('screen');
const StartApp = ({navigation}) => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const fetchUserData = async () => {
    try {
      const currentUser = auth().currentUser;
      if (currentUser) {
        const uid = currentUser.uid;
        const userDoc = await firestore().collection('Users').doc(uid).get();
        // console.log(userDoc._data.id,'data id')
        if (userDoc._data.id===uid) {
          setData(userDoc._data.id);

        } else {
          console.log('No user data found!');
          setData(null);
        }
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      // setLoading(false); 
    }
  };
  // if (loading) {
  //   return <ActivityIndicator style={Styles.loader} />;
  // }
  
  
  useEffect(() => {
    const initialize = async () => {
      // setLoading(false);
      await fetchUserData();
      if (data != null) {
        console.log(data, 'userid');
        navigation.replace('Home');
      } else {
        navigation.replace('Onboarding');
      }
    };
  
    initialize();
  }, []);
    return (
    <View style={Styles.Container}>
      <StatusBar hidden={true} />

      <Image
        style={{resizeMode: 'contain', width: width / 2}}
        source={require('../../../assest/image/Logo.png')}
      />
      <View
        style={{
          width: width / 1,
          position: 'absolute',
          bottom: 0,
          alignItems: 'flex-end',
        }}>
        <Image
          style={{resizeMode: 'contain', height: 200, width: 200}}
          source={require('../../../assest/image/Ellipse.png')}
        />
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // margin: 0,
    // padding: 10,
  },
  loader: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default StartApp;
