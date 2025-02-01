import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
const {height, width} = Dimensions.get('screen');
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const JavaScreen = () => {
  const [input, setInput] = useState('');
  const [store, setStore] = useState([]);
  const [colour, setColour] = useState('');
  const [calculator, setCalculator] = useState();
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);

  const handleData = () => {
    if (input.trim()) {
      const newItem = {
        id: Date.now().toString(),
        text: input.trim(),
      };
      setStore([...store, newItem]);
      console.log(newItem, 'newitem');
      setInput('');
      setColour(input.toLowerCase());
    }
  };

  const handleDelete = id => {
    const updatedStore = store.filter(item => item.id !== id);
    setStore(updatedStore);
  };
  const handleColor = color => {
    console.log(color, 'color');
    setColour(color);
    setInput(color);
  };
  const handleCalculator = () => {
    if (height === null || isNaN(height)) {
      setCalculator('Please give a valid height');
    } else if (weight === null || isNaN(weight)) {
      setCalculator('Please give a valid weight');
    } else {
      const bmi = weight / ((height * height) / 10000).toFixed(2);
      setCalculator(bmi);
    }

    setHeight('');
    setWeight('');
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.text}</Text>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Icons name="close" size={20} color={'red'} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={[styles.mainContainer, {backgroundColor: colour}]}>
        <StatusBar hidden={true} />
        <Text style={styles.txt}>JavaScript</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter your text"
            placeholderTextColor={'#000'}
            value={input}
            onChangeText={setInput}
          />
        </View>
        <Button title="Add" color="green" onPress={handleData} />
        <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 30}}>
          Color Changing Task
        </Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <TouchableOpacity onPress={() => handleColor('red')}>
            <View
              style={{
                backgroundColor: 'red',
                height: 100,
                width: 100,
                margin: 10,
              }}>
              <Text style={{textAlign: 'center'}}>RED</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleColor('white')}>
            <View
              style={{
                backgroundColor: 'white',
                height: 100,
                width: 100,
                margin: 10,
              }}>
              <Text style={{textAlign: 'center'}}>White</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleColor('green')}>
            <View
              style={{
                backgroundColor: 'green',
                height: 100,
                width: 100,
                margin: 10,
              }}>
              <Text style={{textAlign: 'center'}}>GREEN</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 30}}>
          BMI Calculator
        </Text>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', margin: 5}}>
            <Text style={{fontWeight: 'bold'}}>Height in CM :{'  '}</Text>
            <TextInput
              style={{
                borderWidth: 1,
                width: width / 2,
                borderRadius: 30,
                borderColor: 'skyblue',
                paddingLeft: 10,
              }}
              value={height}
              onChangeText={setHeight}
              keyboardType="number-pad"
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', margin: 5}}>
            <Text style={{fontWeight: 'bold'}}>Weight in KG :{'  '}</Text>
            <TextInput
              style={{
                borderWidth: 1,
                width: width / 2,
                borderRadius: 30,
                borderColor: 'skyblue',
                paddingLeft: 10,
              }}
              value={weight}
              onChangeText={setWeight}
              keyboardType="number-pad"
            />
          </View>
          <TouchableOpacity onPress={() => handleCalculator()}>
            <Text style={styles.texts}>Calculator</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 18, textAlign: 'center', color: 'red'}}>
            {calculator}
          </Text>
          <View style={{alignSelf: 'center', width: width / 2}}>
            <Text style={{fontWeight: 'bold', marginVertical: 5, fontSize: 15}}>
              BMI Weight Guide
            </Text>
            <Text>Under weight = Less than 18.6</Text>
            <Text>Normal Range = 18.6 and 24.9</Text>
            <Text>Overweight = Greater than 24.9</Text>
          </View>
        </View>
        <FlatList
          data={store}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    color: '#000',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginVertical: 10,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    width: width / 1.1,
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
  texts: {
    textAlign: 'center',
    fontSize: 16,
    borderWidth: 1,
    padding: 10,
    width: width / 3,
    alignSelf: 'center',
    margin: 10,
    borderRadius: 20,
  },
});

export default JavaScreen;
