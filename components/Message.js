// screens/AddUserScreen.js
import React, {Component} from 'react';
import {IconButton, Colors} from 'react-native-paper';
import {db} from '../database/firebaseDb';
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
} from 'react-native';
class Message extends Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {
          messageName: 'bree',
          messageDesc: 'hey whats up',
        },
        {
          messageName: 'bree',
          messageDesc: 'hey whats up',
        },
        {
          messageName: 'bree',
          messageDesc: 'hey whats up',
        },
        {
          messageName: 'bree',
          messageDesc: 'hey whats up',
        },
        {
          messageName: 'bree',
          messageDesc: 'hey whats up',
        },
        {
          messageName: 'bree',
          messageDesc: 'hey whats up',
        },
      ],
    };
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
      <SafeAreaView>
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
              {this.state.messages.map(e => (
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
              ))}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
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
    height: '100%',
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

});
export default Message;
