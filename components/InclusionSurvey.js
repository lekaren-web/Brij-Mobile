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
const InclusionSurvery = props => {
  const [inclusionSurvery, setInclusionSurvery] = useState('');
  const [nextPage, setNextPage] = useState('lightgrey');

  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <View style={styles.container}>
      <View style={{height: '100%'}}>
        {/* first component */}
        <View style={styles.component1}>
          <Text style={styles.headerText}>
            Do you feel included by our options?
          </Text>
          <Text style={styles.subText}>
            Please feel free to write your thoughts down below. We really
            appreciate your input and use it to improve our app for you!
          </Text>
        </View>

        {/*  second component */}
        <TextInput
          multiline
          placeholderTextColor="#30467B99"
          style={styles.Input}
          onChangeText={val => {
            setInclusionSurvery(val);
            setNextPage('#7F5AF0');
          }}
          placeholder="Use this space to write down your experience."></TextInput>
        {/* <TouchableOpacity
          onPress={() => {
            props.route.params.inclusionSurvery = inclusionSurvery;
            // props.navigation.navigate('AddPhotos', props.route.params);
          }}>
          <Text style={{marginTop: 60, color: '#8390B0', fontWeight: '400'}}>
            Skip survey
          </Text>
        </TouchableOpacity> */}
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
              props.route.params.inclusionSurvery = inclusionSurvery;
              props.navigation.navigate('AddPhotos', props.route.params);
            }}>
            <Image source={require('../assets/arrow-right.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
      </View>
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
  },
  component1: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '40%',
  },
  headerText: {
    color: '#30467B',
    fontSize: 36,
    fontWeight: '600',
    textAlign: 'left',
    alignSelf: 'center',
  },
  subText: {
    color: '#8390B0',
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'left',
    margin: 5,
    marginTop: 20,
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  Input: {
    padding: 5,
    borderWidth: 2,
    height: 90,
    borderRadius: 10,
    borderColor: '#D9CEFB',
    marginTop: 60,
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
export default InclusionSurvery;
