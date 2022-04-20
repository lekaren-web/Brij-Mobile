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
import {useNavigation} from '@react-navigation/native';
const Calendar = props => {
  // constructor() {
  const navigation = useNavigation();
  //   super();
  //   this.state = {

  //on screen load, load all matches and messages if any
  // useEffect(() => {

  // }, [])
  const [matches, setMatches] = useState([]);
  const [messages, setMessages] = useState([]);
  //   }
  const [Upcoming, setUpcoming] = useState(true);
  const [Events, setEvents] = useState(false);
  const [Invites, setInvites] = useState(false);
  const [Meetings, setMeetings] = useState(false);

  const [backgroundColor, setbackgroundColor] = useState('#7F5AF0');

  return (
    <SafeAreaView styles={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.upperNav}>
          {/* profile pic */}

          <View style={styles.profilePic}>
            <ImageBackground
              style={{width: '100%', height: '100%'}}
              source={require('../assets/Naomi.jpg')}
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
          <ScrollView style={{height: 40, width: 10}} horizontal={true}>
            <TouchableOpacity
              onPress={() => {
                setUpcoming(true);
                setMeetings(false);
                setEvents(false);
                setInvites(false);
              }}
              style={{
                backgroundColor: Upcoming ? backgroundColor : '#D9CEFB',
                marginRight: 10,
                borderRadius: 50,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  margin: 5,
                  width: 78,
                  textAlign: 'center',
                  paddingLeft: 5,
                  color: Upcoming ? 'white' : '#30467B',
                  fontWeight: '500',

                  padding: 5,
                }}>
                Upcoming
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setUpcoming(false);
                setMeetings(false);
                setEvents(true);
                setInvites(false);
              }}
              style={{
                backgroundColor: Events ? backgroundColor : '#D9CEFB',
                marginRight: 10,
                borderRadius: 50,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  margin: 5,
                  width: 73,
                  textAlign: 'center',
                  paddingLeft: 5,
                  color: Events ? 'white' : '#30467B',
                  fontWeight: '500',

                  padding: 5,
                }}>
                Events
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setUpcoming(false);
                setMeetings(true);
                setEvents(false);
                setInvites(false);
              }}
              style={{
                backgroundColor: Meetings ? backgroundColor : '#D9CEFB',
                marginRight: 10,
                borderRadius: 50,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  margin: 5,
                  width: 73,
                  textAlign: 'center',
                  paddingLeft: 5,
                  padding: 5,
                  color: Meetings ? 'white' : '#30467B',
                  fontWeight: '500',
                }}>
                Meetings
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setUpcoming(false);
                setMeetings(false);
                setEvents(false);
                setInvites(true);
              }}
              style={{
                backgroundColor: Invites ? backgroundColor : '#D9CEFB',
                marginRight: 10,
                borderRadius: 50,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  margin: 5,
                  width: 73,
                  textAlign: 'center',
                  paddingLeft: 5,
                  color: Invites ? 'white' : '#30467B',
                  fontWeight: '500',

                  padding: 5,
                }}>
                Invites
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View>
          {/* <Text style={styles.messages}>My Messages</Text> */}
          <ScrollView style={styles.postcontainer}>
            {Invites && (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                {/* component one */}
                <View style={{padding: 5}}>
                  <Text
                    style={{
                      color: '#30467B',
                      fontSize: 18,
                      fontWeight: '600',
                      marginBottom: 20,
                    }}>
                    Meetings
                  </Text>
                  <View
                    style={{
                      width: '100%',
                      borderRadius: 10,
                      borderWidth: 3,
                      borderColor: '#F1EFFD',
                      height: 170,
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                    {/* first row  */}
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'center',
                      }}>
                      <View
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 50,
                          overflow: 'hidden',
                          margin: 10,
                        }}>
                        <ImageBackground
                          style={{width: '100%', height: '100%'}}
                          source={require('../assets/profile.png')}
                        />
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignSelf: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#30467B',
                            fontWeight: '500',
                            fontSize: 12,
                          }}>
                          Feb, 16th @ 13:00
                        </Text>
                        <Text style={{color: '#30467B', fontSize: 12}}>
                          Bree Troche
                        </Text>
                        <Text style={{color: '#8390B0', fontSize: 12}}>
                          virtual meet-up about networking
                        </Text>
                      </View>
                      {/* make this bell black */}
                      <View style={{width: 30, height: 30, marginTop: 10}}>
                        <ImageBackground
                          style={{width: '100%', height: '100%'}}
                          source={require('../assets/bell.png')}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}>
                      <TouchableOpacity
                        style={{
                          borderWidth: 2,
                          padding: 8,
                          width: 90,
                          marginRight: 10,
                          borderRadius: 50,
                          borderColor: '#7F5AF0',
                          height: 40,
                          marginLeft: 70,
                          marginTop: -10,
                        }}>
                        <Text style={{textAlign: 'center'}}>Accept</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          borderWidth: 2,
                          padding: 8,
                          width: 90,
                          borderRadius: 50,
                          borderColor: '#7F5AF0',
                          height: 40,
                          marginTop: -10,
                        }}>
                        <Text style={{textAlign: 'center'}}>Decline</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                {/* Events */}
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 40,
                    padding: 10,
                  }}>
                  <Text
                    style={{fontSize: 18, color: '#30467B', fontWeight: '600'}}>
                    Events
                  </Text>
                </View>

                <View
                  style={{
                    width: '100%',
                    borderRadius: 10,
                    borderWidth: 3,
                    borderColor: '#F1EFFD',
                    height: 220,
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  {/* first row  */}
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignContent: 'center',
                    }}>
                    <View
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        overflow: 'hidden',
                        margin: 10,
                      }}>
                      <ImageBackground
                        style={{width: '100%', height: '100%'}}
                        source={require('../assets/unsplash_f6HbVnGtNnY.png')}
                      />
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignSelf: 'center',
                        width: 200,
                      }}>
                      <Text
                        style={{
                          color: '#30467B',
                          fontWeight: '500',
                          fontSize: 14,
                        }}>
                        Networking 101
                      </Text>
                      <Text style={{color: '#30467B', fontSize: 12}}>
                        Feb, 16th @ 15:00
                      </Text>
                      <Text style={{color: '#8390B0', fontSize: 12}}>
                        Hosted by Naomi Lilly
                      </Text>
                      <Text style={{color: '#8390B0', fontSize: 12}}>
                        Tips and tricks to grow your music circle.
                      </Text>
                    </View>
                    {/* make this bell black */}
                    <View style={{width: 30, height: 30, marginTop: 10}}>
                      <ImageBackground
                        style={{width: '100%', height: '100%'}}
                        source={require('../assets/bell.png')}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                      style={{
                        borderWidth: 2,
                        padding: 8,
                        width: 90,
                        marginRight: 10,
                        borderRadius: 50,
                        borderColor: '#7F5AF0',
                        height: 40,
                        marginLeft: 70,
                        marginTop: 10,
                      }}>
                      <Text style={{textAlign: 'center'}}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        borderWidth: 2,
                        padding: 8,
                        width: 90,
                        borderRadius: 50,
                        borderColor: '#7F5AF0',
                        height: 40,
                        marginTop: 10,
                      }}>
                      <Text style={{textAlign: 'center'}}>Decline</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}

            {/* groups */}
            {Events && (
              <>
                <View
                  style={{
                    display: 'flex',
                    // borderColor: '#D9CEFB',
                    padding: 20,
                    borderRadius: 20,
                    width: '100%',
                    flexDirection: 'column',
                  }}>
                  <Text
                    style={{color: '#30467B', fontSize: 18, fontWeight: '600'}}>
                    Today
                  </Text>

                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                      height: 100,
                      borderWidth: 3,
                      borderColor: '#F1EFFD',
                      padding: 10,
                      borderRadius: 10,
                    }}>
                    <View
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 50,
                        overflow: 'hidden',
                      }}>
                      <ImageBackground
                        style={{width: '100%', height: '100%'}}
                        source={require('../assets/profile.png')}
                      />
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: 20,
                      }}>
                      <Text
                        style={{
                          fontWeight: '500',
                          color: '#30467B',
                          fontSize: 14,
                        }}>
                        Feb, 16th @ 13:00
                      </Text>
                      <Text style={{fontSize: 12, color: '#30467B'}}>
                        Janis Brown
                      </Text>
                      <Text style={{fontSize: 12, color: '#8390B0'}}>
                        Feb, 16th @ 13:00
                      </Text>
                      
                    </View>
                    <View style={{width: 20, height: 20, marginLeft: 60, marginTop: -40}}>
                        <ImageBackground
                          style={{width: '100%', height: '100%'}}
                          source={require('../assets/bell.png')}
                        />
                      </View>
                  </TouchableOpacity>
                </View>
              </>
            )}
            {Meetings && (
              <View style={{display: 'flex', flexDirection: 'column'}}>
                {/* single post */}

                <View
                  style={{
                    padding: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    borderWidth: 3,
                    height: 160,
                    borderRadius: 10,
                    marginBottom: 20,
                    borderColor: '#F1EFFD',
                  }}>
                  {/*  first section */}
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      height: 50,
                    }}>
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
                        marginRight: 10,
                        color: '#30467B99',
                      }}>
                      Jay P. • 6h
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
                          fontSize: 14,
                          textAlign: 'center',
                          alignSelf: 'center',
                        }}>
                        Music News
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={{
                      color: '#30467B',
                      fontWeight: '400',
                      fontSize: 16,
                      alignSelf: 'center',
                      marginTop: 5,
                      marginBottom: 10,
                    }}>
                    Joni Mitchell Says She’s Removing Her Music From Spotify in
                    Solidarity With Neil Young.
                  </Text>
                  {/* icons */}
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={{
                          width: 20,
                          height: 20,
                          alignSelf: 'center',
                          marginTop: 10,
                        }}>
                        <ImageBackground
                          style={{width: '100%', height: '100%'}}
                          source={require('../assets/likePost.png')}
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          alignSelf: 'center',
                          marginTop: 10,
                          marginLeft: 10,
                        }}>
                        Like
                      </Text>
                    </View>

                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={{
                          width: 20,
                          height: 20,
                          alignSelf: 'center',
                          marginTop: 10,
                        }}>
                        <ImageBackground
                          style={{width: '100%', height: '100%'}}
                          source={require('../assets/comment.png')}
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          alignSelf: 'center',
                          marginTop: 10,
                          marginLeft: 10,
                        }}>
                        20k
                      </Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={{
                          width: 15,
                          height: 19,
                          alignSelf: 'center',
                          marginTop: 10,
                        }}>
                        <ImageBackground
                          style={{width: '100%', height: '100%'}}
                          source={require('../assets/bookmark.png')}
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          alignSelf: 'center',
                          marginTop: 10,
                          marginLeft: 10,
                        }}>
                        Save
                      </Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={{
                          width: 20,
                          height: 20,
                          alignSelf: 'center',
                          marginTop: 10,
                        }}>
                        <ImageBackground
                          style={{width: '100%', height: '100%'}}
                          source={require('../assets/share.png')}
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          alignSelf: 'center',
                          marginTop: 10,
                          marginLeft: 10,
                        }}>
                        Share
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    padding: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    borderWidth: 3,
                    height: 160,
                    borderRadius: 10,
                    marginBottom: 20,
                    borderColor: '#F1EFFD',
                  }}>
                  {/*  first section */}
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      height: 50,
                    }}>
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
                        source={require('../assets/unsplash_UCEtRnp8qR0.png')}
                      />
                    </View>

                    {/*  name and time */}
                    <Text
                      style={{
                        alignSelf: 'center',
                        marginRight: 10,
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
                          fontSize: 14,
                          textAlign: 'center',
                          alignSelf: 'center',
                        }}>
                        Music News
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={{
                      color: '#30467B',
                      fontWeight: '400',
                      fontSize: 16,
                      alignSelf: 'center',
                      marginTop: 5,
                      marginBottom: 10,
                    }}>
                    Joni Mitchell Says She’s Removing Her Music From Spotify in
                    Solidarity With Neil Young.
                  </Text>
                  {/* icons */}
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={{
                          width: 20,
                          height: 20,
                          alignSelf: 'center',
                          marginTop: 10,
                        }}>
                        <ImageBackground
                          style={{width: '100%', height: '100%'}}
                          source={require('../assets/likePost.png')}
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          alignSelf: 'center',
                          marginTop: 10,
                          marginLeft: 10,
                        }}>
                        Like
                      </Text>
                    </View>

                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={{
                          width: 20,
                          height: 20,
                          alignSelf: 'center',
                          marginTop: 10,
                        }}>
                        <ImageBackground
                          style={{width: '100%', height: '100%'}}
                          source={require('../assets/comment.png')}
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          alignSelf: 'center',
                          marginTop: 10,
                          marginLeft: 10,
                        }}>
                        20k
                      </Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={{
                          width: 15,
                          height: 19,
                          alignSelf: 'center',
                          marginTop: 10,
                        }}>
                        <ImageBackground
                          style={{width: '100%', height: '100%'}}
                          source={require('../assets/bookmark.png')}
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          alignSelf: 'center',
                          marginTop: 10,
                          marginLeft: 10,
                        }}>
                        Save
                      </Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={{
                          width: 20,
                          height: 20,
                          alignSelf: 'center',
                          marginTop: 10,
                        }}>
                        <ImageBackground
                          style={{width: '100%', height: '100%'}}
                          source={require('../assets/share.png')}
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          alignSelf: 'center',
                          marginTop: 10,
                          marginLeft: 10,
                        }}>
                        Share
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
            {Upcoming && (
              <>
                {/* outer component */}
               
                <View style={{display: 'flex', flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: '#30467B',
                      fontSize: 18,
                      fontWeight: '700',
                      marginBottom: 20,
                    }}>
                    Today
                  </Text>
                  <TouchableOpacity>
                  {/* each upcoming event box */}
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: 220,
                      borderWidth: 3,
                      padding: 15,
                      borderRadius: 10,
                      borderColor:'#F1EFFD'
                    }}>
                    {/* first row */}
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      {/* upcoming eveny image */}
                      <View style={{width: 75, height: 75}}>
                        <ImageBackground
                          style={{width: '100%', height: '100%'}}
                          source={require('../assets/EVENT.png')}
                        />
                      </View>

                      {/* event time, details, and tag */}
                      <View
                        style={{
                          display: 'flex',
                          marginLeft: 10,
                          flexDirection: 'column',
                          width: '65%',
                        }}>
                        <Text
                          style={{
                            fontWeight: '500',
                            color: '#30467B',
                            fontSize: 12,
                          }}>
                          13:00
                        </Text>
                        <Text
                          style={{
                            color: '#30467B',
                            fontSize: 12,
                            fontWeight: '400',
                          }}>
                          Incorporating instruments into your DJ sets
                        </Text>
                        <Text
                          style={{
                            color: '#8390B0',
                            fontWeight: '400',
                            fontSize: 12,
                          }}>
                          Educational
                        </Text>
                      </View>
                      <View style={{width: 30, height: 30, marginLeft: 10}}>
                        <ImageBackground
                          style={{width: '100%', height: '100%'}}
                          source={require('../assets/bell.png')}
                        />
                      </View>
                    </View>
                    {/* second row */}
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: 20,
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          width: 35,
                          height: 35,
                          borderRadius: 50,
                          overflow: 'hidden',
                        }}>
                        <ImageBackground
                          style={{width: '100%', height: '100%'}}
                          source={require('../assets/profile.png')}
                        />
                      </View>
                      <View style={{alignItems: 'center'}}>
                        <Text style={{marginLeft: 10, color:'#30467B', fontSize:12, fontWeight:'400', marginLeft: 10}}>Host: Record Label</Text>
                      </View>


                      <View style={{alignItems: 'center', marginLeft: 30}}>
                        <Text style={{marginLeft: 10, color:'#30467B', fontSize:12, fontWeight:'400', marginRight: 10}}>Speaker: Musician</Text>
                      </View>
                      <View
                        style={{
                          width: 35,
                          height: 35,
                          borderRadius: 50,
                          overflow: 'hidden',
                        }}>
                        <ImageBackground
                          style={{width: '100%', height: '100%'}}
                          source={require('../assets/user.png')}
                        />
                      </View>
                  
                    </View>
                    <View style={{marginTop: 30}}><Text style={{color:'#30467B', fontSize: 12, fontWeight:'400'}}>Brief discription Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed justo et felis pulvinar imperdiet.</Text></View>
                  </View>
                  </TouchableOpacity>
                </View>
                
              </>
            )}
          </ScrollView>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.forumlogo}
          onPress={() => navigation.navigate('Forum')}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/forum-icon-grey.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Audiospace')}
          style={styles.talkspacelogo}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/talkspace-icon-grey.png')}
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

        <TouchableOpacity style={styles.calendarlogo}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/calendar-icon-purple.png')}
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
    backgroundColor: 'white',
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
    width: 30,
    height: 30,
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
export default Calendar;
