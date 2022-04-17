import React, { Component, useState, useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LoginScreen from './Login';
import EmailSignUp from './SignUpEmail';
import SignUp from './SignUpHow';
import EmailVerify from './EmailVerify'
import Verified from './Verified';
import Notifs from './Notifs';
import IamA from './IamA'
import LookingFor from './LookingFor'
import Myname from './Myname'
import Mybirthday from './Mybirthday'
import MyLocation from './MyLocation'
import MyProfile from './MyProfile'
import Explore from './Explore'
import Message from './Message'
import SignIn from './SignIn'
import Mygender from './Mygender'
import Disability from './Disability'
import Myethnicity from './Myethnicity'
import Mysexuality from './Mysexuality'
import MyInterests from './MyInterests'
import InclusionSurvey from './InclusionSurvey'
import AddPhotos from './AddPhotos'
import InclusivityAgreement from './InclusivityAgreement'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Auth} from 'aws-amplify'
const Stack = createNativeStackNavigator();

const StackNav = () =>  {
  // state ={
    const [currentUser, setCurrentUSer] =  useState(null)
  // }
  // useEffect( async () => {
    
  //   // setCurrent(await Auth.currentAuthenticatedUser())
  //   const getUSer = async() => {
  //     setCurrentUSer(await Auth.currentAuthenticatedUser())
  //   console.log(currentUser)
  //   }

  //   getUSer()
  // }, [])
  // render(){

  return (
 <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={LoginScreen}
        options={{title: 'Login', headerShown: false}}
      />
      <Stack.Screen
        name="SignUpHow"
        component={SignUp}
        options={{title: 'SignUpHow', headerShown: false}}
      />
      
      <Stack.Screen
        name="EmailSignUp"
        component={EmailSignUp}
        options={{title: 'EmailSignUp', headerShown: false}}
      />
      <Stack.Screen
        name="EmailVerify"
        component={EmailVerify}
        options={{title: 'EmailVerify', headerShown: false}}
      />
      <Stack.Screen
        name="Verified"
        component={Verified}
        options={{title: 'Verified', headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{title: 'SignIn', headerShown: false}}
      />
      <Stack.Screen
        name="Notifs"
        component={Notifs}
        options={{title: 'Notifs', headerShown: false}}
      />
      <Stack.Screen
        name="IamA"
        component={IamA}
        options={{title: 'IamA', headerShown: false}}
      />
      <Stack.Screen
        name="LookingFor"
        component={LookingFor}
        options={{title: 'LookingFor', headerShown: false}}
      />
      <Stack.Screen
        name="Myname"
        component={Myname}
        options={{title: 'Myname', headerShown: false}}
      />
      <Stack.Screen
        name="Mybirthday"
        component={Mybirthday}
        options={{title: 'Mybirthday', headerShown: false}}
      />
      <Stack.Screen
        name="MyLocation"
        component={MyLocation}
        options={{title: 'MyLocation', headerShown: false}}
      />
      <Stack.Screen
        name="Mygender"
        component={Mygender}
        options={{title: 'Mygender', headerShown: false}}
      />
      <Stack.Screen
        name="Disability"
        component={Disability}
        options={{title: 'Disability', headerShown: false}}
      />
      <Stack.Screen
        name="Myethnicity"
        component={Myethnicity}
        options={{title: 'Myethnicity', headerShown: false}}
      />
      <Stack.Screen
        name="Mysexuality"
        component={Mysexuality}
        options={{title: 'Mysexuality', headerShown: false}}
      />
      <Stack.Screen
        name="MyInterests"
        component={MyInterests}
        options={{title: 'MyInterests', headerShown: false}}
      />
      <Stack.Screen
        name="InclusionSurvey"
        component={InclusionSurvey}
        options={{title: 'InclusionSurvey', headerShown: false}}
      />
      <Stack.Screen
        name="AddPhotos"
        component={AddPhotos}
        options={{title: 'AddPhotos', headerShown: false}}
      />
      <Stack.Screen
        name="InclusivityAgreement"
        component={InclusivityAgreement}
        options={{title: 'InclusivityAgreement', headerShown: false}}
      />  
      

      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{title: 'MyProfile', headerShown: false}}
      />
     
      <Stack.Screen
        name="Explore"
        component={Explore}
        options={{title: 'Explore', headerShown: false}}
      />
      <Stack.Screen
        name="Message"
        component={Message}
        options={{title: 'Message', headerShown: false}}
      />
      </Stack.Navigator>
      
  );
}
// };

export default StackNav;

const styles = StyleSheet.create({});
