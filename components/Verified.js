// screens/AddUserScreen.js
import React, {Component, useState, useEffect} from 'react';
import {IconButton, Colors} from 'react-native-paper';
// import {
//   RadialGradient,
//   ImageBackgroundPlaceholder,
// } from "react-native-image-filter-kit";
import ConfettiCannon from 'react-native-confetti-cannon';
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
  SafeAreaView,
} from 'react-native';
// import { Input, Icon } from "react-native-elements";

// import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
// console.log('auth', auth());
// console.log('getAuth', getAuth);
class Verified extends Component {
  explosion;
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
    this.explosion && this.explosion.start();
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
      <SafeAreaView style={styles.container}>
        <ConfettiCannon
          count={200}
          origin={{x: -10, y: 0}}
          autoStart={false}
          ref={ref => (this.explosion = ref)}
        />
        <View style={styles.innerContainter}>
          <Text style={styles.TopicTitle}>
            You’re Verified!
          </Text>
          <Text style={styles.TopicTitle2}> Let’s get you set up.</Text>

          <View style={styles.inputGroup}>
            <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
              <TouchableOpacity
                style={{
                  textAlign: 'center',
                  padding: 15,
                  width: '100%',
                  borderRadius: 50,
                  backgroundColor: '#7F5AF0',
                  color: 'white',
                }}
                onPress={() => this.props.navigation.navigate('Notifs')}>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 20}}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
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
    top: 0,
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#30467B',
    justifyContent: 'center',
    textAlign: 'left',
    marginTop: '50%'
  },
  TopicTitle2: {
    width: '100%',
    fontSize: 32,
    marginBottom: '50%',
    fontWeight: 'bold',
    color: '#30467B',
    justifyContent: 'center',
    textAlign: 'left',
  },
  container: {
    display: 'flex',
    flexDirection:'column',
    height:'100%',
    // alignSelf: "center"
    justifyContent: "space-between",
    alignContent: 'space-between'
  },
  innerContainter:{
    padding: 20,
    height:'100%',
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
export default Verified;
