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
  TouchableHighlight,
  Image,
} from 'react-native';
import Option from './option';
import {
  SelectMultipleButton,
  SelectMultipleGroupButton,
} from 'react-native-selectmultiple-button';

import moreOptions from '../data/gender.json';
const Mygender = props => {
  const [user, setUser] = useState(props.route.params);
  const [gender, setgender] = useState('');
  const [nextPage, setNextPage] = useState('lightgrey');
  const [gendergroup, setGendergroup] = useState([
    {value: 'Woman'},
    {value: 'Man'},
    {value: 'Non-binary'},
  ]);

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={{height: '100%'}}> */}
      <View style={{height: '100%'}}>
        {/* first component */}
        <View style={styles.component1}>
          <Text style={styles.headerText}>My gender is</Text>
        </View>

        {/*  second component */}
        <View style={styles.options}>
          <SelectMultipleGroupButton
            multiple={false}
            group={gendergroup}
            defaultSelectedIndex={[1]}
            textStyle={{fontSize: 18, textAlign: 'center'}}
            buttonViewStyle={{
              alignItems: 'flex-start',
              borderWidth: 2,
              borderRadius: 27,
              borderColor: '#7F5AF0',
              textAlign: 'center',
              margin: 5,
              width: '80%',
              alignItems: 'center',
              padding: 5,
            }}
            highLightStyle={{
              textColor: '#30467B',
              backgroundColor: 'transparent',
              borderRadius: 27,
              borderWidth: 1,
              borderColor: '#7F5AF0',
              textAlign: 'center',
              fontsize: 14,
              borderTintColor: 'transparent',
              textTintColor: 'white',
              backgroundTintColor: '#7F5AF0',
              alignItems: 'center',
            }}
            containerViewStyle={{
              width: '100%',
              justifyContent: 'center',
              alignContent: 'center',
              textAlign: 'center',
              alignItems: 'center',
            }}
            onSelectedValuesChange={
              selectedValues => {
                setgender(selectedValues.toString());
                setNextPage('#7F5AF0');
              }
              // this._groupButtonOnSelectedValuesChange(selectedValues)
            }
          />
        </View>

        <View style={{position: 'absolute', bottom: 40, right: 0}}>
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
              props.route.params.gender = gender;
              props.navigation.navigate('Disability', props.route.params);
            }}>
            <Image source={require('../assets/arrow-right.png')}></Image>
          </TouchableOpacity>
        </View>
        {/* )}s */}
      </View>

      {/* </ScrollView> */}

      {/* {moreOps && (
        <View style={{position: 'absolute', bottom: 30, right: 0}}>
          <IconButton
            style={{backgroundColor: 'lightgray', width: 80, height: 45}}
            icon="arrow-right"
            color={Colors.white}
            size={40}
            onPress={() => {
              //   uncomment the alert when data is connected
              // alert('Please select at least 3');
              console.log(gendergroup);
              //   props.navigation.navigate('Myname', {enableNotifs: props.route.params.enableNotifs, mentor: props.route.params.mentor,  mentee: props.route.params.mentee,  both: props.route.params.both, Mygender: arr});
            }}
          />
        </View>
      )} */}
    </SafeAreaView>
  );
};
//   }
// }
const styles = StyleSheet.create({
  selectButtonText: {textAlign: 'center', color: '#30467B'},
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    alignContent: 'center',
    padding: 10,
    margin: 20,
    height: '100%',
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
    justifyContent: 'center',
    marginTop: 70,
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
export default Mygender;
