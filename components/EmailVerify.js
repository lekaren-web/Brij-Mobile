// screens/AddUserScreen.js
import React, {Component, useState, useEffect} from 'react';
import {IconButton, Colors} from 'react-native-paper';
// import {
//   RadialGradient,
//   ImageBackgroundPlaceholder,
// } from "react-native-image-filter-kit";

import {
  Button,
  SafeAreaView,
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
} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import {Auth} from 'aws-amplify';
import ConfettiCannon from 'react-native-confetti-cannon';
// import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
// console.log('auth', auth());
// console.log('getAuth', getAuth);
class EmailVerify extends Component {
  constructor(props) {
    super(props);
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
      code: '',
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

  async confirmCode() {
    // sending username over from sign up screen
    try {
      await Auth.confirmSignUp(
        this.props.route.params.username,
        this.state.code,
      );
      await Auth.signIn(
        this.props.route.params.username,
        this.props.route.params.password,
      )
      this.props.navigation.navigate('Verified');
    } catch (e) {
      alert('Invalid Verfication Code!');
    }
  }

  componentDidUpdate() {
    if (this.keyboardStatus == true) {
      console.log('true');
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
      <SafeAreaView>
        <View style={styles.container}>
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
          <Text style={styles.TopicTitle}>
            We just sent you a verification code.
          </Text>
          <Text style={{color: '#8390B0', marginBottom: 30, fontSize: 13}}>
            Please check your email and enter the 6-digit code you recieved.
          </Text>
          {/* <Text style={{fontSize: 20,  marginBottom: 50, color: '#30467BCC'}}>We will be sending you a verification code.</Text> */}
          <View style={styles.inputGroup}>
            <Input
              value={this.state.code}
              onChangeText={val => this.setState({code: val})}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              style={{
                borderStyle: 'solid',
                borderColor: '#30467B99',
                height: 40,
                borderBottomWidth: 1,
                width: '100%',
                marginTop: 40,
              }}
              // onChangeText={onChangeText}
              placeholder="_ _ _ _ _ _"
              // value={text}
            />

            {/* <Input
              errorStyle={{ color: "red" }}
              returnKeyType="next"
              keyboardType="email-address"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "rgba(48, 70, 123, 0.6)",
                borderStyle: "solid",
              }}
              placeholder={"yourname@example.com"}
              value={this.state.email}
              label="Email"
              onChangeText={(val) => this.setState({ email: val })}
            /> */}

            {/* <Input
             errorStyle={{ color: "red" }}
             errorMessage={this.state.errorMessage}
              returnKeyType="next"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "rgba(48, 70, 123, 0.6)",
                borderStyle: "solid",
              }}
              placeholder={"*********"}
              value={this.state.password}
              label="Password"
              onChangeText={(val) => this.setState({ password: val })}
            /> */}

            {/* <Input
              errorStyle={{ color: "red" }}
              errorMessage={this.state.errorMessage}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "rgba(48, 70, 123, 0.6)",
                borderStyle: "solid",
              }}
              placeholder={"*********"}
              value={this.re_enter_password}
              label="Re-enter Password"
              onChangeText={(val) => this.setState({ re_enter_password: val })}
            /> */}

            <View style={{position: 'absolute', bottom: -10, right: -5}}>
              <TouchableOpacity
                style={{backgroundColor: 'lightgray', width: 80, height: 45}}
                color={Colors.white}
                size={40}
                onPress={() => {
                  //   this.storeUser();
                  this.confirmCode();
                  // this.props.navigation.navigate('Verified')
                }}>
                <Text>Place holder</Text>
              </TouchableOpacity>
            </View>

            {/* <KeyboardAvoidingView behavior="" > */}
            <Text style={{color: '#30467B', top: 20, fontSize: 13}}>
              Didn’t get a code?
            </Text>

            {/* </KeyboardAvoidingView> */}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  inputGroup: {
    backgroundColor: '#30467B',
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
    marginBottom: 10,
  },
  TopicTitle: {
    width: '100%',
    fontSize: 35,
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#30467B',
    justifyContent: 'center',
    textAlign: 'left',
    marginTop: '27%',
  },
  container: {
    padding: 35,
    height: '100%',
    display: 'flex',
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
export default EmailVerify;
