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
 
 
  const save = async () => {
    const user  = await Auth.currentAuthenticatedUser();
    const newUser = new User({
      sub: user.attributes.sub,
      name: props.route.params.name,
      birthday: props.route.params.birthday,
      age: props.route.params.age,
      phone: props.route.params.phone,
      email: props.route.params.email,
      enableNotifs: props.route.params.enableNotifs,
      mentor: props.route.params.mentor,
      mentee: props.route.params.mentee,
      lookingFor: props.route.params.lookingFor,
      gender: props.route.params.gender,
      pronouns: props.route.params.pronouns,
      disability: props.route.params.disability,
      disabilityVisible: props.route.params.disabilityVisible,
      ethnicity: props.route.params.ethnicity.toString(),
      ethnicityVisible: props.route.params.ethnicityVisible,
      sexuality: props.route.params.sexuality,
      sexualityVisible: props.route.params.sexualityVisible,
      bio: props.route.params.bio,
      myInterest: props.route.params.myInterest,
      testimonials: props.route.params.testimonials,
      industry: [],
      occupation: [],
      education: [],
      yearsOfExperience: 0,
      VaccinationStatus: '',
      Org: false,
      OrgName: '',
      followList: [],
      pictures: [],
      profilePic: '',
      both: props.route.params.both,
      interests: props.route.params.interests,
      inclusionSurvery: props.route.params.inclusionSurvery,
      InclusivityAgreement: props.route.params.InclusivityAgreement,
    });
    DataStore.save(newUser);
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
              setInclusivityAgreement(true);
              props.route.params.InclusivityAgreement = InclusivityAgreement;
              //   console.log(props.route.params);
              save();
            //   props.navigation.navigate('MyProfile', props.route.params);
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
