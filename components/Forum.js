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
const Message = props => {
  // constructor() {
  //   super();
  //   this.state = {

  //on screen load, load all matches and messages if any
  // useEffect(() => {

  // }, [])
  const [matches, setMatches] = useState([]);
  const [messages, setMessages] = useState([]);
  //   }
  const [home, setHome] = useState(true);
  const [mygroup, setmygroup] = useState(false);
  const [discover, setdiscover] = useState(false);

  const [backgroundColor, setbackgroundColor] = useState('#7F5AF0');

  return (
    <SafeAreaView styles={{flex: 1, backgroundColor:'white'}}>
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

        <View
          style={{
            marginTop: -10,
            display: 'flex',
            flexDirection: 'row',
            padding: 1,
          }}>
          {/* <ScrollView style={{height: 40}} horizontal={true}> */}
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              setdiscover(false);
              setmygroup(false);
            }}
            style={{
              backgroundColor: home ? backgroundColor : '#D9CEFB',
              marginRight: 20,
              borderRadius: 50,
            }}>
            <Text
              onPress={() => {}}
              style={{
                fontSize: 14,
                margin: 8,
                width: 95,
                textAlign: 'center',
                paddingLeft: 5,
                color: home ? 'white' : '#30467B',
                fontWeight: '500',
                paddingRight: 10,
                padding: 5,
              }}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setdiscover(false);
              setmygroup(true);
            }}
            style={{
              backgroundColor: mygroup ? backgroundColor : '#D9CEFB',
              marginRight: 20,
              borderRadius: 50,
            }}>
            <Text
              style={{
                fontSize: 14,
                margin: 8,
                width: 95,
                textAlign: 'center',
                paddingLeft: 5,
                color: mygroup ? 'white' : '#30467B',
                fontWeight: '500',
                paddingRight: 10,
                padding: 5,
              }}>
              My Groups
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setdiscover(true);
              setmygroup(false);
            }}
            style={{
              backgroundColor: discover ? backgroundColor : '#D9CEFB',
              marginRight: 20,
              borderRadius: 50,
            }}>
            <Text
              style={{
                fontSize: 14,
                margin: 8,
                width: 95,
                textAlign: 'center',
                paddingLeft: 5,
                padding: 5,
                color: discover ? 'white' : '#30467B',
                fontWeight: '500',
                paddingRight: 10,
              }}>
              Discovery
            </Text>
          </TouchableOpacity>
          {/* </ScrollView> */}
        </View>

        <View>
          {/* <Text style={styles.messages}>My Messages</Text> */}
          <ScrollView style={styles.postcontainer}>
            {home && (
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#D9CEFB',
                  padding: 10,
                  marginTop: '25%',
                  borderRadius: 20,
                  width: '100%',
                  height: 200,
                }}>
                <Text
                  style={{color: '#30467B', fontSize: 18, fontWeight: '600'}}>
                  Nothing yet. Match with more people and make some more
                  connections!
                </Text>
              </View>
            )}

            {/* groups */}
            {mygroup && (
              <>
                <View
                  style={{
                    display: 'flex',
                    borderColor: '#D9CEFB',
                    padding: 20,
                    borderRadius: 20,
                    width: '100%',
                    flexDirection: 'column',
                  }}>
                  <Text
                    style={{color: '#30467B', fontSize: 18, fontWeight: '600'}}>
                    Moderating
                  </Text>

                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                    }}>
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        overflow: 'hidden',
                      }}>
                      <ImageBackground
                        style={{width: '100%', height: '100%'}}
                        source={require('../assets/profile.png')}
                      />
                    </View>

                    <Text style={{margin: 10}}>Young Musicians</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                    }}>
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        overflow: 'hidden',
                      }}>
                      <ImageBackground
                        style={{width: '100%', height: '100%'}}
                        source={require('../assets/profile.png')}
                      />
                    </View>
                    <Text style={{margin: 10}}>Berklee Musicians</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                    }}>
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        overflow: 'hidden',
                      }}>
                      <ImageBackground
                        style={{width: '100%', height: '100%'}}
                        source={require('../assets/profile.png')}
                      />
                    </View>
                    <Text style={{margin: 10}}>NYC Meetups</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    display: 'flex',
                    borderColor: '#D9CEFB',
                    padding: 20,
                    borderRadius: 20,
                    width: '100%',
                    flexDirection: 'column',
                  }}>
                  <Text
                    style={{color: '#30467B', fontSize: 18, fontWeight: '600'}}>
                    My groups
                  </Text>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                    }}>
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        overflow: 'hidden',
                      }}>
                      <View style={{width: '100%', height:'100%', backgroundColor:'#D9CEFB', justifyContent:'center'}}>
                        <Text style={{textAlign:'center', fontSize: 20, color:'#7F5AF0'}}>+</Text>
                      </View>
                    </View>

                    <Text style={{margin: 10}}> Create a Group</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                    }}>
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        overflow: 'hidden',
                      }}>
                      <ImageBackground
                        style={{width: '100%', height: '100%'}}
                        source={require('../assets/profile.png')}
                      />
                    </View>
                    <Text style={{margin: 10}}>Slam Poetry</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                    }}>
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        overflow: 'hidden',
                      }}>
                      <ImageBackground
                        style={{width: '100%', height: '100%'}}
                        source={require('../assets/profile.png')}
                      />
                    </View>
                    <Text style={{margin: 10}}>Local Shows - NYC</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                    }}>
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        overflow: 'hidden',
                      }}>
                      <ImageBackground
                        style={{width: '100%', height: '100%'}}
                        source={require('../assets/profile.png')}
                      />
                    </View>
                    <Text style={{margin: 10}}>Unpopular Opinions</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
            {discover && (
              <View style={{display: 'flex', flexDirection: 'column'}}>
                {/* single post */}
                
                { [1,3,4,5,6,7].map((e) => (<View
                  style={{
                    padding: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    borderWidth: 0.2,
                    height: 160,
                    borderRadius: 10,
                    marginBottom: 20
                  }}>
                  {/*  first section */}
                  <View
                    style={{display: 'flex', flexDirection: 'row', height: 50}}>
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        overflow: 'hidden',
                        marginRight: 10,
                        alignSelf: 'center',
                      }}>
                      <ImageBackground
                        style={{width: '100%', height: '100%'}}
                        source={require('../assets/profile.png')}
                      />
                    </View>

                    {/*  name and time */}
                    <Text
                      style={{
                        alignSelf: 'center',
                        marginRight: 20,
                        color: '#30467B99',
                      }}>
                      Gina Lee • 6h
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#E4DFFA',
                        width: 100,
                        height: 30,
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 50,
                      }}>
                      <Text
                        style={{
                          color: '#30467B99',
                          fontWeight: '500',
                          fontSize: 12,
                          textAlign: 'center',
                          alignSelf: 'center',
                        }}>
                        Music News
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={{color: '#30467B', fontWeight: '400', fontSize: 16, alignSelf:'center', marginTop: 5, marginBottom:10}}>
                    Joni Mitchell Says She’s Removing Her Music From Spotify in
                    Solidarity With Neil Young.
                  </Text>
                  {/* icons */}
                  <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-evenly'}}>
                      <View style={{display:'flex', flexDirection:'row'}}>
                      <TouchableOpacity style={{width: 20, height: 20, alignSelf:'center', marginTop: 10}}>
                      <ImageBackground
                        style={{width: '100%', height: '100%'}}
                        source={require('../assets/likePost.png')}
                      />
                      </TouchableOpacity>
                      <Text style={{alignSelf:'center', marginTop: 10, marginLeft: 10}}>Like</Text>
                      </View>

                      <View style={{display:'flex', flexDirection:'row'}}>
                      <TouchableOpacity style={{width: 20, height: 20, alignSelf:'center', marginTop: 10}}>
                      <ImageBackground
                        style={{width: '100%', height: '100%'}}
                        source={require('../assets/comment.png')}
                      />
                      </TouchableOpacity>
                      <Text style={{alignSelf:'center', marginTop: 10, marginLeft: 10}}>20k</Text>
                      </View>
                      <View style={{display:'flex', flexDirection:'row'}}>
                      <TouchableOpacity style={{width: 15, height: 19, alignSelf:'center', marginTop: 10}}>
                      <ImageBackground
                        style={{width: '100%', height: '100%'}}
                        source={require('../assets/bookmark.png')}
                      />
                      </TouchableOpacity>
                      <Text style={{alignSelf:'center', marginTop: 10, marginLeft: 10}}>Save</Text>
                      </View>
                      <View style={{display:'flex', flexDirection:'row'}}>
                      <TouchableOpacity style={{width: 20, height: 20, alignSelf:'center', marginTop: 10}}>
                      <ImageBackground
                        style={{width: '100%', height: '100%'}}
                        source={require('../assets/share.png')}
                      />
                      </TouchableOpacity>
                      <Text style={{alignSelf:'center', marginTop: 10, marginLeft: 10}}>Share</Text>
                      </View>
                  </View>
                </View>
                ))
            }
              </View>
            )}
          </ScrollView>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.forumlogo}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/forum-icon-purple.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Audiospace')}
          style={styles.talkspacelogo}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/talkspace-icon-grey.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Explore')}
          style={[styles.explorelogo]}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/brij-logo-grey.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('Calendar')}
          style={styles.calendarlogo}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/calendar-icon-grey.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('Message')}
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
    backgroundColor:'white'
  },
  forumlabels: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 100,
    alignItems: 'center',
    overflow: 'hidden',
    borderBottomColor: '#DADADA',
    borderBottomWidth: 1,
  },
  upperNav: {
    position: 'relative',
    top: -20,
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
  postcontainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '82%',
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
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    position: 'absolute',
    bottom: 0,
  },
  forumlogo: {
    width: 30,
    height: 30,
  },
  talkspacelogo: {
    width: 30,
    height: 30,
  },
  explorelogo: {
    width: 50,
    height: 30,
  },
  calendarlogo: {
    width: 30,
    height: 30,
  },
  messagelogo: {
    width: 30,
    height: 30,
  },
});
export default Message;
