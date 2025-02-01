import React, {useEffect, useState,useContext} from 'react';
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
import auth from  '@react-native-firebase/auth';
import { useSelector } from 'react-redux';

const {height, width} = Dimensions.get('screen');
const Profile = ({navigation}) => {
  const [imageUri, setImageUri] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const Account = useSelector(state=>state.abhinav.value);

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



  const DATA = [
    {id: '1', title: 'Personal Info', color: '#FB6F3D', Icons: 'account'},
    {id: '2', title: 'Addresses', color: '#413DFB', Icons: 'map-minus'},
    {id: '3', title: 'Cart', color: '#369BFF', Icons: 'cart'},
    {id: '4', title: 'Favourite', color: '#B33DFB', Icons: 'heart-box'},
    {id: '5', title: 'Notifications', color: '#FB6F3D', Icons: 'bell'},
    {id: '6', title: 'Payment Method', color: '#369BFF', Icons: 'card'},
    {id: '7', title: 'FAQs', color: '#FB6F3D', Icons: 'help-circle'},
    {id: '8', title: 'User Reviews', color: '#FB6F3D', Icons: 'account'},
    {id: '9', title: 'Settings', color: '#747783', Icons: 'cog'},
    {id: '10', title: 'Log Out', color: '#747783', Icons: 'logout'},
  ];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await firestore().collection('Users').doc(uid).set(imageUri);

  //     } catch (error) {
  //       console.error('Error fetching data: ', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const pickImage = async () => {
    const options = {mediaType: 'photo', quality: 1};
    launchImageLibrary(options, response => {
      // console.log(response,'response')
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
  const renderItem = ({item}) => {

    const handleDetails = id => {
      if (id === '10') {
        navigation.replace('LogIn');
      }else if (id==='1'){
        navigation.navigate('PersonalInfo')
      }else if (id ==='2'){
        navigation.navigate('Animation')
      }else if(id==='3'){
        navigation.navigate('Instagram')
      }else if (id==='4'){
        navigation.navigate('TabNavigation')
      }else if (id ==="5"){
        navigation.navigate('Details')
      }else if (id==='6'){
        navigation.navigate('Calculator')
      }else if (id==='7'){
        navigation.navigate('Reducer')
      }else if(id==='9'){
        navigation.navigate('NewScreen')
      }
    };

    return (
      <View style={styles.profileItem}>
        <View style={styles.iconContainer}>
          <Entypo name={item.Icons} size={25} color={item.color} />
        </View>
        <Text style={styles.itemText}>{item.title}</Text>
        <TouchableOpacity
          onPress={() => handleDetails(item.id)}
          style={styles.chevronContainer}>
          <Entypo name="chevron-right" size={25} color="#747783" />
        </TouchableOpacity>
      </View>
    );
  };

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
        <Text style={styles.headerText}>Profile:{Account}</Text>
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
          {data.Name}
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
  chevronContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },

});

export default Profile;
