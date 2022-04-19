// screens/AddUserScreen.js
import React, {Component, useState} from 'react';
import {IconButton, Colors} from 'react-native-paper';
// import {ButtonGroup} from '@rneui/themed';
import {
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import {
  SelectMultipleButton,
  SelectMultipleGroupButton,
} from 'react-native-selectmultiple-button';
import MultiSelect from 'react-native-checkbox-selection';
import sexualities from '../data/sexualities.json';
const Mysexuality = props => {
  const [arr, setArr] = useState([]);
  const [sexualityVisible, setsexualityVisible] = useState(false);
  const [nextPage, setNextPage] = useState('lightgrey');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: '100%'}}>
        {/* first component */}

        <View style={styles.component1}>
          <Text style={styles.headerText}>My sexuality is</Text>
        </View>

        {/*  second component */}
        <View style={styles.options}>
          <ScrollView>
            <MultiSelect
              data={sexualities}
              onSelectedItemsChange={val => setArr(val)}
              selectedItems={arr}
              title={'Select from the following'}
              icon={'caret-down'}
              iconDisabled={true}
              enableTitle
            />
          </ScrollView>
        </View>
        <View style={styles.checkboxContainer}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#000',
              height: 22,
              width: 22,
              borderRadius: 5,
              marginRight: 10,
            }}>
            <CheckBox
              hideBox
              checked={sexualityVisible}
              onPress={() => {
                setsexualityVisible(!sexualityVisible);
              }}
              style={{height: 20, width: 20}}
            />
          </View>

          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#30467B',
              marginBottom: 3,
            }}>
            Visible on profile
          </Text>
        </View>
        <View style={{position: 'absolute', bottom: 0, right: 0}}>
          <TouchableOpacity
            style={{
              backgroundColor: nextPage,
              width: 70,
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
            }}
            color={Colors.white}
            size={40}
            onPress={() => {
              props.route.params.sexuality = arr;
              props.route.params.sexualityVisible = sexualityVisible;
              // console.log('hi', props.route.params);
              props.navigation.navigate('MyInterests', props.route.params);
            }}>
            <Image source={require('../assets/arrow-right.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
//   }
// }
const styles = StyleSheet.create({
  selectButtonText: {textAlign: 'center', color: '#30467B'},
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: '5%',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    alignContent: 'center',
    padding: 10,
    margin: 20,
  },
  component1: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50%',
  },
  headerText: {
    color: '#30467B',
    fontSize: 36,
    fontWeight: '600',
  },
  subText: {
    color: '#8390B0',
    fontWeight: '500',
    fontSize: 12,
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    height: 350,
    overflow: 'scroll',
    padding: 10,
  },

  btnPress: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 30,
    width: 100,
  },
  selectButton: {
    width: 163,
    borderWidth: 1.3,
    borderRadius: 50,
    borderStyle: 'solid',
    borderColor: '#7F5AF0',
    padding: 13,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    margin: 5,
  },
});
export default Mysexuality;
