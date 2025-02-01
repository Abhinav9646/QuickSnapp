import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Entypo from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const {height, width} = Dimensions.get('screen');

const PersonalInfo = ({navigation}) => {
  const [imageUri, setImageUri] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth().currentUser;
        if (currentUser) {
          const uid = currentUser.uid;

          const userDoc = await firestore().collection('Users').doc(uid).get();
          if (userDoc.exists) {
            setData(userDoc.data());
          } else {
            console.log('No user data found!');
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <ActivityIndicator style={styles.loader} />;
  }
  const pickImage = async () => {
    const options = {mediaType: 'photo', quality: 1};
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const uri = response.assets?.[0]?.uri || null;
        setImageUri(uri);
      }
    });
  };

  const renderItem = ({item}) => (
    <View style={styles.profileItem}>
      <View style={styles.iconContainer}>
        <Entypo name={item.Icons} size={25} color={item.color} />
      </View>
      <Text style={styles.itemText}>
        {item.title}
        {'\n'}
        <Text style={styles.profileSubText}>{item.details}</Text>
      </Text>
    </View>
  );

  const DATA = [
    {
      id: '1',
      title: 'Full Name',
      color: '#FB6F3D',
      Icons: 'account',
      details: data?.Name || 'Loading...',
    },
    {
      id: '2',
      title: 'Email',
      color: '#413DFB',
      Icons: 'mail',
      details: data?.Email || 'Loading...', 
    },
    {
      id: '3',
      title: 'Phone Number',
      color: '#369BFF',
      Icons: 'phone',
      details: data?.Phone || 'Loading...',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => navigation.goBack()}>
          <Entypo name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Personal Info</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.profileSection}>
        <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
          {imageUri ? (
            <Image source={{uri: imageUri}} style={styles.image} />
          ) : (
            <Text style={styles.imagePlaceholder}>Add Photo</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.profileName}>
          {data?.Name || 'Loading...'}
          {'\n'}
          <Text style={styles.profileSubText}>I love food's</Text>
        </Text>
      </View>

      {/* List */}
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerIcon: {
    backgroundColor: '#ECF0F4',
    borderRadius: 50,
    padding: 10,
    width: width / 7,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    height: height / 9,
    width: height / 9,
    borderRadius: height / 18,
    backgroundColor: '#ECF0F4',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: height / 18,
  },
  imagePlaceholder: {
    color: '#747783',
    fontSize: 12,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  profileSubText: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  profileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F6F8FA',
    borderRadius: 10,
    marginVertical: 5,
  },
  iconContainer: {
    width: width / 7,
    height: width / 7,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#747783',
    marginLeft: 10,
  },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },

});

export default PersonalInfo;
