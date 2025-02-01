import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  RefreshControl,
  Image,
} from 'react-native';
import {
  ArrowLeftIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
  MusicalNoteIcon,
  PlusIcon,
} from 'react-native-heroicons/outline';
const {width, height} = Dimensions.get('screen');
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

const DATA = [
  {
    id: '1',
    title: 'Burger Bistro',
    subtitle: 'Rose Garder',
    Price: '40',
  },
  {
    id: '2',
    title: ' Smokin"Burger ',
    subtitle: 'Caffenio Restaurant',
    Price: '60',
  },
  {
    id: '3',
    title: ' Buffalo Burgers',
    subtitle: 'Rose Garder',
    Price: '70',
  },
  {
    id: '4',
    title: ' Bullseye Burgers',
    subtitle: 'Rose Garder',
    Price: '94',
  },
];

const Burger = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#F3F3F3'}}>
      <SafeAreaView style={styles.MainContainer}>
        <View style={styles.Headers}>
          <TouchableOpacity
            style={styles.LeftArrow}
            onPress={() => navigation.replace('Home')}>
            <ArrowLeftIcon />
          </TouchableOpacity>
          <View style={styles.BuergerText}>
            <Text>BURGER</Text>
            <TouchableOpacity>
              <ChevronUpDownIcon />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>navigation.replace('Search')}
            style={[
              styles.LeftArrow,
              {backgroundColor: 'black', position: 'absolute', right: 60},
            ]}>
            <MagnifyingGlassIcon color={'white'} />
          </TouchableOpacity>
          <View style={[styles.LeftArrow, {position: 'absolute', right: 5}]}>
            <MusicalNoteIcon />
          </View>
        </View>
        <Text style={styles.PopBuger}>Popular Burger</Text>
        <View style={styles.MainFoods}>
          {DATA.map((item, index) => (
            <View key={index} style={styles.Foods}>
              <View style={styles.Image}></View>
              <Text style={styles.Text}>{item.title}</Text>
              <Text style={[styles.Text, {color: '#98A8B8', fontSize: 12}]}>
                {item.subtitle}
              </Text>
              <View style={styles.Plus}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  ${item.Price}
                </Text>
                <View
                  style={{
                    backgroundColor: '#F58D1D',
                    padding: 8,
                    borderRadius: 100 / 2,
                  }}>
                  <PlusIcon />
                </View>
              </View>
            </View>
          ))}
        </View>
        <View>
          <Text style={styles.PopBuger}>Open Resturants</Text>
        </View>

        {restaurants.map((item, Index) => (
          <View key={Index} style={styles.restaurantCard}>
            <Image style={styles.restaurantImage} source={item.image} />
            <View style={{alignSelf: 'flex-start', marginVertical: 10}}>
              <Text style={styles.restaurantName}>{item.name}</Text>
              <Text style={styles.cuisine}>{item.cuisine}</Text>
            </View>
            <View style={styles.detailsRow}>
              <View style={styles.detailItem}>
                <Image
                  style={styles.detailIcon}
                  source={require('../../../assest/image/Star.png')}
                />
                <Text style={styles.detailText}>{item.rating}</Text>
              </View>
              <View style={styles.detailItem}>
                <Image
                  style={styles.detailIcon}
                  source={require('../../../assest/image/van.png')}
                />
                <Text style={styles.detailText}>{item.deliveryFee}</Text>
              </View>
              <View style={styles.detailItem}>
                <Image
                  style={styles.detailIcon}
                  source={require('../../../assest/image/Clock.png')}
                />
                <Text style={styles.detailText}>{item.deliveryTime}</Text>
              </View>
            </View>
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F3F3F3',
  },
  Headers: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  LeftArrow: {
    backgroundColor: '#ECF0F4',
    padding: 10,
    borderRadius: 100 / 2,
  },
  BuergerText: {
    flexDirection: 'row',
    borderWidth: 1,
    gap: 4,
    alignItems: 'center',
    borderRadius: 10,
    padding: 4,
    borderColor: '#98A8B8',
    marginHorizontal: 10,
  },
  PopBuger: {
    fontSize: 22,
    color: 'black',
    marginTop: 20,
  },
  MainFoods: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 5,
  },
  Foods: {
    height: 200,
    width: '45%',
    margin: 9,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  Image: {
    height: 100,
    width: 120,
    backgroundColor: '#646982',
    borderRadius: 15,
    alignSelf: 'center',
    marginVertical: 10,
  },
  Plus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  Text: {
    marginHorizontal: 20,
  },
  Image2: {
    backgroundColor: '#646982',
    width: '90%',
    height: 120,
    alignSelf: 'center',
    borderRadius: 10,
  },
  restaurantCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
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

export default Burger;
