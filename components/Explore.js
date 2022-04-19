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
// DataStore.configure({
//   storageAdapter: SQLiteAdapter,
// });
const Explore = props => {
  const [users, setUsers] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [nextIndex, setnextIndex] = useState(currIndex + 1);
  const currentProfile = users[currIndex];
  const nextProfile = users[nextIndex];
  const {width: screenWidth} = useWindowDimensions();
  const translateX = useSharedValue(0);
  const Rotation = 60;
  const hiddenTranslateX = 2 * screenWidth;
  const [currentUser, setCurrentUser] = useState(null);
  const [me, setMe] = useState(null);
  const rotate = useDerivedValue(
    () =>
      interpolate(translateX.value, [0, -hiddenTranslateX], [0, Rotation]) +
      'deg',
  );

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
  // useEffect(() => {
  //   if (Rotation > 60) {
  //   }
  // }, [rotate]);
  const likeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, hiddenTranslateX / 4], [0, 1]),
  }));

  const dislikeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, -hiddenTranslateX / 4], [0, 1]),
  }));

  const SwipeVelocity = 800;
  // gesture handler hook to get feedback of user touch and start dragging
  const gestureHandler = useAnimatedGestureHandler({
    //   on start of user touch
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: event => {
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
      const onSwipe  = event.velocityX > 0 ? onSwipeRight : onSwipeLeft
      onSwipe && runOnJS(onSwipe)();
    },
  });

  //  on first load get ME
  const fetchCurrentUserLoggedIn = async () => {
    setMe(await Auth.currentAuthenticatedUser());
  };
  useEffect(() => {
    fetchCurrentUserLoggedIn();
  }, []);

  useEffect(() => {
    translateX.value = 0;
    setnextIndex(currIndex + 1);
  }, [currIndex]);

  // set current user youre looking at
  useEffect(() => {
    setCurrentUser(currentProfile);
  }, [currentProfile, setCurrentUser]);
// get all users from database
  const getCurrUsers = async () => {
    // const currentUser = await Auth.currentAuthenticatedUser();
    const getusers = await DataStore.query(User);
    setUsers(getusers);
  };

  useEffect(() => {
    getCurrUsers();
  }, [users]);

  
  useEffect(() => {
    const getCurrUser = async () => {
      const currentUser = await Auth.currentAuthenticatedUser();
      const dbUsers = await DataStore.query(
        User,
        u => u.sub === currentUser.attributes.sub,
      );

      if (dbUsers.length < 0) {
        return;
      }

      dbUsers.map(e => {
        if (e.sub === currentUser.attributes.sub) {
          setMe(e);
        }
        return;
      });
    };
    getCurrUser();
  }, []);
  //   render() {
  //     if (this.state.isLoading) {
  //       return (
  //         <View style={styles.preloader}>
  //           <ActivityIndicator size="large" color="#9E9E9E" />
  //         </View>
  //       );
  //     }
  const onSwipeRight = async () => {
    if (!currentUser || !me) {
      return;
    }
    if (translateX.value) {
      await DataStore.save(
        new Match({
          User1Id: me.id,
          User2Id: currentUser.id,
          isMatch: true,
        }),
      );
    }

      console.log('right');
    // }
  };

  const onSwipeLeft = () => {
    console.log('left')
  };


  

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
            <View
              style={{
                backgroundColor: '#E4DFFA',
                width: '100%',
                height: '100%',
              }}></View>
          )}
        </View>
        {/* back to profile button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => props.navigation.navigate('MyProfile')}>
          <ImageBackground
            onPress={() => props.navigation.navigate('MyProfile')}
            style={{width: '100%', height: '100%'}}
            source={require('../assets/back.png')}></ImageBackground>
        </TouchableOpacity>

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
          onPress={() => props.navigation.navigate('Forum')}
          style={styles.forumlogo}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/forum-icon-grey.png')}
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
        <TouchableOpacity style={[styles.explorelogo]}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/brij-logo-purple.png')}
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
    height: '77%',
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
});
export default Explore
