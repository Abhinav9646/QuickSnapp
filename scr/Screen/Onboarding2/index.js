import React from 'react';
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
const {height, width} = Dimensions.get('screen');

const Onboarding2 = ({navigation}) => {
  const handleNavigation = () => {
    navigation.replace('SignUp');
  };

  return (
    <View style={styles.Container}>
      <StatusBar hidden={true} />
      <View style={styles.Fav}>
        <Image
          style={styles.FavImage}
          source={require('../../../assest/image/Onboarding_04.png')}
        />
      </View>
      <View style={{marginTop: 30}}>
        <Text style={styles.Title}>Free delivery offers</Text>
        <Text style={styles.Description}>
          Get all your loved foods in one place, {'\n'}
          you just place the order, we do the rest.
        </Text>
      </View>
      <View style={{flexDirection: 'row', gap: 10}}>
        <View style={[styles.Indicator, styles.InactiveIndicator]}></View>
        <View style={[styles.Indicator, styles.InactiveIndicator]}></View>
        <View style={[styles.Indicator, styles.ActiveIndicator]}></View>
      </View>
      <TouchableOpacity onPress={handleNavigation} style={styles.Button}>
        <Text style={styles.ButtonText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 0,
    padding: 5,
  },
  Fav: {
    height: height / 3,
    width: width / 2,
    borderRadius: 10,
  },
  FavImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  Title: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  Description: {
    color: '#98A8B8',
    margin: 20,
    textAlign: 'center',
  },
  Indicator: {
    height: 10,
    width: 10,
    borderRadius: 50,
  },
  ActiveIndicator: {
    backgroundColor: '#FF7622',
  },
  InactiveIndicator: {
    backgroundColor: '#FFE1CE',
  },
  Button: {
    backgroundColor: '#FF7622',
    padding: 20,
    width: '80%',
    borderRadius: 10,
    marginTop: 50,
  },
  ButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Onboarding2;
