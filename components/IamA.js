// screens/AddUserScreen.js
import React, { Component } from "react";
import { IconButton, Colors } from "react-native-paper";
import { db } from "../database/firebaseDb";
import {
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity
} from "react-native";




// import { auth } from "firebase";
// import * as fb from "firebase";
// import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
// console.log('auth', auth());
// console.log('getAuth', getAuth);

class AddUserScreen extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColorMentor:'#7F5AF0',
      colorMentor: 'white',
      backgroundColorMentee:'#7F5AF0',
      colorMentee: 'white',
      backgroundColorBoth:'#7F5AF0',
      colorBoth: 'white',
      mobile: "",
      currentUser: "",
      user: "",
      isLoading: false,
      name: "",
      email: "",
      password: "",
      verified: false,
      enableNotifs: false,
      mentor: false,
      mentee: false,
      lookingFor: [], //array of string values from frontend
      mobile: "",
      birthday: "",
      age: "",
      location: "",
      gender: "",
      disability: [], //array of string values from frontend
      disabilityVisible: false,
      ethnicity: [], //array of string values from frontend
      ethnicityVisible: false,
      sexuality: [], //array of string values from frontend
      sexualityVisible: false,
      addPhotos: [], //array of objects: {}
      myPhotos: [],
      aboutMe: "", //bio,
      myInterests: [], //array of string values
      testimonials: [], // TBD
      industry: [], //array of strings
      occupation: [], //array of strings
      education: [], //array of objects {schoolName:"", GradYear: "", ...etc}
      YearsOfExperience: "",
      VaccinationStatus: 0, // number that maps to value in array
    };
  }

  async componentDidMount() {
  }

  async editMM(val){
    if(this.state.mentor && !this.state.mentee){
        this.setState({backgroundColorMentor : '#D9CEFB', colorMentor : '#7F5AF0'})
    } else if(!this.state.mentor) {
        this.setState({backgroundColorMentor : '#7F5AF0', colorMentor : 'white'})
    }
    if(this.state.mentee  && !this.state.mentor){
        this.setState({backgroundColorMentee : '#D9CEFB', colorMentee : '#7F5AF0'})
    }else if (!this.state.mentee){
        this.setState({backgroundColorMentee : '#7F5AF0', colorMentee : 'white'})
    }

    if(this.state.mentor && this.state.mentee){
        this.setState({backgroundColorBoth : '#D9CEFB', colorBoth : '#7F5AF0'})
        this.setState({backgroundColorMentee : '#7F5AF0', colorMentee : 'white'})
        this.setState({backgroundColorMentor : '#7F5AF0', colorMentor : 'white'})
    }else if (!this.state.mentor && !this.state.mentee) {
        this.setState({backgroundColorBoth : '#7F5AF0', colorBoth : 'white'})
    }


//   this.props.navigation.navigate("PhoneCodeVerification");
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
      <View style={styles.container}>
        <Text style={styles.TopicTitle}>I am a</Text>
        <TouchableOpacity style={{
            backgroundColor: this.state.backgroundColorMentor,
            textAlign:'center',
            borderRadius: 50,
            width: '100%',
            alignSelf:'center',
            justifyContent: 'center',
            padding: 10,
            marginTop: '5%',
            color: this.state.colorMentor
            }} onPress={() => {this.state.mentor= !this.state.mentor, this.state.mentee= false, this.editMM()}}>
      <Text style={{color: this.state.colorMentor, textAlign: 'center', fontSize: 20, fontWeight: '700'}} >mentor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
           backgroundColor: this.state.backgroundColorMentee,
           textAlign:'center',
           borderRadius: 50,
           width: '100%',
           alignSelf:'center',
           justifyContent: 'center',
           padding: 10,
           marginTop: '5%',
           color: this.state.colorMentee
      }} onPress={() => {this.state.mentee= !this.state.mentee, this.state.mentor= false, this.editMM()}}>
      <Text style={{color: this.state.colorMentee, textAlign: 'center', fontSize: 20,fontWeight: '700'}}>mentee</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
           backgroundColor: this.state.backgroundColorBoth,
           textAlign:'center',
           borderRadius: 50,
           width: '100%',
           alignSelf:'center',
           justifyContent: 'center',
           padding: 10,
           marginTop: '5%',
           color: this.state.colorBoth
      }}
      onPress={() => {this.state.mentee= true, this.state.mentor= true, this.editMM()}} 
      >
      <Text style={{color: this.state.colorBoth, textAlign: 'center', fontSize: 20, fontWeight: '700'}} >both</Text>
      </TouchableOpacity>
      <View style={{ position: "absolute", bottom: 26, right: 10 }}>
          <IconButton
            style={{ backgroundColor: "lightgray", width: 80, height: 45 }}
            icon="arrow-right"
            color={Colors.white}
            size={40}
            onPress={() =>{ if(this.state.mentor || this.state.mentee){this.props.navigation.navigate("LookingFor")} else {
              alert('Please select one')
            }} }
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        color: 'white',
        backgroundColor: 'black',
    },
    button2:{
        textAlign:'center',
        borderColor: '#7F5AF0', 
        borderWidth: 1,
        borderRadius: 50,
        width: '100%',
        alignSelf:'center',
        justifyContent: 'center',
        padding: 15,
        marginTop: '5%',
        color: 'white'
      },
      button3:{
        textAlign:'center',
        borderColor: '#7F5AF0', 
        backgroundColor:'transparent',
        borderWidth: 1,
        borderRadius: 50,
        width: '100%',
        alignSelf:'center',
        justifyContent: 'center',
        padding: 15,
        marginTop: 20,
        color: 'black',
      },
  inputGroup: {
    backgroundColor: "#30467B",
  },
  TopicTitle: {
    width: "100%",
    fontSize:40,
    marginBottom: 70,
    fontWeight: "bold",
    color: "#30467B",
  },
  TopicTitle2: {
    width: "100%",
    fontSize:40,
    marginBottom: 40,
    fontWeight: "bold",
    color: "#30467B",
  },
  container: {
    flex: 1,
    padding: 35,
    height: "100%",
    // alignSelf: "center"
    // justifyContent: "center"
    paddingTop: 200,
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
export default AddUserScreen;
