import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../Components/Reduxs/CounterSlice';
import { ArrowLeftIcon, XMarkIcon } from 'react-native-heroicons/outline';

const { width } = Dimensions.get('screen');

const Animation = ({ navigation }) => {
  const data = useSelector(state => state.abhinav.data);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.category}>{item.category}</Text>
          <Text numberOfLines={2} style={styles.description}>
            {item.description}
          </Text>
        </View>
        <TouchableOpacity onPress={() => dispatch(removeItem({ item }))} style={styles.removeButton}>
          <XMarkIcon size={25} color={'white'} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <ArrowLeftIcon color="white" size={24} />
      </TouchableOpacity>

      <Text style={styles.headerText}>Shop Now</Text>

      {data.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 15,
  },
  backButton: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 50,
    alignSelf: 'flex-start',
    // marginBottom: 15,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 50,
    color: '#7f8c8d',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
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
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e67e22',
    marginBottom: 5,
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
  removeButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Animation;
