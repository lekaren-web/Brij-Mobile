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
  SafeAreaView,
  TouchableOpacity
} from "react-native";


class LookingFor extends Component {
  constructor() {
    super();
    this.state = {
      optionList:['Goal Setting','Career Mapping', 'Resume Review', 'Portfolio Creation', 'Interview Tips', 'Project Advice', 'Networking Advice'],
      isLoading: false,
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
      <SafeAreaView style={styles.container}>
          {/* first component */}
          <View style={styles.component1}>
          <Text style={styles.headerText}>I am looking for</Text>
          <Text style={styles.subText}>Pick up to 3 options.</Text>
          </View>

          {/*  second component */}
          <View style={styles.options}>
          {this.state.optionList.map(r => <TouchableOpacity style={styles.selectButton} title={r} value={r}><Text style={{textAlign: 'center', color:'#30467B'}}>{r}</Text></TouchableOpacity>)} 
          </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        alignContent: 'center',
        padding: 10,
        margin: 20
    },
    component1:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '50%'
    },
    headerText:{
        color: '#30467B',
        fontSize: 36,
        fontWeight: '600'
    },
    subText:{
        color: '#8390B0',
        fontWeight: '500',
        fontSize: 12
    },
    options:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'space-between',
        marginTop: 50 
    },
    selectButton:{
        width: 163,
        borderWidth: 1.3,
        borderRadius: 50,
        borderStyle: 'solid',
        borderColor: '#7F5AF0',
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center',
        margin: 5,
    }
});
export default LookingFor;
