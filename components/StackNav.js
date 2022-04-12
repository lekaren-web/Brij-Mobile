import React from 'react';
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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator>
      {/* first screen */}
      <Stack.Screen
        name="Home"
        component={LoginScreen}
        options={{title: 'Login', headerShown: false}}
      />
      {/* second screen */}
      <Stack.Screen
        name="SignUpHow"
        component={SignUp}
        options={{title: 'SignUpHow', headerShown: false}}
      />
      {/* signup with email screen */}
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
};

export default StackNav;

const styles = StyleSheet.create({});
