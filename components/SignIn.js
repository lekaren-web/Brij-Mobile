// screens/AddUserScreen.js
import React, {Component, useState, useEffect} from 'react';
import {IconButton, Colors} from 'react-native-paper';
// import {
//   RadialGradient,
//   ImageBackgroundPlaceholder,
// } from "react-native-image-filter-kit";

import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
  Label,
  Alert,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import { Auth } from 'aws-amplify';
import {useNavigation} from '@react-navigation/native'
// import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
// console.log('auth', auth());
// console.log('getAuth', getAuth);
const SignIn = (props) =>  {
const navigation = useNavigation()
// const imageStyle= {width: 320, height: 320},
const [email, setEmail]= useState('')
const [password, setPassword]= useState('')
const [currentUser, setCurrentUSer]= useState(null)


 const signIn = async () => {
    
      try {
        const user = await Auth.signIn(email, password);

        setCurrentUSer(user)
        // console.log('I am :', currentUser)
        // navigation.navigate('MyProfile')
      } catch (error) {
        Alert.alert('Opps,',error);
      }


  }


    return (
      <SafeAreaView>
          <View style={styles.container}>
        <View style={{margin: 10}}>
          <Text style={styles.TopicTitle}>Welcome back!</Text>
        </View>

        <View style={styles.inputGroup}>
          <Input
            label="Email"
            returnKeyType="next"
            keyboardType="email-address"
            errorStyle={{color: 'red'}}
            value={email}
            onChangeText={val => setEmail(val)}
            style={{
              borderStyle: 'solid',
              borderColor: '#30467B99',
              height: 40,
              borderBottomWidth: 1,
              width: '100%',
            }}
            // onChangeText={onChangeText}
            placeholder="yourname@example.com"
            // value={text}
          />

          <Input
            label="Password"
            returnKeyType="next"
            secureTextEntry={true}
            value={password}
            onChangeText={val => setPassword(val)}
            style={{
              borderStyle: 'solid',
              borderColor: '#30467B99',
              height: 40,
              borderBottomWidth: 1,
              width: '100%',
            }}
            // onChangeText={onChangeText}
            placeholder="************"
            // value={text}
          />

          {/* <KeyboardAvoidingView behavior="" > */}
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              if(email && password) {
                // signIn()
              navigation.navigate('MyProfile', currentUser)
              } else {
                return 
              }
            

            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '600',
                textAlign: 'center',
                fontSize: 20,
              }}>
              LOGIN
            </Text>
          </TouchableOpacity>

          <Text style={{color: '#30467B', top: 120}}>
          Don’t have an account yet?
          </Text>

          <Text
            style={{color: '#30467B', fontWeight: 'bold', top: 120}}
            onPress={() => navigation.navigate('SignUp')}>
            Sign up
          </Text>
          {/* </KeyboardAvoidingView> */}
        </View>
        </View>
      </SafeAreaView>
      // </TouchableWithoutFeedback>
    );
  }
const styles = StyleSheet.create({
  inputGroup: {
    backgroundColor: '#30467B',
    width: '100%',
    padding: 0,
    margin: 0,
  },
  button1: {
    // position: "absolute",
    top: 120,
    backgroundColor: '#7F5AF0',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 13,
    borderRadius: 50,
    marginBottom: 30,
  },
  TopicTitle: {
    width: '100%',
    fontSize: 36,
    marginBottom: '30%',
    fontWeight: 'bold',
    color: '#30467B',
    marginTop: '25%',
  },
  container: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column',
    width: '90%',
    height: '100%',
    margin: 20,
    marginTop: '20%'
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    // marginBottom: 420,
    margin: 0,
    // backgroundColor: 'red'F
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SignIn;
