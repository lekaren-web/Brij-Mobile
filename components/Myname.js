// screens/AddUserScreen.js
import React, { Component, useState } from "react";
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
  SafeAreaView
} from "react-native";
;

const Myname = (props) => {

  const [name, setName] = useState('')

//  componentDidMount(){
//    console.log('GOT!!!', this.props.route.params)
//  }

    return (
      <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.heading}>My Name is</Text>
            <TextInput
            style={styles.input}
            placeholder="Please insert your name"
            value={name}
            onChangeText={(val) => setName(val)}
            >
            </TextInput>
            <View style={{position: 'absolute', bottom:'7%', right: 0}}>
            <IconButton
              style={{backgroundColor: 'lightgray', width: 80, height: 45}}
              icon="arrow-right"
              color={Colors.white}
              size={40}
              onPress={() => {
                //   uncomment the alert when data is connected
                // alert('Please insert your name before continuing');
                // props.navigation.navigate("Mybirthday" )
                props.route.params.name = name
                props.navigation.navigate("Mybirthday", props.route.params )
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
// }
const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        margin: 20,
        justifyContent: 'center',
        height: '100%'
    },
    heading: {
        fontSize: 36,
        color:'#30467B',
        fontWeight: '600',
        lineHeight: 54,
        position: "absolute",
        top: '20%',
        marginBottom: 0
    },
    input:{
        marginTop: '-40%',
        borderBottomWidth: 1,
        borderBottomColor: '#30467B',
    }
});
export default Myname;
