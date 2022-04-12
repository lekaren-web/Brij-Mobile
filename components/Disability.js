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
import CheckBox from '@react-native-community/checkbox';
import {
  SelectMultipleButton,
  SelectMultipleGroupButton,
} from 'react-native-selectmultiple-button';

const Disability = props => {
  const [disabilityVisible, setdisabilityVisible] = useState(false);
  const [disability, setdisability] = useState([{value: 'Yes'}, {value: 'No'}]);
  const [yesNo, setYesNo] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: '100%'}}>
        <View style={styles.component1}>
          <Text style={styles.headerText}>Do I have a disability?</Text>
        </View>

        <View style={styles.options}>
          <SelectMultipleGroupButton
            multiple={false}
            group={disability}
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
            onSelectedValuesChange={selectedValues =>
              setYesNo(selectedValues.toString())
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
              checked={disabilityVisible}
              onPress={() => {
                setdisabilityVisible(!disabilityVisible);
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
              props.route.params.disability = disability;
              props.route.params.disabilityVisible = disabilityVisible;
              // console.log(props.route.params);
              props.navigation.navigate('Myethnicity', props.route.params);
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
    marginTop: 220,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
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
export default Disability;