import React, {useState, useEffect,useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  Alert
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const {height, width} = Dimensions.get('screen');

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reTypePassword, setReTypePassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [reTypePasswordVisible, setReTypePasswordVisible] = useState(false);


  const handleSignUp = async () => {
    if (!email || !password || !name || !reTypePassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
  
    if (password !== reTypePassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
  
    try {
      const value = await auth().createUserWithEmailAndPassword(email, password);
  
      const DATA = {
        Name: name,
        Email: email,
        Password: password,
        id: value.user.uid,
      };
      await firestore().collection('Users').doc(value.user.uid).set(DATA);
      // console.log('User data saved successfully');  
      navigation.navigate('Home');
    } catch (error) {
      console.log(error.message);
  
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error', 'This email address is already in use.');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Error', 'This email address is invalid.');
      } else if (error.code === 'auth/weak-password') {
        Alert.alert('Error', 'Password is too weak.');
      } else {
        Alert.alert('Error', 'Something went wrong. Please try again.');
      }
    } finally {
      setEmail('');
      setPassword('');
      setName('');
      setReTypePassword('');
    }
  };
  
  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <View style={{alignItems: 'center', marginVertical: 80}}>
        <Text style={{color: '#FFFFFF', fontSize: 30, fontWeight: 'bold'}}>
          Sign Up
        </Text>
        <Text style={{color: '#fff', fontSize: 12}}>
          {'Please sign in to your existing account'}
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={{padding: 10}}>Name</Text>
        <View style={{backgroundColor: '#F0F5FA'}}>
          <TextInput
            style={{borderRadius: 10, padding: 15, color: '#000'}}
            placeholder="Enter your Name..."
            placeholderTextColor={'#000'}
            value={name}
            onChangeText={setName}
          />
        </View>
        <Text style={{padding: 10}}>Email</Text>
        <View style={{backgroundColor: '#F0F5FA'}}>
          <TextInput
            style={{borderRadius: 10, padding: 15, color: '#000'}}
            placeholder="Enter your email..."
            placeholderTextColor={'#000'}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Text style={{padding: 10}}>Password</Text>
        <View style={styles.Input}>
          <TextInput
            style={{borderRadius: 10, color: '#000'}}
            placeholder="Enter your password..."
            placeholderTextColor={'#000'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={passwordVisible ? false : true}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? (
              <Image
                style={{resizeMode: 'contain', height: 20, width: 20}}
                source={require('../../../assest/image/Group.png')}
              />
            ) : (
              <Image
                style={{resizeMode: 'contain', height: 20, width: 20}}
                source={require('../../../assest/image/Group.png')}
              />
            )}
          </TouchableOpacity>
        </View>
        <Text style={{padding: 10}}>Re-enter Password</Text>

        <View style={styles.Input}>
          <TextInput
            style={{borderRadius: 10, color: '#000'}}
            placeholder="Re-enter your password..."
            placeholderTextColor={'#000'}
            value={reTypePassword}
            onChangeText={setReTypePassword}
            secureTextEntry={reTypePasswordVisible ? false : true}
          />
          <TouchableOpacity
            onPress={() => setReTypePasswordVisible(!reTypePasswordVisible)}>
            {reTypePasswordVisible ? (
              <Image
                style={{resizeMode: 'contain', height: 20, width: 20}}
                source={require('../../../assest/image/Group.png')}
              />
            ) : (
              <Image
                style={{resizeMode: 'contain', height: 20, width: 20}}
                source={require('../../../assest/image/Group.png')}
              />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => handleSignUp()} style={styles.login}>
          <Text style={{textAlign: 'center', color: '#fff'}}>SIGN UP</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',alignSelf:'center',width:width/1.8}}>
        <Text style={{color:'#000',textAlign:'center'}}>Already have an account? </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('LogIn')}>
          <Text style={{color:'#FF7622',fontWeight:'bold'}}>LogIn</Text>
      </TouchableOpacity>
      </View>
      </View>
     
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#000',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    width: width / 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: height / 1,
    padding: 10,
  },
  Input: {
    backgroundColor: '#F0F5FA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  login: {
    backgroundColor: '#FF7622',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    margin: 20,
  },
});

export default SignUp;
