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
} from 'react-native';
import Option from './option';
import {
  SelectMultipleButton,
  SelectMultipleGroupButton,
} from 'react-native-selectmultiple-button';
import CheckBox from '@react-native-community/checkbox';
const Myethnicity = props => {

  const [arr, setArr] = useState([]);
  const [ethnicityVisible, setethnicityVisible] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: '100%'}}>
        {/* first component */}
        <View style={styles.component1}>
          <Text style={styles.headerText}>My ethnicity is</Text>
               </View>

        {/*  second component */}
        <View style={styles.options}>
          <SelectMultipleGroupButton
            multiple={true}
            group={[
              {value: 'Native American'},
              {value: 'Black/African Descent'},
              {value: 'East Asian'},
              {value: 'Hispanic/Latino'},
              {value: 'Middle Eastern'},
              {value: 'Pacific Inslander'},
              {value: 'Other'},
              {value: 'Prefer not to say'},
            ]}
            defaultSelectedIndexes={[0]}
            textStyle={{fontSize: 14, textAlign: 'center'}}
            buttonViewStyle={{
              alignItems: 'center',
              borderWidth: 2,
              borderRadius: 27,
              borderColor: '#7F5AF0',
              textAlign: 'center',
              width: '45%',
              padding: 0.2,

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
            }}
            containerViewStyle={{
              width: '100%',
              justifyContent: 'space-between',
              alignContent: 'center',
            }}
            onSelectedValuesChange={
              selectedValues => setArr(selectedValues)
              // this._groupButtonOnSelectedValuesChange(selectedValues)
            }
          />
        </View>
        <View style={styles.checkboxContainer}>
        <View
            style={{
              borderWidth: 1,
              borderColor: '#000',
              height: 22,
              width: 22,
              borderRadius: 5,
              marginRight: 10
            }}>
            <CheckBox
              hideBox
              checked={ethnicityVisible}
              onPress={() => {
                setethnicityVisible(!ethnicityVisible);
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
          <IconButton
            style={{backgroundColor: 'lightgray', width: 80, height: 45}}
            icon="arrow-right"
            color={Colors.white}
            size={40}
            onPress={() => {
              //   uncomment the alert when data is connected
              // alert('Please select at least 3');
              props.route.params.ethnicity = arr
              props.route.params.ethnicityVisible = ethnicityVisible
              props.navigation.navigate('Mysexuality', props.route.params)
            }}
          />
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
    marginTop: '40%',
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
    margin: 10,
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
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
export default Myethnicity;
