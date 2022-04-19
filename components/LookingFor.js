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
  Alert
} from 'react-native';
import Option from './option';
import {
  SelectMultipleButton,
  SelectMultipleGroupButton,
} from 'react-native-selectmultiple-button';
const LookingFor = props => {
  // constructor(props) {
  // super(props);
  const [pressed, setpressed] = useState(false);
  const optionList1 = [
    'Goal Setting',
    'Career Mapping',
    'Resume Review',
    'Portfolio Creation',
  ];
  const optionList2 = ['Interview Tips', 'Project Advice', 'Networking Advice'];
  const [nextPage, setNextPage] = useState('lightgrey')
  //   constructor() {
  //     super();

  //   }
  // componentDidMount(){
  const [user, setUser] = useState(props.route.params);
  const [arr, setArr] = useState([]);
  //   // console.log(props.route.params)
  // }

  // render() {
  //     if (state.isLoading) {
  //       return (
  //         <View style={styles.preloader}>
  //           <ActivityIndicator size="large" color="#9E9E9E" />
  //         </View>

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [selectedIndex2, setSelectedIndex2] = useState(0);
  const [selectedIndexes2, setSelectedIndexes2] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: '100%'}}>
        {/* first component */}
        <View style={styles.component1}>
          <Text style={styles.headerText}>I am looking for</Text>
          <Text style={styles.subText}>Pick up to 3 options.</Text>
        </View>

        {/*  second component */}
        <View style={styles.options}>
          <SelectMultipleGroupButton
            multiple={true}
            group={[
              {value: 'Goal Setting'},
              {value: 'Career Mapping'},
              {value: 'Resume Review'},
              {value: 'Portfolio Creation'},
              {value: 'Interview Tips'},
              {value: 'Project Advice'},
              {value: 'Networking Advice'},
            ]}
            defaultSelectedIndexes={[0]}
            textStyle={{fontSize: 18, textAlign: 'center'}}
            buttonViewStyle={{
              alignItems: 'flex-start',
              borderWidth: 2,
              borderRadius: 27,
              borderColor: '#7F5AF0',
              textAlign: 'center',
              margin: 5,
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
              selectedValues => {setArr(selectedValues)
              setNextPage('#7F5AF0')}
              // this._groupButtonOnSelectedValuesChange(selectedValues)
            }
          />
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
            
                //   uncomment the alert when data is connected
                if(arr.length < 3){
                  Alert.alert('Please select at least 3')
                } else {
                  
                props.navigation.navigate('Myname', {
                  enableNotifs: props.route.params.enableNotifs,
                  mentor: props.route.params.mentor,
                  mentee: props.route.params.mentee,
                  both: props.route.params.both,
                  lookingFor: arr
                  
                })
              }
              
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
export default LookingFor;
