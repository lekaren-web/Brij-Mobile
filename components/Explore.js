// screens/AddUserScreen.js
import React, {Component, useState, useEffect} from 'react';
import {IconButton, Colors} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
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
  Image,
  ImageBackground,
  Modal,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  useDerivedValue,
  interpolate,
  runOnJS,
} from 'react-native-reanimated';
import {useWindowDimensions} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';
import {Auth, DataStore} from 'aws-amplify';
import {User, Match} from '../src/models';
import {SQLiteAdapter} from '@aws-amplify/datastore-storage-adapter';
import {useNavigation} from '@react-navigation/native';
// DataStore.configure({
//   storageAdapter: SQLiteAdapter,
// });
const Explore = props => {
  const navigation = useNavigation();
  // users from data base
  const [users, setUsers] = useState([]);
  // current index on user stack
  const [currIndex, setCurrIndex] = useState(0);
  // netx index
  const [nextIndex, setnextIndex] = useState(currIndex + 1);
  // current profile we are looking at
  const currentProfile = users[currIndex];
  // next profile
  const nextProfile = users[nextIndex];
  const {width: screenWidth} = useWindowDimensions();
  const translateX = useSharedValue(0);
  const Rotation = 60;
  const hiddenTranslateX = 2 * screenWidth;
  const [req, setReq] = useState(false);
  const [tutorial, setTutorial] = useState(true);
  const [tutorial2, setTutorial2] = useState(false);
  const [tutorial3, setTutorial3] = useState(false);
  const [tutorial4, setTutorial4] = useState(false);
  const [tutorial5, setTutorial5] = useState(false);
  const [tutorial6, setTutorial6] = useState(false);
  const [tutorial7, setTutorial7] = useState(false);
  const [activeTutorial, setActiveTutorial] = useState('#DADADA')
  const [activeTutorial2, setActiveTutorial2] = useState('#DADADA')
  const [activeTutorial3, setActiveTutorial3] = useState('#DADADA')
  const [activeTutorial4, setActiveTutorial4] = useState('#DADADA')
  const [activeTutorial5, setActiveTutorial5] = useState('#DADADA')
  const [activeTutorial6, setActiveTutorial6] = useState('#DADADA')
  const [activeTutorial7, setActiveTutorial7] = useState('#DADADA')
  // setting current profile as current user
  const [currentUser, setCurrentUser] = useState(null);
  // setting current ME
  const [me, setMe] = useState(null);

  const rotate = useDerivedValue(
    () =>
      interpolate(translateX.value, [0, -hiddenTranslateX], [0, Rotation]) +
      'deg',
)
  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      },
    ],
  }));

  const nextCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          translateX.value,
          [-hiddenTranslateX, 0, hiddenTranslateX],
          [1, 0.8, 1],
        ),
      },
    ],
    opacity: interpolate(
      translateX.value,
      [-hiddenTranslateX, 0, hiddenTranslateX],
      [1, 0.8, 1],
    ),
  }));

  const likeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, hiddenTranslateX / 4], [0, 1]),
  }));

  const dislikeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, -hiddenTranslateX / 4], [0, 1]),
  }));

  const SwipeVelocity = 800;
  // gesture handler hook to get feedback of user touch and start dragging
  const [velocityX, setvelocityX] = useState(0);
  const gestureHandler = useAnimatedGestureHandler({
    //   on start of user touch
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: (event, context) => {
      setvelocityX(event.velocityX);
      if (Math.abs(event.velocityX) < SwipeVelocity) {
        translateX.value = withSpring(0);
        return;
      }
      // translateX.value = withSpring( event.velocityX > 0 ? hiddenTranslateX : - hiddenTranslateX)
      translateX.value = withSpring(
        hiddenTranslateX * Math.sign(event.velocityX),
        {},
        () => runOnJS(setCurrIndex)(currIndex + 1),
      );
      const onSwipe = event.velocityX > 0 ? onSwipeRight : onSwipeLeft;
      onSwipe();
    },
  });

  //  on first load get ME

  useEffect(() => {
    translateX.value = 0;
    setnextIndex(currIndex + 1);
  }, [currIndex]);

  // get all users from database

  const getCurrUsers = async () => {
    // const currentUser = await Auth.currentAuthenticatedUser();
    const getusers = await DataStore.query(User);
    getusers.map(e => {
      if (e.sub === me?.sub) {
        const getIndex = getusers.indexOf(e);
        getusers.splice(getIndex, 1);
      }
    });
    setUsers(getusers);
  };

  useEffect(() => {
    getCurrUsers();
  }, [users]);

  // set current user  youre looking at
  useEffect(() => {
    setCurrentUser(currentProfile);
  }, [currentProfile, users]);

  //  swipe right to create a Match instance; isMatch is marked false until the user marks it true
  const onSwipeRight = async () => {
    // if (!currentUser || !me) {
    //   return;
    // }

    // await DataStore.save(
    //   new Match({
    //     User1Id: me.id,
    //     User2Id: currenUser.id,
    //     isMatch: false,
    //   }),
    // );
    // console.log('created match', me, currentProfile);

    // DUMMY DATA FOR DEMO DAY

    setReq(true);

    // }
  };
  // onSwipeLeft
  const onSwipeLeft = () => {
    if (velocityX < 0) {
      console.log('left');
    }
  };
  // useEffect(() => {
  //   onSwipeRight()
  //   onSwipeLeft()
  // }, [users]);
  // useEffect(() => {
  //   const getCurrUser = async () => {
  //     const currentUser = await Auth.currentAuthenticatedUser();
  //     const dbUsers = await DataStore.query(
  //       User,
  //       u => u.sub === currentUser.attributes.sub,
  //     );

  //     if (dbUsers.length < 0) {
  //       return;
  //     }

  //     dbUsers.map(e => {
  //       if (e.sub === currentUser.attributes.sub) {
  //         setMe(e);
  //       }
  //       return;
  //     });
  //   };
  //   getCurrUser();
  // }, []);
  // if (!me) {
  //   return (
  //     <SafeAreaView>
  //       <ActivityIndicator />
  //     </SafeAreaView>
  //   );
  // }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      {/* Top explore nav */}
      <View style={styles.upperNav}>
        {/* profile pic */}
        <View style={styles.profilePic}>
          {me ? (
            <ImageBackground
              style={{width: '100%', height: '100%'}}
              source={{url: me.profilePic}}
            />
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
            <ImageBackground
              style={{width: '100%', height: '100%'}}
              source={require('../assets/Naomi.jpg')}
            />
            </TouchableOpacity>
          )}
        </View>
        {/* back to profile button */}
        <View style={{ borderRadius: 50, width: 50, height: 50, marginLeft: 10, justifyContent:'center'}}>
        <TouchableOpacity
          style={{ width: 19,
            height: 20,
            alignSelf: 'center',
            justifyContent: 'center',
            
            }}>
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={require('../assets/back.png')}></ImageBackground>
        </TouchableOpacity>
        </View>

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

      {/* User Swipes */}
      {/* react native reanimated and gesture handle */}

      {nextProfile && (
        <SafeAreaView style={styles.nextCardContainer}>
          <Animated.View style={[styles.cardContainer, nextCardStyle]}>
            <ImageBackground
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                shadowColor: '#171717',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.2,
                shadowRadius: 3,
                display: 'flex',
                justifyContent: 'flex-end',
              }}
              source={{url: nextProfile.profilePic}}>
              <LinearGradient
                colors={['#00000000', '#353839']}
                style={{height: '100%', width: '100%'}}>
                <View style={styles.userDescription}>
                  <Text style={styles.descriptionName}>{nextProfile.name}</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{width: 20, height: 20, marginRight: 10}}>
                      <ImageBackground
                        style={{width: '100%', height: '100%'}}
                        source={require('../assets/briefcase.png')}
                      />
                    </View>
                    <Text style={styles.workplace}>
                      {nextProfile.occupation}
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </ImageBackground>
          </Animated.View>
        </SafeAreaView>
      )}

      {currentProfile ? (
        <PanGestureHandler onGestureEvent={gestureHandler}>
          {/*  */}
          <Animated.View style={[styles.cardContainer, cardStyle]}>
            <Animated.Image
              source={like}
              style={[styles.like, {width: 60}, likeStyle]}
              resizeMode="contain"
            />
            <Animated.Image
              source={dislike}
              style={[styles.dislike, {width: 50, height: 50}, dislikeStyle]}
              resizeMode="contain"
            />
            <View>
              <ImageBackground
                resizeMode="cover"
                style={{
                  width: '100%',
                  height: '100%',
                  shadowColor: '#171717',
                  shadowOffset: {width: -2, height: 4},
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
                source={{url: currentProfile.profilePic}}>
                <LinearGradient
                  colors={['#00000000', '#353839']}
                  style={{height: '100%', width: '100%'}}>
                  <View style={styles.userDescription}>
                    <Text style={styles.descriptionName}>
                      {currentProfile.name}
                    </Text>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View style={{width: 20, height: 20, marginRight: 10}}>
                        <ImageBackground
                          style={{width: '100%', height: '100%'}}
                          source={require('../assets/briefcase.png')}
                        />
                      </View>
                      <Text style={styles.workplace}>
                        {currentProfile.occupation}
                      </Text>
                    </View>
                  </View>
                </LinearGradient>
              </ImageBackground>
            </View>
          </Animated.View>
        </PanGestureHandler>
      ) : (
        <View
          style={{
            display: 'flex',
            height: '60%',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text style={{justifyContent: 'center', alignContent: 'center'}}>
            No more users
          </Text>
        </View>
      )}

      {/*  footer  */}
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Forum')}
          style={styles.forumlogo}>
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
        <TouchableOpacity style={[styles.explorelogo]}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/brij-logo-purple.png')}
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

      <Modal
        animationType="fade"
        transparent={true}
        visible={tutorial}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setReq(!req);
        }}>
        <View style={styles.tutorialcenteredView}>
          <TouchableOpacity
            style={styles.tutorialmodalView}
            onPress={() => {
              setReq(false);
            }}>
              <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignSelf: 'flex-start',
                marginBottom: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
            </View>
            <Text
              style={{
                marginLeft: -15,
                fontSize: 24,
                fontWeight: '600',
                color: '#7F5AF0',
                marginBottom: 30,
              }}>
              Let’s walk through some steps
            </Text>
            <Text
              style={{
                textAlign: 'left',
                color: '#30467B',
                fontSize: 16,
                fontWeight: '500',
                marginLeft: 5,
              }}>
              On brij you swipe left to skip or right to like users and make
              connections. If there’s a match you will be able to introduce
              yourself and start a conversation.
            </Text>
            <TouchableOpacity
              onPress={() => {
                setTutorial(false);
                setTutorial2(true);
              }}
              style={{
                height: 50,
                backgroundColor: '#7F5AF0',
                marginTop: '25%',
                width: 200,
                borderRadius: 50,
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: 18,
                }}>
                Got it
              </Text>
            </TouchableOpacity>
            {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
          </TouchableOpacity>
        </View>
      </Modal>

      {/* modal tutorial 2 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={tutorial2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setReq(!req);
        }}>
        <View style={styles.tutorialcenteredView}>
          <TouchableOpacity style={styles.tutorial2modalView} onPress={() => {}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignSelf: 'flex-start',
                marginBottom: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
            </View>
            <Text
              style={{
                marginLeft: -15,
                fontSize: 24,
                fontWeight: '600',
                color: '#7F5AF0',
                marginBottom: 30,
              }}>
              Accidentally skip a like?
            </Text>
            <Text
              style={{
                textAlign: 'left',
                color: '#30467B',
                fontSize: 16,
                fontWeight: '500',
                marginLeft: 5,
              }}>
              You can use the back button that is highlighted so you’ll never have a missed connection!
            </Text>
            <TouchableOpacity
              onPress={() => {
                setTutorial2(false);
                setTutorial3(true);
              }}
              style={{
                height: 50,
                backgroundColor: '#7F5AF0',
                marginTop: '25%',
                width: 200,
                borderRadius: 50,
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: 18,
                }}>
                Got it
              </Text>
            </TouchableOpacity>
            {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
          </TouchableOpacity>
        </View>
      </Modal>

      {/* modal tutorial 3 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={tutorial3}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setReq(!req);
        }}>
        <View style={styles.tutorialcenteredView}>
          <TouchableOpacity style={styles.tutorial3modalView} onPress={() => {}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignSelf: 'flex-start',
                marginBottom: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
            </View>
            <Text
              style={{
                marginLeft: -15,
                fontSize: 24,
                fontWeight: '600',
                color: '#7F5AF0',
                marginBottom: 30,
              }}>
              Discover Groups
            </Text>
            <Text
              style={{
                textAlign: 'left',
                color: '#30467B',
                fontSize: 16,
                fontWeight: '500',
                marginLeft: 5,
              }}>
              Forum space to share your thoughts with others and create meaningful conversation with your community.
            </Text>
            <TouchableOpacity
              onPress={() => {
                setTutorial3(false);
                setTutorial4(true);
              }}
              style={{
                height: 50,
                backgroundColor: '#7F5AF0',
                marginTop: '25%',
                width: 200,
                borderRadius: 50,
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: 18,
                }}>
                Got it
              </Text>
            </TouchableOpacity>
            {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
          </TouchableOpacity>
        </View>
      </Modal>


      {/* modal tutorial 4 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={tutorial4}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setReq(!req);
        }}>
        <View style={styles.tutorialcenteredView}>
          <TouchableOpacity style={styles.tutorial4modalView} onPress={() => {}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignSelf: 'flex-start',
                marginBottom: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
            </View>
            <Text
              style={{
                marginLeft: -15,
                fontSize: 24,
                fontWeight: '600',
                color: '#7F5AF0',
                marginBottom: 30,
              }}>
              Join a Talkspace 
            </Text>
            <Text
              style={{
                textAlign: 'left',
                color: '#30467B',
                fontSize: 16,
                fontWeight: '500',
                marginLeft: 5,
              }}>
Audio space where you can host insightful conversations, educational workshops or listen in.            </Text>
            <TouchableOpacity
              onPress={() => {
                setTutorial4(false);
                setTutorial5(true);
              }}
              style={{
                height: 50,
                backgroundColor: '#7F5AF0',
                marginTop: '25%',
                width: 200,
                borderRadius: 50,
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: 18,
                }}>
                Got it
              </Text>
            </TouchableOpacity>
            {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
          </TouchableOpacity>
        </View>
      </Modal>



      {/* modal tutorial 5 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={tutorial5}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setReq(!req);
        }}>
        <View style={styles.tutorialcenteredView}>
          <TouchableOpacity style={styles.tutorial5modalView} onPress={() => {}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignSelf: 'flex-start',
                marginBottom: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
            </View>
            <Text
              style={{
                marginLeft: -15,
                fontSize: 24,
                fontWeight: '600',
                color: '#7F5AF0',
                marginBottom: 30,
              }}>
              Check your Calendar
            </Text>
            <Text
              style={{
                textAlign: 'left',
                color: '#30467B',
                fontSize: 16,
                fontWeight: '500',
                marginLeft: 5,
              }}>
              View, reschedule, accept or decline invites. Stay up to date on your meetings in one convenient place.
            </Text>
            <TouchableOpacity
              onPress={() => {
                setTutorial5(false);
                setTutorial6(true);
              }}
              style={{
                height: 50,
                backgroundColor: '#7F5AF0',
                marginTop: '25%',
                width: 200,
                borderRadius: 50,
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: 18,
                }}>
                Got it
              </Text>
            </TouchableOpacity>
            {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
          </TouchableOpacity>
        </View>
      </Modal>

      {/* modal tutorial 6 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={tutorial6}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setReq(!req);
        }}>
        <View style={styles.tutorialcenteredView}>
          <TouchableOpacity style={styles.tutorial6modalView} onPress={() => {}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignSelf: 'flex-start',
                marginBottom: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: "#DADADA",
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
            </View>
            <Text
              style={{
                marginLeft: -15,
                fontSize: 24,
                fontWeight: '600',
                color: '#7F5AF0',
                marginBottom: 30,
              }}>
              Chat With Your Matches 
            </Text>
            <Text
              style={{
                textAlign: 'left',
                color: '#30467B',
                fontSize: 16,
                fontWeight: '500',
                marginLeft: 5,
              }}>
              Engage in meaningful conversation with your matches and take your networking to the next level.
            </Text>
            <TouchableOpacity
              onPress={() => {
                setTutorial6(false);
                setTutorial7(true);
              }}
              style={{
                height: 50,
                backgroundColor: '#7F5AF0',
                marginTop: '25%',
                width: 200,
                borderRadius: 50,
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: 18,
                }}>
                Got it
              </Text>
            </TouchableOpacity>
            {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
          </TouchableOpacity>
        </View>
      </Modal>



      {/* modal tutorial 7 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={tutorial7}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setReq(!req);
        }}>
        <View style={styles.tutorialcenteredView}>
          <TouchableOpacity style={styles.tutorial7modalView} onPress={() => {}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignSelf: 'flex-start',
                marginBottom: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#7F5AF0',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  margin: 5,
                }}></View>
            </View>
            <Text
              style={{
                marginLeft: -15,
                fontSize: 24,
                fontWeight: '600',
                color: '#7F5AF0',
                marginBottom: 30,
              }}>
              Need to adjust Notification settings?
            </Text>
            <Text
              style={{
                textAlign: 'left',
                color: '#30467B',
                fontSize: 16,
                fontWeight: '500',
                marginLeft: 5,
              }}>
              This button will allow you to adjust your notification settings as well as access other setting options.
            </Text>
            <TouchableOpacity
              onPress={() => {
                setTutorial7(false);
              }}
              style={{
                height: 50,
                backgroundColor: '#7F5AF0',
                marginTop: '25%',
                width: 200,
                borderRadius: 50,
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: 18,
                }}>
                Got it
              </Text>
            </TouchableOpacity>
            {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
          </TouchableOpacity>
        </View>
      </Modal>




        {/* swipe req modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={req}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setReq(!req);
        }}>
        <View style={styles.centeredView}>
          <TouchableOpacity
            style={styles.modalView}
            onPress={() => {
              setReq(false);
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '600',
                color: '#30467B',
                marginBottom: 10,
              }}>
              You've sent your first Match request!
            </Text>
            <Text style={{textAlign: 'center', color: '#8390B0', width: 200}}>
              We hope you're enjoy the experience so far!
            </Text>
            {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
// }
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  upperNav: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    height: 60,
    zIndex: 100,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 50,
    overflow: 'hidden',
  },
  backButton: {
    width: 19,
    height: 20,
    marginLeft: 20,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brij: {
    textAlign: 'center',
    marginLeft: '18%',
    marginRight: '29%',
    fontSize: 36,
    color: '#7F5AF0',
    fontWeight: '600',
  },
  bell: {
    width: 35,
    height: 35,
  },
  cardContainer: {
    width: '93%',
    height: '85%',
    marginTop: 10,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 60,
    alignContent: 'center',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 25,
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
  userDescription: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '13%',
    padding: 10,
    justifyContent: 'flex-end',
    position: 'relative',
    top: '85%',
    paddingLeft: 20,
    // position: 'absolute',
    // zIndex: 2,
    // backgroundColor: 'rgba(0,0,0,0.1)',
    // bottom: 0,
    // opacity: 1
  },
  descriptionName: {
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
  },
  workplace: {
    display: 'flex',
    flexDirection: 'row',
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
  },
  nextCardContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
  },
  like: {
    position: 'absolute',
    top: 0,
    zIndex: 1,
    margin: 10,
  },
  dislike: {
    position: 'absolute',
    top: 10,
    right: 0,
    zIndex: 1,
    margin: 10,
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
  tutorialcenteredView: {
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
  tutorialmodalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 400,
    width: '90%',
  },
  tutorial2modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 350,
    width: '90%',
    position:'absolute',
    top: 90
  },
  tutorial3modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 350,
    width: '90%',
    position:'absolute',
    bottom: 90
  },
  tutorial4modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 350,
    width: '90%',
    position:'absolute',
    bottom: 90
  },
  tutorial5modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 350,
    width: '90%',
    position:'absolute',
    bottom: 90
  },
  tutorial6modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 350,
    width: '90%',
    position:'absolute',
    bottom: 90
  },
  tutorial7modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 350,
    width: '90%',
    position:'absolute',
    top: 90
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
export default Explore;
