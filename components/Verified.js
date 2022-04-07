// screens/AddUserScreen.js
import React, { Component, useState, useEffect } from "react";
import { IconButton, Colors } from "react-native-paper";
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
} from "react-native";
// import { Input, Icon } from "react-native-elements";


// import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
// console.log('auth', auth());
// console.log('getAuth', getAuth);
class Verified extends Component {
  constructor() {
    super();
    // this.dbRef = firebase.firestore().collection("users");
    // this.getEmail, this.setEmail = useState('');
    // this.hasEmailErrors, setEmailErrors = useState(false);
    this.state = {
      imageStyle: { width: 320, height: 320 },
      // name: '',
      email: "",
      password: "",
      re_enter_password: "",
      // mobile: "",
      isLoading: false,
      appVerifier: null,
      response: "",
      keyboardStatus: false,
      errorMessage: "",
    };
  }

  componentDidMount() {
    this.keyboardDidShowSubscription = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        this.setState({ keyboardStatus: "true" });
      }
    );
    this.keyboardDidHideSubscription = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        this.setState({ keyboardStatus: "false" });
      }
    );
  }

  componentDidUpdate() {
    if (this.keyboardStatus == true) {
      console.log("true");
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
  storeUser() {
    
    if (this.state.re_enter_password !== this.state.password) {
      this.setState({
        errorMessage: "Password and Re-entered password do not match",
      });
    } else if (this.state.re_enter_password === this.state.password) {
      this.setState({ errorMessage: "" });
      if (this.state.password.length < 8) {
        this.setState({
          errorMessage: "Password needs to have at least 8 characters",
        });
      }
      // const recaptchaVerifier = React.useRef(null);
      // const phoneNumber = this.state.mobile;

      // this.state.appVerifier = window.recaptchaVerifier;

      // to sign in
      //  auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      // to sign up
    //   if(this.state.errorMessage.length === 0){
    //   auth()
    //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
    //     .then((userCredential) => {
    //       const user = userCredential.user;

    //       userCredential.user.sendEmailVerification();

    //       alert("Verification email sent!");

    //       this.setState({
    //         response: "Account Created!",
    //       });
    //       if (user) {
    //         this.dbRef
    //           .doc(user.uid)
    //           .set({
    //             name: "",
    //             email: this.state.email,
    //             password: this.state.password,
    //             verified: false,
    //             enableNotifs: false,
    //             mentor: false,
    //             mentee: false,
    //             lookingFor: [], //array of string values from frontend
    //             mobile: "",
    //             birthday: "",
    //             age: "",
    //             location: "",
    //             gender: "",
    //             disability: [], //array of string values from frontend
    //             disabilityVisible: false,
    //             ethnicity: [], //array of string values from frontend
    //             ethnicityVisible: false,
    //             sexuality: [], //array of string values from frontend
    //             sexualityVisible: false,
    //             addPhotos: [], //array of objects: {}
    //             myPhotos: [],
    //             aboutMe: "", //bio,
    //             myInterests: [], //array of string values
    //             testimonials: [], // TBD
    //             industry: [], //array of strings
    //             occupation: [], //array of strings
    //             education: [], //array of objects {schoolName:"", GradYear: "", ...etc}
    //             YearsOfExperience: "",
    //             VaccinationStatus: 0, // number that maps to value in array
    //           })
    //           .then((res) => {
    //             this.setState({
    //               // name: '',
    //               email: "",
    //               password: "",
    //               isLoading: false,
    //             });
    //           });

            // this.props.navigation.navigate("Password");
            // this.props.navigation.navigate("YoureVerified");
        //   }
        // })
        // .catch((error) => {
        //   switch (error.code) {
        //     case "auth/email-already-in-use":
        //       Alert.alert("Email already in use !");
        //       break;
        //   }
        
        // });
      }
      this.props.navigation.navigate("EmailVerify")
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.TopicTitle}>You’re Verified!
Let’s get you set up.</Text>
          
          <View style={styles.inputGroup}>
         

           

          <View style={{position:'absolute', bottom: 0,width: '100%'}}>
              <TouchableOpacity style={{textAlign: 'center', padding: 15, width: '100%', borderRadius:50,backgroundColor: '#7F5AF0', color: 'white'}} onPress={() => this.props.navigation.navigate('Notifs')}>
                  <Text style={{textAlign:'center',  color:'white', fontSize: 20}}>Continue</Text>
              </TouchableOpacity>
          </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  inputGroup: {
    backgroundColor: "#30467B",
  },
  button1: {
    // position: "absolute",
    top: 120,
    backgroundColor: "#7F5AF0",
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    padding: 13,
    borderRadius: 50,
    marginBottom: 10,
  },
  TopicTitle: {
    width: "100%",
    fontSize: 35,
    marginBottom: 15,
    fontWeight: "bold",
    color: "#30467B",
    justifyContent: 'center',
    textAlign:'left'
  },
  container: {
    flex: 1,
    padding: 35,
    height: "100%",
    // alignSelf: "center"
    // justifyContent: "center"
    paddingTop: 190,
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
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Verified;
