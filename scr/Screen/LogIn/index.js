import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { UidContext } from '../UidContext'; 

const { height, width } = Dimensions.get('screen');

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { setUid } = useContext(UidContext); 

  const handleLogin = async () => {
    try {
      const Users = await auth().signInWithEmailAndPassword(email, password);
      setUid(Users.user.uid);
      navigation.replace('Home');
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <View style={{ alignItems: 'center', marginVertical: 100 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 30, fontWeight: 'bold' }}>
          Log In
        </Text>
        <Text style={{ color: '#fff', fontSize: 12 }}>
          {'Please sign in to your existing account'}
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={{ padding: 10 }}>Email</Text>
        <View style={{ backgroundColor: '#F0F5FA' }}>
          <TextInput
            style={{ borderRadius: 10, padding: 15, color: '#000' }}
            placeholder="Enter your email..."
            placeholderTextColor={'#000'}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Text style={{ padding: 10 }}>Password</Text>
        <View style={styles.Input}>
          <TextInput
            style={{ borderRadius: 10, color: '#000' }}
            placeholder="Enter your password..."
            placeholderTextColor={'#000'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <Image
              style={{ resizeMode: 'contain', height: 20, width: 20 }}
              source={require('../../../assest/image/Group.png')}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={{ color: '#FF7622', margin: 10, textAlign: 'right' }}>
            Forget Password
          </Text>
        </TouchableOpacity>
        <Text>{message}</Text>
        <TouchableOpacity onPress={handleLogin} style={styles.login}>
          <Text style={{ textAlign: 'center', color: '#fff' }}>LOG IN</Text>
        </TouchableOpacity>
        <View style={{ margin: 10, flexDirection: 'row', alignSelf: 'center' }}>
          <Text>Don't have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ color: '#FF7622', fontWeight: 'bold' }}>SIGN UP</Text>
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
  },
  login: {
    backgroundColor: '#FF7622',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});

export default LogIn;
