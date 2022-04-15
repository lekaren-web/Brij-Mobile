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
  ImageBackground,
} from 'react-native';
import image from '../assets/profile.png';
import image2 from '../assets/profile2.png';
import Option from './option';
import {
  SelectMultipleButton,
  SelectMultipleGroupButton,
} from 'react-native-selectmultiple-button';
const AddPhotos = props => {
  // constructor(props) {
  // super(props);

  //   constructor() {
  //     super();

  //   }
  // componentDidMount(){
  const [arr, setArr] = useState([]);
  //   // console.log(props.route.params)
  // }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: '100%'}}>
        {/* first component */}
        <View style={styles.component1}>
          <Text style={styles.headerText}>Add Photos</Text>
          <Text style={styles.subText}>Add at least 2 photos to continue</Text>
        </View>

        {/*  second component */}
        <View style={styles.outerPhoto}>
          <View style={styles.thirdPhotoComponent}>
            <TouchableOpacity
              onPress={() => {
                handleChoosePhoto();
              }}
              style={styles.innerThirdPhoto}>
              <Text style={styles.photoInput}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleChoosePhoto();
              }}
              style={styles.innerThirdPhoto}>
              <Text style={styles.photoInput}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleChoosePhoto();
              }}
              style={styles.innerThirdPhoto}>
              <Text style={styles.photoInput}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleChoosePhoto();
              }}
              style={styles.innerThirdPhoto}>
              <Text style={styles.photoInput}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleChoosePhoto();
              }}
              style={styles.innerThirdPhoto}>
              <Text style={styles.photoInput}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleChoosePhoto();
              }}
              style={styles.innerThirdPhoto}>
              <Text style={styles.photoInput}>+</Text>
            </TouchableOpacity>
          </View>
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
            //   props.route.params.interests = arr;
              //   console.log(props.route.params)
              props.navigation.navigate('InclusivityAgreement', props.route.params);
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

  outerPhoto: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 370,
    borderRadius: 10,
    margin: 0,
    marginTop: 20,
    padding: 10,
  },
  topPhotoRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftPhoto: {
    width: '65%',
    height: 238,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bigPhoto: {
    width: '100%',
    height: '100%',
  },
  rightPhotos: {
    display: 'flex',
    flexDirection: 'column',
    height: 200,
    width: '35%',
    borderRadius: 10,
    padding: 0,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightImage: {
    width: '85%',
    height: '57%',
    borderRadius: 10,
    marginBottom: 12,
    overflow: 'hidden',
    backgroundColor: '#D9CEFB80',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdPhotoComponent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '33%',
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  innerThirdPhoto: {
    borderRadius: 10,
    backgroundColor: '#D9CEFB80',
    width: '30%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  photoInput: {
    fontSize: 35,
    color: '#A58CF5',
    fontWeight: '300',
  },
  aboutMe: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  topicDescription: {
    fontSize: 16,
    fontWeight: '400',
    color: '#30467BCC',
    marginTop: 5,
    marginBottom: 5,
  },
  aboutMeInput: {
    padding: 5,
    borderWidth: 2,
    height: 90,
    borderRadius: 10,
    borderColor: '#D9CEFB',
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
  },
  myInterests: {
    display: 'flex',
    flexDirection: 'column',
  },
  tagContainer: {
    borderWidth: 2,
    borderColor: '#D9CEFB',
    padding: 3,
    borderRadius: 10,
    overflow: 'scroll',
    width: '100%',
  },
  tagInserts: {
    marginTop: 10,
  },
  Testimonals: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: -15,
  },
  TestimonalsTags: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  basics: {
    display: 'flex',
    flexDirection: 'column',
  },
  basicsEach: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 5,
  },
  basicText: {
    color: '#30467B',
    fontSize: 16,
    fontWeight: '500',
  },
  basicAdd: {
    color: '#30467B',
    fontWeight: '400',
    fontSize: 16,
  },
  basicButtons: {
    display: 'flex',
    flexDirection: 'row',
  },
  pronounContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  pronouns: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    height: 50,
    borderWidth: 2,
    borderColor: '#D9CEFB',
  },
  eachAccount: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#D9CEFB',
    height: 170,
    borderRadius: 11,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  accountCenterContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  accountTopic: {
    color: '#30467B',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 5,
    width: 230,
  },
  circle: {
    width: 23,
    height: 23,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#D9CEFB',
  },
  accoutSelect: {
    width: '100%',
    height: 70,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3,
  },
  top5: {
    width: 60,
    height: 60,
    backgroundColor: '#D9CEFB80',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  top5input: {
    fontSize: 25,
    color: '#A58CF5',
  },
});
export default AddPhotos;
