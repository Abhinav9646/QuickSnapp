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
const Onboarding = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <StatusBar hidden={true} />
      <View style={styles.Fav}>
        <Image
        style={{resizeMode:'contain',height:height/3,width:width/2}}
         source={require("../../../assest/image/Onboarding_02.png")}/>
      </View>
      <View style={{marginTop: 30}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#000',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          All your favorites
        </Text>
        <Text style={{color: '#98A8B8', margin: 20}}>
          {
            "Get all your loved foods in one once place,'\n'    you just place the orer we do the rest "
          }
        </Text>
      </View>
      <View style={{flexDirection: 'row', gap: 10}}>
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 50,
            backgroundColor: '#FF7622',
          }}></View>
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 50,
            backgroundColor: '#FFE1CE',
          }}></View>
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 50,
            backgroundColor: '#FFE1CE',
          }}></View>
        
      </View>
      <TouchableOpacity onPress={()=>navigation.replace('Onboarding1') }
        style=
        {{
          backgroundColor: '#FF7622',
          padding: 20,
          width: width / 1.2,
          borderRadius: 10,
          marginTop: 50,
        }}
        ><Text style={{color: '#fff', textAlign: 'center'}}>NEXT</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.replace('Onboarding1') }>

      <Text style={{margin: 20}}>Skip</Text>
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
    // backgroundColor: '#98A8B8',
    borderRadius: 10,
  },
});

export default Onboarding;
