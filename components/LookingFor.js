// screens/AddUserScreen.js
import React, {Component, useState} from 'react';
import {IconButton, Colors} from 'react-native-paper';
import {
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
// import { Icon } from 'react-native-elements'
class LookingFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
      optionList: [
        'Goal Setting',
        'Career Mapping',
        'Resume Review',
        'Portfolio Creation',
        'Interview Tips',
        'Project Advice',
        'Networking Advice',
      ],
    };
  }
  //   constructor() {
  //     super();

  //   }

  render() {
    //     if (this.state.isLoading) {
    //       return (
    //         <View style={styles.preloader}>
    //           <ActivityIndicator size="large" color="#9E9E9E" />
    //         </View>
    //       );
    return (
      <SafeAreaView style={styles.container}>
        <View style={{height: '100%'}}>
          {/* first component */}
          <View style={styles.component1}>
            <Text style={styles.headerText}>I am looking for</Text>
            <Text style={styles.subText}>Pick up to 3 options.</Text>
          </View>

          {/*  second component */}
          <View style={styles.options}>
            {this.state.optionList.map((r, index) => (
              <TouchableOpacity
                key={index}
                id={r}
                onPress={() => {
                  console.log(r);
                  this.setState({pressed: true});
                  //   document.getElementById(index).style.backgroundColor="black"
                }}
                key={r}
                style={[
                  styles.selectButton,
                  this.state.pressed ? styles[`selectButton${index}`] : {},
                ]}
                key={r}
                title={r}
                value={r}>
                <Text
                  style={[
                    styles.selectButtonText,
                    this.state.pressed ? {color: 'white'} : {},
                  ]}>
                  {r}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{position: 'absolute', bottom: 0, right: 0}}>
            <IconButton
              style={{backgroundColor: 'lightgray', width: 80, height: 45}}
              icon="arrow-right"
              color={Colors.white}
              size={40}
              onPress={() => {
                //   uncomment the alert when data is connected
                // alert('Please select at least 3');
                this.props.navigation.navigate("Myname")
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
  //   }
}
const styles = StyleSheet.create({
  selectButtonText: {textAlign: 'center', color: '#30467B'},
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    alignContent: 'center',
    padding: 10,
    margin: 20,
  },
  component1: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50%',
  },
  headerText: {
    color: '#30467B',
    fontSize: 36,
    fontWeight: '600',
  },
  subText: {
    color: '#8390B0',
    fontWeight: '500',
    fontSize: 12,
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  selectButton: {
    width: 163,
    borderWidth: 1.3,
    borderRadius: 50,
    borderStyle: 'solid',
    borderColor: '#7F5AF0',
    padding: 13,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    margin: 5,
  },
  selectButton0: {
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
    backgroundColor: '#7F5AF0',
    color: 'white',
  },
  selectButton1: {
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
    backgroundColor: '#7F5AF0',
    color: 'white',
  },
  selectButton2: {
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
    backgroundColor: '#7F5AF0',
    color: 'white',
  },
  selectButton3: {
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
    backgroundColor: '#7F5AF0',
    color: 'white',
  },
  selectButton4: {
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
    backgroundColor: '#7F5AF0',
    color: 'white',
  },
  selectButton5: {
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
    backgroundColor: '#7F5AF0',
    color: 'white',
  },
  selectButton6: {
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
    backgroundColor: '#7F5AF0',
    color: 'white',
  },
  btnPress: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 30,
    width: 100,
  },
});
export default LookingFor;
