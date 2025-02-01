import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const {width, height} = Dimensions.get('screen');

const Details = () => {
  const DATA = [
    {
      id: 1,
      name: 'Salt',
      profile: require('../../../assest/image/SaltPic.png'),
    },
    {
      id: 2,
      name: 'Chicken',
      profile: require('../../../assest/image/Chicken.png'),
    },
    {
      id: 3,
      name: 'Onion',
      profile: require('../../../assest/image/Onion.png'),
    },
    {
      id: 4,
      name: 'Garlic',
      profile: require('../../../assest/image/garlic.png'),
    },
    {
      id: 5,
      name: 'Pappers',
      profile: require('../../../assest/image/pappers.png'),
    },
    {
      id: 6,
      name: 'Ginger',
      profile: require('../../../assest/image/ginger.png'),
    },
    {
      id: 7,
      name: 'Broccoli',
      profile: require('../../../assest/image/broccoli.png'),
    },
    {
      id: 8,
      name: 'Orange',
      profile: require('../../../assest/image/Orange.png'),
    },
    {
      id: 9,
      name: 'Wainut',
      profile: require('../../../assest/image/wainut.png'),
    },
  ];

  const [color, setColor] = useState(null);
  const handleColor = size => {
    setColor(prevSize => (prevSize === size ? null : size));
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.header}>
            <Image
              style={styles.headerImage}
              source={require('../../../assest/image/Back.png')}
            />
          </View>
          <Text style={styles.headerText}>Details </Text>
        </View>

        <View style={styles.middleHeader}>
          <Image
            style={styles.pizzaImage}
            source={require('../../../assest/image/FoodDetails.png')}
          />
          <View style={styles.viewHeart}>
            <Image
              style={styles.Heart}
              source={require('../../../assest/image/VectorHeart.png')}
            />
          </View>
        </View>

        <View style={styles.coffeHouse}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.chefImage}
              source={require('../../../assest/image/EllipseChef.png')}
            />
            <Text style={{marginTop: 9, marginLeft: 9}}>
              Uttora Coffe House
            </Text>
          </View>
        </View>

        <View style={{marginHorizontal: 20}}>
          <Text style={styles.textPizza}>Pizza Calzone European</Text>
          <Text style={{color: '#A0A5BA', marginTop: 5, fontSize: 15}}>
            Prosciutto e funghi is a pizza variety that is topped with tomato
            sauce.
          </Text>
        </View>

        <View style={styles.flexContainer}>
          <View style={styles.textImage}>
            <Image
              style={styles.StarImage}
              source={require('../../../assest/image/Star.png')}
            />
            <Text style={[styles.NoText, {fontWeight: 'bold'}]}>4.7</Text>
          </View>
          <View style={styles.textImage}>
            <Image
              style={styles.StarImage}
              source={require('../../../assest/image/van.png')}
            />
            <Text style={styles.NoText}>Free</Text>
          </View>
          <View style={styles.textImage}>
            <Image
              style={styles.StarImage}
              source={require('../../../assest/image/Clock.png')}
            />
            <Text style={styles.NoText}>20 min</Text>
          </View>
        </View>

        <View style={styles.maineSize}>
          <Text style={{fontSize: 16}}>Size:</Text>
          <TouchableOpacity
            onPress={() => handleColor(1)}
            style={[
              styles.Noview,
              {backgroundColor: color == 1 ? '#F58D1D' : '#D0D9E1'},
            ]}>
            <Text
              style={[styles.textsize, {color: color == 1 ? '#fff' : '#000'}]}>
              10"
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleColor(2)}
            style={[
              styles.Noview,
              {backgroundColor: color == 2 ? '#F58D1D' : '#D0D9E1'},
            ]}>
            <Text
              style={[styles.textsize, {color: color == 2 ? '#fff' : '#000'}]}>
              14"
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleColor(3)}
            style={[
              styles.Noview,
              {backgroundColor: color == 3 ? '#F58D1D' : '#D0D9E1'},
            ]}>
            <Text
              style={[styles.textsize, {color: color == 3 ? '#fff' : '#000'}]}>
              16"
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={{marginHorizontal: 20, marginVertical: 10}}>
          IGRIDENTS
        </Text>

        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {DATA.map((story, index) => (
            <View key={index} style={styles.story}>
              <View style={styles.storyviewImage}>
                <Image style={styles.storyImage} source={story.profile} />
              </View>

              <Text style={styles.storyText}>{story.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", //'#F3F3F3',
    padding: 10,
  },
  header: {
    backgroundColor: '#D0D9E1',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
  },
  pizzaImage: {
    resizeMode: 'cover',
    height: 220,
    width: width / 1.1,
    borderRadius: 40,
  },
  headerText: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: '500',
  },
  middleHeader: {
    width: width / 1.1,
    height: 210,
    // backgroundColor: '#98A8B8',
    borderRadius: 50,
    marginTop: 20,
    alignSelf: 'center',
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // elevation: 3,
  },
  Heart: {
    resizeMode: 'contain',
    height: 22,
    width: 22,
    tintColor: 'black',
  },
  viewHeart: {
    width: 45,
    height: 45,
    backgroundColor: '#E8EAED',
    borderRadius: 45 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
  coffeHouse: {
    borderWidth: 1,
    width: 190,
    height: 45,
    borderRadius: 20,
    marginLeft: 10,
    marginVertical: 20,
    borderColor: '#E9E9E9',
  },
  chefImage: {
    resizeMode: 'contain',
    height: 25,
    width: 25,
    marginLeft: 15,
    marginTop: 9,
  },
  textPizza: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  StarImage: {
    resizeMode: 'contain',
    height: 22,
    width: 22,
  },
  textImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  flexContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  NoText: {
    marginLeft: 8,
    fontSize: 15,
    fontWeight: '400',
  },
  Noview: {
    backgroundColor: '#D0D9E1',
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
  },
  textsize: {
    textAlign: 'center',
    fontSize: 17,
  },
  maineSize: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  SaltView: {
    backgroundColor: '#FFEBE4',
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saltImage: {
    resizeMode: 'contain',
    height: 25,
    width: 25,
  },
  story: {
    alignItems: 'center',
    marginHorizontal: 10,
    // backgroundColor:'red'
  },
  storyImage: {
    height: 25,
    width: 25,
  },
  storyText: {
    // marginTop: 5,
    fontSize: 12,
    color: '#000',
    marginBottom: 25,
  },
  storyviewImage: {
    backgroundColor: '#FFEBE4',
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Details;
