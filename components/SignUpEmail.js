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
import Amplify from 'aws-amplify';
import {Auth} from 'aws-amplify';
// import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
// console.log('auth', auth());
// console.log('getAuth', getAuth);
class SignUpEmail extends Component {
  constructor() {
    super();
    // this.dbRef = firebase.firestore().collection("users");
    // this.getEmail, this.setEmail = useState('');
    // this.hasEmailErrors, setEmailErrors = useState(false);
    this.state = {
      imageStyle: {width: 320, height: 320},
      // name: '',
      email: '',
      password: '',
      re_enter_password: '',
      // mobile: "",
      isLoading: false,
      appVerifier: null,
      response: '',
      keyboardStatus: false,
      errorMessage: '',
    };
  }

  componentDidMount() {
    this.keyboardDidShowSubscription = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        this.setState({keyboardStatus: 'true'});
      },
    );
    this.keyboardDidHideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        this.setState({keyboardStatus: 'false'});
      },
    );
  }

  componentDidUpdate() {
    if (this.keyboardStatus == true) {
    }
  }

  componentWillUnmount() {
    this.keyboardDidShowSubscription.remove();
    this.keyboardDidHideSubscription.remove();
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };
  async storeUser() {
    if (this.state.re_enter_password !== this.state.password) {
      this.setState({
        errorMessage: 'Password and Re-entered password do not match',
      });
    } else if (this.state.re_enter_password === this.state.password) {
      
      if (this.state.password.length < 8) {
        this.setState({errorMessage: 'Your password must be at least 8 characters'});
      }
      if (this.state.password.search(/[a-z]/i) < 0) {
        this.setState({errorMessage:'Your password must contain at least one letter.'});
      }
      if (this.state.password.search(/[0-9]/) < 0) {
        this.setState({errorMessage:'Your password must contain at least one digit.'});
      }
      else {

      this.setState({errorMessage: ''});
      try {
        const {user} = await Auth.signUp({
          username: this.state.email,
          password: this.state.password,
          // attributes: {
          //     email,          // optional
          //     phone_number,   // optional - E.164 number convention
          //     // other custom attributes
          // }
        })
      
        this.props.navigation.navigate('EmailVerify', {username: this.state.email, password: this.state.password})
      } catch (error) {
        alert(error);
      }
    }

    }

    // this.props.navigation.navigate("EmailVerify")
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }

    return (
      // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        {
          /* <RadialGradient
          colors={["red", "#00ff00", "blue"]}
          stops={[0, 0.5, 1]}
          image={
            <ImageBackgroundPlaceholder style={this.state.imageStyle}>
              /* your content here */
          // </ImageBackgroundPlaceholder>
        }
        {/* />  */}
        <View style={{margin: 10}}>
          <Text style={styles.TopicTitle}>Sign Up</Text>
          <Text style={{color: '#8390B0', marginBottom: 30}}>
            Create an account to start matching with creatives.
          </Text>
        </View>

        {/* <Text style={{fontSize: 20,  marginBottom: 50, color: '#30467BCC'}}>We will be sending you a verification code.</Text> */}
        <View style={styles.inputGroup}>
          <Input
            label="Email"
            returnKeyType="next"
            keyboardType="email-address"
            errorStyle={{color: 'red'}}
            value={this.state.email}
            onChangeText={val => this.setState({email: val})}
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
          errorMessage={this.state.errorMessage}
            label="Password"
            returnKeyType="next"
            errorStyle={{color: 'red'}}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={val => this.setState({password: val})}
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

          <Input
            secureTextEntry={true}
            errorStyle={{color: 'red'}}
            errorMessage={this.state.errorMessage}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(48, 70, 123, 0.6)',
              borderStyle: 'solid',
            }}
            placeholder={'*********'}
            value={this.re_enter_password}
            label="Re-enter Password"
            onChangeText={val => this.setState({re_enter_password: val})}
          />

          {/* <KeyboardAvoidingView behavior="" > */}
          <TouchableOpacity
            style={styles.button1}
            onPress={() => this.storeUser()}>
            <Text
              style={{
                color: 'white',
                fontWeight: '600',
                textAlign: 'center',
                fontSize: 20,
              }}>
              SIGN UP
            </Text>
          </TouchableOpacity>

          <Text style={{color: '#30467B', top: 120}}>
            Already have an account?
          </Text>

          <Text
            style={{color: '#30467B', fontWeight: 'bold', top: 120}}
            onPress={() => this.props.navigation.navigate('Login')}>
            Login
          </Text>
          {/* </KeyboardAvoidingView> */}
        </View>
      </SafeAreaView>
      // </TouchableWithoutFeedback>
    );
  }
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
    top: 100,
    backgroundColor: '#7F5AF0',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 13,
    borderRadius: 50,
    marginBottom: 10,
  },
  TopicTitle: {
    width: '70%',
    fontSize: 45,
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#30467B',
    marginTop: '25%',
  },
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
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
export default SignUpEmail;
