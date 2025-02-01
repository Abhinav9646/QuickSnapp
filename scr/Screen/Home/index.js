import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TextInput,
  FlatList,
  RefreshControl,
} from 'react-native';
import Entypo from 'react-native-vector-icons/MaterialCommunityIcons';
const { height, width } = Dimensions.get('screen');

const Home = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const restaurants = [
    {
      id: '1',
      name: 'Rose Garden Restaurant',
      cuisine: 'Burger, Chicken, Rice, Wings',
      rating: 4.7,
      deliveryFee: 'Free',
      deliveryTime: '20 min',
      image: require('../../../assest/image/Home.png'),
    },
    {
      id: '2',
      name: 'Green Leaf Restaurant',
      cuisine: 'Pizza, Pasta, Salad',
      rating: 4.5,
      deliveryFee: '$2',
      deliveryTime: '25 min',
      image: require('../../../assest/image/Home.png'),
    },
  ];

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const renderRestaurant = ({ item }) => (
    <View style={styles.restaurantCard}>
      <Image style={styles.restaurantImage} source={item.image} />
      <View style={{ alignSelf: 'flex-start', marginVertical: 10 }}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.cuisine}>{item.cuisine}</Text>
      </View>
      <View style={styles.detailsRow}>
        <View style={styles.detailItem}>
          <Image style={styles.detailIcon} source={require('../../../assest/image/Star.png')} />
          <Text style={styles.detailText}>{item.rating}</Text>
        </View>
        <View style={styles.detailItem}>
          <Image style={styles.detailIcon} source={require('../../../assest/image/van.png')} />
          <Text style={styles.detailText}>{item.deliveryFee}</Text>
        </View>
        <View style={styles.detailItem}>
          <Image style={styles.detailIcon} source={require('../../../assest/image/Clock.png')} />
          <Text style={styles.detailText}>{item.deliveryTime}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar hidden={false}/>
      <View style={styles.header}>
        <TouchableOpacity  onPress={()=>navigation.navigate('Profile')}
        style={styles.icon}>
          <Entypo name="menu" size={30} color={'#000'} />
        </TouchableOpacity>
        <Text style={styles.deliveryAddress}>
          {'DELIVER TO \n'}
          <Text style={styles.officeAddress}>Ram Lab office</Text>
        </Text>
        <TouchableOpacity style={styles.icon}>
          <Entypo name="shopping" size={25} color={'#000'} />
        </TouchableOpacity>
      </View>
      <View style={styles.greeting}>
        <Text>
          Hey Ram, <Text style={styles.greetingBold}>Good Afternoon!</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.searchBar} onPress={() => navigation.navigate('Search')}>
        <Text style={styles.searchText}>Search dishes, restaurants</Text>
      </TouchableOpacity>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={renderRestaurant}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  icon: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
  },
  deliveryAddress: {
    color: '#FC6E2A',
    textAlign: 'center',
  },
  officeAddress: {
    color: '#676767',
  },
  greeting: {
    marginBottom: 15,
  },
  greetingBold: {
    color: '#000',
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#ECF0F4',
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
  },
  searchText: {
    color: '#676767',
  },
  restaurantCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  restaurantImage: {
    borderRadius: 15,
    width: '100%',
    height: height / 5,
    resizeMode: 'cover',
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cuisine: {
    color: '#98A8B8',
    fontSize: 14,
  },
  detailsRow: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 15,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  detailIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  detailText: {
    fontWeight: 'bold',
  },
});

export default Home;
