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
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
