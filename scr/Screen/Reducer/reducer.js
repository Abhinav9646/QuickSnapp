import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addItem} from '../../Components/Reduxs/CounterSlice';
import {PlusIcon} from 'react-native-heroicons/outline';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';

const Reducer = () => {
  const [dataStore, setDataStore] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const Url = 'https://fakestoreapi.com/products/';

  const fetchAPI = async () => {
    try {
      const response = await axios.get(Url);
      setDataStore(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleItem = item => {
    dispatch(addItem({item}));
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.category}>{item.category}</Text>
          <Text numberOfLines={2} style={styles.description}>
            {item.description}
          </Text>
          <TouchableOpacity
            onPress={() => handleItem(item)}
            style={styles.addButton}>
            <PlusIcon color={'white'} size={20} />
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer} >
        <StatusBar  barStyle={'dark-content'} />
        {loading ? (
          <ActivityIndicator
            size="large"
            color="orange"
            style={styles.loader}
          />
        ) : (
          <FlatList
            data={dataStore}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
          />
        )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'contain',
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e67e22',
    marginVertical: 5,
  },
  category: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: '#95a5a6',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default Reducer;
