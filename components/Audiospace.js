// screens/AddUserScreen.js
import React, {Component, useState, useEffect} from 'react';
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
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import {Auth, DataStore} from 'aws-amplify';
import {Users, Match, Messages} from '../src/models';
import {useNavigation} from '@react-navigation/native'
const Message = props => {
  const navigation = useNavigation()
  // constructor() {
  //   super();
  //   this.state = {

  //on screen load, load all matches and messages if any
  // useEffect(() => {

  // }, [])
  const [matches, setMatches] = useState([]);
  const [messages, setMessages] = useState([]);
  //   }
  return (
    <SafeAreaView styles={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={styles.upperNav}>
          {/* profile pic */}
          
          <View style={styles.profilePic}>
            <ImageBackground
              style={{width: '100%', height: '100%'}}
              source={require('../assets/profile.png')}
            />
          </View>
          {/* back to profile button */}

          {/* brij  */}
          <Text style={styles.brij}>brij</Text>
          {/* notifs setting */}
          <View style={styles.bell}>
            <ImageBackground
              style={{width: '100%', height: '100%'}}
              source={require('../assets/bell.png')}
            />
          </View>
        </View>
        
        {/* horizontal scroll for chat heads */}
        <Text style={styles.matches}>My Matches</Text>

        <View style={styles.chatHeads}>
          <ScrollView horizontal={true}>
            <TouchableOpacity style={styles.chatHead}>
              <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('../assets/profile.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatHead}>
              <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('../assets/profile.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatHead}>
              <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('../assets/profile.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatHead}>
              <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('../assets/profile.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatHead}>
              <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('../assets/profile.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatHead}>
              <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('../assets/profile.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatHead}>
              <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('../assets/profile.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatHead}>
              <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('../assets/profile.png')}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View>
          <Text style={styles.messages}>My Messages</Text>
          <ScrollView style={styles.messagecontainer}>
            {messages.length ? (
              messages.map(e => (
                <TouchableOpacity>
                  <View style={styles.messageBox}>
                    {/* image */}
                    <TouchableOpacity
                      style={{
                        height: 80,
                        width: 80,
                        borderRadius: 50,
                        overflow: 'hidden',
                      }}>
                      <ImageBackground
                        style={{width: '100%', height: '100%'}}
                        source={require('../assets/profile.png')}
                      />
                    </TouchableOpacity>
                    {/* description */}
                    <View style={styles.description}>
                      <Text style={styles.messageName}>{e.messageName}</Text>
                      <Text style={styles.messageDesc}>{e.messageDesc}</Text>
                    </View>
                    {/* notifs */}
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 2,
                  borderColor: '#D9CEFB',
                  padding: 10,
                  marginTop: '25%',
                  borderRadius: 20,
                  width: '100%',
                  height: 200,
                }}>
                <Text
                  style={{color: '#30467B', fontSize: 14, fontWeight: '600'}}>
                  Start a new message!
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
        
      </View>
      <View style={styles.footer}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Forum')}
        style={styles.forumlogo}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/forum-icon-grey.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.talkspacelogo}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/talkspace-icon-purple.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('Explore')}
         style={[styles.explorelogo]}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/brij-logo-grey.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('Calendar')}
         style={styles.calendarlogo}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/calendar-icon-grey.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('Message')}
          style={styles.messagelogo}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/chat-icon-grey.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
  // }
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  chatHeads: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 100,
    alignItems: 'center',
    overflow: 'hidden',
    borderBottomColor: '#DADADA',
    borderBottomWidth: 1,
  },
  chatHead: {
    width: 82,
    height: 82,
    borderRadius: 50,
    margin: 5,
    overflow: 'hidden',
  },
  upperNav: {
    position: 'relative',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 80,
    justifyContent: 'space-between',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 50,
    overflow: 'hidden',
  },
  backButton: {
    width: 26,
    height: 28,
    marginLeft: 20,
    marginRight: 15,
  },
  brij: {
    textAlign: 'center',
    fontSize: 36,
    color: '#7F5AF0',
    fontWeight: '600',
  },
  bell: {
    width: 35,
    height: 35,
  },
  matches: {
    color: '#30467B',
    fontSize: 18,
    fontWeight: '600',
    margin: 5,
    marginBottom: 15,
  },
  messages: {
    color: '#30467B',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 20,
  },
  messagecontainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 470,
    marginTop: 20,
  },
  messageBox: {
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
   
  },
  description: {
    margin: 10,
    width: '100%',
  },
  messageName: {
    color: '#30467B',
    fontSize: 16,
    fontWeight: '600',
  },
  messageDesc: {
    color: 'grey',
    fontSize: 14,
    marginTop: 10,
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 28,
    paddingLeft: 25,
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    position: 'absolute',
    bottom: 15,
  },
  forumlogo: {
    width: 25,
    height: 25,
  },
  talkspacelogo: {
    width: 25,
    height: 25,
  },
  explorelogo: {
    width: 45,
    height: 25,
  },
  calendarlogo: {
    width: 25,
    height: 25,
  },
  messagelogo: {
    width: 25,
    height: 25,
  },
});
export default Message;
