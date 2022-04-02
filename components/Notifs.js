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
  TouchableOpacity,
  Modal
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
    modalVisible: false,
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
  async enableNotifs(val){
    this.setState({enableNotifs: true})
  this.props.navigation.navigate("IamA");
 }
 setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
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
        <Text style={styles.TopicTitle}>Stay in the loop.</Text>
        <TouchableOpacity style={styles.button2} onPress={() => this.enableNotifs()}>
      <Text style={{color: '#30467B', textAlign: 'center', fontSize: 20}}>Enable Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3}>
      <Text style={{color: 'black', textAlign: 'center', fontSize: 20}} onPress={() => this.setModalVisible()}>Disable Notifications</Text>
      </TouchableOpacity>
      <View style={{ position: "absolute", bottom: 26, right: 10 }}>
          <IconButton
            style={{ backgroundColor: "lightgray", width: 80, height: 45 }}
            icon="arrow-right"
            color={Colors.white}
            size={40}
            onPress={() => this.props.navigation.navigate("IamA")}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{fontSize: 30, fontWeight:'600', color: '#30467B', marginBottom: 10}}>Are you sure?</Text>
              <Text style={{textAlign: 'center', color:'#8390B0'}}>By disabling notifications you’ll miss new connections and opportunites.</Text>
              {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
              <TouchableOpacity style={styles.button4}>
      <Text style={{color: '#30467B', textAlign: 'center', fontSize: 18}} onPress={() => this.setDisabled(true)}>Enable Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={{color:'#8390B0', marginTop: 10}} onPress={() => {this.setDisabled(false), this.setModalVisible(false)}}>Not now</Text>
      </TouchableOpacity>
      
            </View>
          </View>
        </Modal>
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
        backgroundColor:'#D9CEFB',
        borderRadius: 50,
        width: '100%',
        alignSelf:'center',
        justifyContent: 'center',
        padding: 15,
        marginTop: '20%',
        color: 'white',
      },
      button4:{
        textAlign:'center',
        backgroundColor:'#D9CEFB',
        borderRadius: 50,
        width: '100%',
        alignSelf:'center',
        justifyContent: 'center',
        padding: 10,
        paddingLeft:20,
        paddingRight:20,
        marginTop: '20%',
        color: 'white',
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
    marginBottom: 20,
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

  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
export default AddUserScreen;
