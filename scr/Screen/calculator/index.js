import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

const Calculator = () => {
  const [textEnter, setTextEnter] = useState('');
  const handleText = texts => {
    const value = textEnter + texts;
    setTextEnter(value);
  };
  const handleDelete = () => {
    setTextEnter('');
  };
  const hnadleSum = () => {
    const onje = eval(textEnter);
    setTextEnter(onje);
  };
  return (
    <View style={styles.Container}>
      <StatusBar hidden={true} />
      {/* upperView */}
      <View style={styles.UpperView}>
        <Text style={{color:'#fff',textAlign:'center',fontWeight:'bold',fontSize:30,marginTop:40}}>Calculator</Text>
        <View style={{justifyContent: 'flex-end', flex: 1, padding: 20}}>
          <Text style={{color: '#fff', fontSize: 27, textAlign: 'right'}}>
            {textEnter}
          </Text>
        </View>
      </View>
      {/* upperView */}
      <View style={{backgroundColor: 'white', height: 3}}></View>
      {/* LowerView */}
      <View style={styles.LowerView}>
        <View style={[styles.txtBtw]}>
          <TouchableOpacity onPress={() => handleDelete()}>
            <Text style={styles.txt}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleText(7)}>
            <Text style={styles.txt}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleText(4)}>
            <Text style={styles.txt}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleText(1)}>
            <Text style={styles.txt}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleText('.')}>
            <Text style={styles.txt}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.txtBtw]}>
          <TouchableOpacity onPress={() => handleText('+/-')}>
            <Text style={styles.txt}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleText(8)}>
            <Text style={styles.txt}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleText(5)}>
            <Text style={styles.txt}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleText(2)}>
            <Text style={styles.txt}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleText(0)}>
            <Text style={styles.txt}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.txtBtw]}>
          <TouchableOpacity onPress={() => handleText('%')}>
            <Text style={styles.txt}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleText(9)}>
            <Text style={styles.txt}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleText(6)}>
            <Text style={styles.txt}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleText(3)}>
            <Text style={styles.txt}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleText('00')}>
            <Text style={styles.txt}>00</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.txtBtw]}>
          <TouchableOpacity onPress={() => handleText('/')}>
            <Text style={styles.txt}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleText('*')}>
            <Text style={styles.txt}>x</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleText('-')}>
            <Text style={styles.txt}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleText('+')}>
            <Text style={styles.txt}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => hnadleSum('=')}>
            <Text style={styles.txt}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* LowerView */}
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  UpperView: {
    flex: 1,
    backgroundColor: 'black',
  },
  LowerView: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  txtBtw: {
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 30,
    marginVertical: 25,
    marginHorizontal: 15,
  },

  txt: {
    color: 'white',
    fontSize: 27,
  },
});

export default Calculator;
