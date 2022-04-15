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
const MyInterests = props => {
  // constructor(props) {
  // super(props);

  //   constructor() {
  //     super();

  //   }
  // componentDidMount(){
  const [arr, setArr] = useState([])
  //   // console.log(props.route.params)
  // }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: '100%'}}>
        {/* first component */}
        <View style={styles.component1}>
          <Text style={styles.headerText}>My interests</Text>
          <Text style={styles.subText}>Highlight your areas or expertise or aspirational interest.</Text>
        </View>

        {/*  second component */}
        <View style={styles.options}>
            <ScrollView>
          <SelectMultipleGroupButton
            multiple={true}
            group={[
              {value: 'Creative Direction'},
              {value: 'Performer'},
              {value: 'Engineer'},
              {value: 'PR'},
              {value: 'Sound Designer'},
              {value: 'Audio Engineer'},
              {value: 'Graphic Designer'},
              {value: 'Producer'},
              {value: 'A&R'},
              {value: 'Publisher'},
              {value: 'Manager'},
              {value: 'Mixer'},
              {value: 'Promoter'},
              {value: 'Photographer'},
              {value: 'Accompanist'},
              {value: 'Arranger'},
              {value: 'Security'},
              {value: 'Director'},
              {value: 'Composer'},
              {value: 'Record Executive'},
              {value: 'Album Cover Designer'},
              {value: 'Artist Development'},
              {value: 'Artist Relations'},
              {value: 'Entertainment Law'},
            ]}
            defaultSelectedIndexes={[0]}
            textStyle={{fontSize: 18, textAlign: 'center'}}
            buttonViewStyle={{
              alignItems: 'flex-start',
              borderWidth: 2,
              borderRadius: 27,
              borderColor: '#7F5AF0',
              textAlign: 'center',
              margin: 3
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
              justifyContent: 'flex-start',
              alignContent: 'center',
            }}
            onSelectedValuesChange={selectedValues =>
              setArr(selectedValues)
              // this._groupButtonOnSelectedValuesChange(selectedValues)
            }
          />
          </ScrollView>
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
              props.route.params.interests= arr;
            //   console.log(props.route.params)
              props.navigation.navigate('InclusionSurvey', props.route.params);
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
export default MyInterests;
