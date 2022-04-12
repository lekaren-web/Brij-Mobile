// screens/AddUserScreen.js
import React, {Component, useEffect, useState} from 'react';
import {IconButton, Colors} from 'react-native-paper';
import {
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  Modal,
  SafeAreaView
} from 'react-native';
import {User} from '../src/models';
import {Auth, DataStore } from 'aws-amplify'

const Notifs = (props) => {
  const [modalVisible, setmodalVisible] = useState('');
  const [enableNotifs, setNotifs] = useState('');
  
  const enableNotifsfunc = (val) => {
      setmodalVisible(false)
      props.navigation.navigate('IamA', {enableNotifs: val});
  };

  // const setModalVisible = (visible) => {
  // modalVisible = visible;
  // };
// const isValid = () => {
//   return enableNotifs
// }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.TopicTitle}>Stay in the loop.</Text>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => enableNotifsfunc(true)}>
        <Text style={{color: '#30467B', textAlign: 'center', fontSize: 20}}>
          Enable Notifications
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3} onPress={() => {setmodalVisible(true)}}>
        <Text
          style={{color: 'black', textAlign: 'center', fontSize: 20}}
          >
          Disable Notifications
        </Text>
      </TouchableOpacity>
      <View style={{position: 'absolute', bottom: 26, right: -10}}>
        {/* <IconButton
          style={{backgroundColor: 'lightgray', width: 80, height: 45}}
          icon="arrow-right"
          color={Colors.white}
          size={40}
          onPress={() => this.props.navigation.navigate('IamA')}
        /> */}
        <Text onPress={() => enableNotifsfunc(enableNotifs)}>{'->'}</Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setmodalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '600',
                color: '#30467B',
                marginBottom: 10,
              }}>
              Are you sure?
            </Text>
            <Text style={{textAlign: 'center', color: '#8390B0'}}>
              By disabling notifications you’ll miss new connections and
              opportunites.
            </Text>
            {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
            <TouchableOpacity style={styles.button4}>
              <Text
                style={{color: '#30467B', textAlign: 'center', fontSize: 18}}
                onPress={() => enableNotifsfunc(true)}>
                Enable Notifications
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={
                  (() => {setmodalVisible(false), enableNotifsfunc(false)})
                }>
              <Text
                style={{color: '#8390B0', marginTop: 10}}
                >
                Not now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
  // }
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    color: 'white',
    backgroundColor: 'black',
  },
  button2: {
    textAlign: 'center',
    backgroundColor: '#D9CEFB',
    borderRadius: 50,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 15,
    marginTop: '20%',
    color: 'white',
  },
  button3: {
    textAlign: 'center',
    borderColor: '#7F5AF0',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 50,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 15,
    marginTop: 20,
    color: 'black',
  },
  button4: {
    textAlign: 'center',
    borderColor: '#7F5AF0',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 50,
    width: 250,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 15,
    marginTop: 20,
    color: 'black',
  },
  inputGroup: {
    backgroundColor: '#30467B',
  },
  TopicTitle: {
    width: '100%',
    fontSize: 40,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#30467B',
  },
  TopicTitle2: {
    width: '100%',
    fontSize: 40,
    marginBottom: 40,
    fontWeight: 'bold',
    color: '#30467B',
  },
  container: {
    flex: 1,
    display:'flex',
    padding: 35,
    height: '100%',
    alignSelf: "center",
    justifyContent: 'center'
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

  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default Notifs;
