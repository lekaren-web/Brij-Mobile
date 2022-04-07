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
  SafeAreaView,
} from "react-native";

import RNPickerSelect from 'react-native-picker-select';
// import RNLocation from 'react-native-location';


class Myname extends Component {
  constructor() {
    super();
  this.state = {}
//   this.props.navigation.navigate("PhoneCodeVerification");
 }

 

 componentDidMount(){
    // RNLocation.configure({
    //     distanceFilter: null
    // });
    if (window.navigator.geolocation) {
        // Geolocation available
        console.log('HERE',window.navigator.geolocation)
    } 
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
      <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.heading}>My Location</Text>
            <Text style={styles.subHeading}>Find your current city. You’re able to change this at any time.</Text>
            {/* <TextInput
            style={styles.input}
            placeholder="Please insert your name"
            >
            </TextInput> */}
            {/* <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        /> */}
            <View style={{position: 'absolute', bottom:'10%', right: 0}}>
            <IconButton
              style={{backgroundColor: 'lightgray', width: 80, height: 45}}
              icon="arrow-right"
              color={Colors.white}
              size={40}
              onPress={() => {
                //   uncomment the alert when data is connected
                // alert('Please insert your name before continuing');
                this.props.navigation.navigate("Mybirthday")
              }}
            />
          </View>
          
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        margin: 20,
        height: '100%'
    },
    heading: {
        fontSize: 36,
        color:'#30467B',
        fontWeight: '600',
        // position: "absolute",
        // top: '20%',
        marginBottom: 10,
        marginTop: '50%',
    },
    subHeading:{
        color: '#30467BCC',
        fontSize: 12
    },
    input:{
        marginTop: '30%',
        borderBottomWidth: 1,
        borderBottomColor: '#30467B',
    }
});
export default Myname;
