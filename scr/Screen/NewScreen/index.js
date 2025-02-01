import React, {useState, useRef} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Touchable,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import * as Progress from 'react-native-progress';

const NewScreen = () => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [width, setWidth] = useState(0.1);
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');

  const handleInput = (text, index) => {
    if (text.trim()!== ' ') {
      switch (index) {
        case 'first':
          setFirst(text);
          secondInput.current.focus();
          break;
        case 'second':
          setSecond(text);
          thirdInput.current.focus();
          break;
        case 'third':
          setThird(text);
          fourthInput.current.focus();
          break;
        case 'fourth':
          setFourth(text);
          break;
        default:
          break;
      }
    } else {
      switch (index) {
        case 'second':
          setSecond(text);
          firstInput.current.focus();
          break;
        case 'third':
          setThird(text);
          secondInput.current.focus();
          break;
        case 'fourth':
          setFourth(text);
          thirdInput.current.focus();
          break;
        default:
          break;
      }
    }
  };
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar barStyle={'dark-content'} />
      <View>
        <Text style={styles.User}>Hello User!</Text>
      </View>
      <Text style={styles.textInput}>TextInput</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.code}>Code:</Text>
        <TextInput
          ref={firstInput}
          placeholder="___"
          value={first}
          onChangeText={text => handleInput(text, 'first')}
          maxLength={1}
          keyboardType="number-pad"
          style={{color: 'black', margin: 5}}
        />
        <TextInput
          ref={secondInput}
          placeholder="___"
          value={second}
          onChangeText={text => handleInput(text, 'second')}
          maxLength={1}
          keyboardType="number-pad"
          style={{color: 'black', margin: 5}}
        />
        <TextInput
          ref={thirdInput}
          placeholder="___"
          value={third}
          onChangeText={text => handleInput(text, 'third')}
          maxLength={1}
          keyboardType="number-pad"
          style={{color: 'black', margin: 5}}
        />
        <TextInput
          ref={fourthInput}
          placeholder="___"
          value={fourth}
          onChangeText={text => handleInput(text, 'fourth')}
          maxLength={1}
          keyboardType="number-pad"
          style={{color: 'black', margin: 5}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  code: {
    color: 'orange',
    fontSize: 18,
    fontWeight: '700',
    margin: 10,
  },
  User: {
    fontSize: 24,
    fontWeight: '700',
    color: 'orange',
    textAlign: 'center',
  },
  textInput: {
    color: 'orange',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
});

export default NewScreen;
