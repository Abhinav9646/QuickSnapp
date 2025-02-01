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
  TextInput,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addItem} from '../../Components/Reduxs/CounterSlice';
import {MagnifyingGlassIcon, PlusIcon} from 'react-native-heroicons/outline';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';

const Search = ({navigation}) => {
  const [input, setInput] = useState('');
  const [keyword, setKeyword] = useState([]);
  const handleSearch = query => {
    setInput(query);
  };
  const Burger = () => {
    const Lower = input.toLowerCase();
    const items = input.trim().toUpperCase();
    if (items && !keyword.find(item => item === items)) {
      setKeyword([...keyword, items]);
      setInput('');
    }
    if (Lower === 'burger') {
      navigation.replace('Burger');
    }
  };
  const renderItem = ({item, Index}) => {
    console.log(item,'item')
    return (
      <View key={Index}>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Search</Text>
      </View>
      <View style={styles.SearchBar}>
        <TextInput
          value={input}
          onChangeText={query => handleSearch(query)}
          placeholderTextColor={'#000'}
          placeholder="Search"
          style={styles.input}
        />
        <TouchableOpacity onPress={() => Burger()} style={{marginRight: 10}}>
          <MagnifyingGlassIcon />
        </TouchableOpacity>
      </View>
      <Text style={{margin: 10}}>Recent KeyWords</Text>
      <FlatList
        data={keyword}
        keyExtractor={(item, Index) => item.toString()}
        horizontal
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  headerContainer: {
    marginVertical: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  SearchBar: {
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    color: '#000',
  },
});

export default Search;
