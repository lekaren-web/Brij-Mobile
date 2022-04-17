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
import {Auth, DataStore} from 'aws-amplify';
import {User} from '../src/models';
const InclusivityAgreement = props => {
  const [InclusivityAgreement, setInclusivityAgreement] = useState(false);
  const userData = {
    name: props.route.params.name,
        birthday: props.route.params.birthday,
        age: props.route.params.age,
        phone: '',
        email: '',
        enableNotifs: props.route.params.enableNotifs,
        mentor: props.route.params.mentor,
        mentee: props.route.params.mentee,
        lookingFor: props.route.params.lookingFor,
        gender: props.route.params.gender,
        pronouns: '',
        disability: props.route.params.disability,
        disabilityVisible: props.route.params.disabilityVisible,
        ethnicity: props.route.params.ethnicity,
        ethnicityVisible: props.route.params.ethnicityVisible,
        sexuality: props.route.params.sexuality,
        sexualityVisible: props.route.params.sexualityVisible,
        bio: 'Lorem ipsum dolor sit amet',
        myInterest: [],
        testimonials: [],
        industry: [],
        occupation: [],
        education: [],
        yearsOfExperience: 0,
        VaccinationStatus: 'Lorem ipsum dolor sit amet',
        Org: false,
        OrgName: 'Lorem ipsum dolor sit amet',
        followList: [],
        pictures: [],
        profilePic: 'Lorem ipsum dolor sit amet',
        both: props.route.params.both,
        interests: props.route.params.interests,
        inclusionSurvery: props.route.params.inclusionSurvery,
        InclusivityAgreement: props.route.params.InclusivityAgreement,
        sub: ""
  }
  const save = async (val) => {
    const userAuth = await Auth.currentAuthenticatedUser();
    await DataStore.save(
      new User({
        name: props.route.params.name,
        birthday: props.route.params.birthday,
        age: props.route.params.age,
        phone: '',
        email: '',
        enableNotifs: props.route.params.enableNotifs,
        mentor: props.route.params.mentor,
        mentee: props.route.params.mentee,
        lookingFor: props.route.params.lookingFor,
        gender: props.route.params.gender,
        pronouns: '',
        disability: props.route.params.disability,
        disabilityVisible: props.route.params.disabilityVisible,
        ethnicity: props.route.params.ethnicity,
        ethnicityVisible: props.route.params.ethnicityVisible,
        sexuality: props.route.params.sexuality,
        sexualityVisible: props.route.params.sexualityVisible,
        bio: 'Use this space to give a quick rundown of who you are and what you do.',
        myInterest: [],
        testimonials: [],
        industry: [],
        occupation: [],
        education: [],
        yearsOfExperience: 0,
        VaccinationStatus: '',
        Org: false,
        OrgName: '',
        followList: [],
        pictures: props.route.params.pictures,
        profilePic: '',
        both: props.route.params.both,
        interests: props.route.params.interests,
        inclusionSurvery: props.route.params.inclusionSurvery,
        InclusivityAgreement: val,
        sub: userAuth.attributes.sub,
        premium: false,
        freemium: true,
        active: true,
        location: props.route.params.location
      ,
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: '100%'}}>
        {/* first component */}
        <View style={styles.component1}>
          <Text style={styles.headerText}>We value inclusivity</Text>
          <Text style={styles.subText}>
            Welcome! We are thrilled to be a part of your creative endevors.
          </Text>

          <Text style={styles.subText}>
            Everyone is treated with kindness and respect here. Regardless of
            race, religion, nationality, ethnicity, ability, size, gender
            identity, or sexual orientation.
          </Text>
          <Text style={styles.subText}>
            We invite you to join us in our mission to actively keep brij safe
            and inclusive by following our guidelines.
          </Text>
          <Text style={styles.subText}>
            Keep in mind that we've always got your back!
          </Text>
        </View>

        {/*  second component */}

        <View
          style={{
            position: 'absolute',
            bottom: '15%',
            alignSelf: 'center',
            borderRadius: 50,
          }}>
          <TouchableOpacity
            onPress={() => {
              const val = true
              setInclusivityAgreement(true);
              props.route.params.InclusivityAgreement = InclusivityAgreement;
              //   console.log(props.route.params);
              save(val);
                props.navigation.navigate('MyProfile', props.route.params);
            }}
            style={{
              borderRadius: 50,
              backgroundColor: '#7F5AF0',
              width: 300,
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#FEFEFE',
                fontSize: 18,
                fontWeight: '600',
              }}
              color={Colors.white}
              size={40}>
              I agree
            </Text>
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
    marginTop: '45%',
    alignSelf: 'center',
    padding: 10,
  },
  headerText: {
    color: '#30467B',
    fontSize: 36,
    fontWeight: '600',
    textAlign: 'left',
    alignSelf: 'center',
    marginBottom: 20,
  },
  subText: {
    color: '#30467B',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'left',
    margin: 10,
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
  },
});
export default InclusivityAgreement;
