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
  const [usersMatched, setUsersMatched] = useState(null);
  const [matches, setMatches] = useState([]);
  const [messages, setMessages] = useState([]);
  const [me, setME] = useState();
  const [user, setUser] = useState(null);
 const tempmessages = [{
   pic: 'https://media.istockphoto.com/photos/headshot-of-black-woman-in-glasses-posing-isolated-in-studio-picture-id1201144505?k=20&m=1201144505&s=612x612&w=0&h=55VZDUbyEHxKOlyyhkXw2VR2SwdCACzVCm6FqRt3Qpw=',
   messageName: 'Jay',
   messageDesc: 'Hey Thanks for matching with me!'
 },
 {
  pic: 'https://media.istockphoto.com/photos/young-mixed-race-businesswoman-smiling-to-camera-picture-id1011792066?k=20&m=1011792066&s=612x612&w=0&h=QYMisoii-5qu2aUwwSH8GxeqtHeaP9lwVxsn3eR-t5o=',
  messageName: 'Livia',
  messageDesc: 'Great! how are you?'
},
{
  pic: 'https://media.istockphoto.com/photos/portrait-young-confident-smart-asian-businessman-look-at-camera-and-picture-id1288538088?b=1&k=20&m=1288538088&s=170667a&w=0&h=3efMku7kSXUhpVrErAVVgxp6G91tRZ_5seygOn68RnE=',
  messageName: 'Allan',
  messageDesc: 'Hey Thanks for matching with me!'
},


]
  // DataStore.query the Match table for all the matches made


  // useEffect(() => {
  //   const getCurrUser = async () => {
  //     // {bypassCache: true}
  //     // const currentUser = await Auth.currentAuthenticatedUser();
  //     // console.log('CURRENT USER', currentUser);
  //     // setMe(currentUser);
  //     const dbUsers = await DataStore.query(User, u =>
  //       u.sub('eq', currentUser.attributes.sub),
  //     );

  //     if (!dbUsers || dbUsers.length === 0) {
  //       return;
  //     }

  //     const dbUser = dbUsers[0];
  //     setUser(dbUser);

  //     return;
  //   };
   
  //   getCurrUser();
  // }, []);

  const getCurrMatches = async () => {
    const getmatches = await DataStore.query(Match);
    setMatches(getmatches);
    console.log('matches', getmatches);
  };
  // on "matches" change we will query for the data

  useEffect(() => {
    getCurrMatches();
  }, []);

  // now that we have matches, lets query the database for matches

  return (
    <SafeAreaView styles={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.upperNav}>
          {/* profile pic */}
          <View style={styles.profilePic}>
            {user ? (
              <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={{url: user.profilePic}}
              />
            ) : (
              <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('../assets/profile2.png')}
              />
            )}
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
            {matches.length ? (
              matches.map(e => (
                <TouchableOpacity style={styles.chatHead}>
                  <ImageBackground
                    style={{width: '100%', height: '100%'}}
                    source={require('../assets/profile.png')}
                  />
                </TouchableOpacity>
              ))
            ) : (
              <>
                <View>
                  <TouchableOpacity style={styles.chatHead}>
                    <ImageBackground
                      style={{width: '100%', height: '100%'}}
                      source={{url:'https://media.istockphoto.com/photos/headshot-of-black-woman-in-glasses-posing-isolated-in-studio-picture-id1201144505?k=20&m=1201144505&s=612x612&w=0&h=55VZDUbyEHxKOlyyhkXw2VR2SwdCACzVCm6FqRt3Qpw='}}
                    />
                  </TouchableOpacity>
                  <Text style={{textAlign: 'center', color: '#30467B'}}>
                    Jay
                  </Text>
                </View>
                <View>
                  <TouchableOpacity style={styles.chatHead}>
                    <ImageBackground
                      style={{width: '100%', height: '100%'}}
                      source={{url:'https://media.istockphoto.com/photos/young-mixed-race-businesswoman-smiling-to-camera-picture-id1011792066?k=20&m=1011792066&s=612x612&w=0&h=QYMisoii-5qu2aUwwSH8GxeqtHeaP9lwVxsn3eR-t5o='}}
                    />
                  </TouchableOpacity>
                  <Text style={{textAlign: 'center', color: '#30467B'}}>
                  Livia
                  </Text>
                </View>
                <View>
                  <TouchableOpacity style={styles.chatHead}>
                    <ImageBackground
                      style={{width: '100%', height: '100%'}}
                      source={{url: 'https://media.istockphoto.com/photos/portrait-young-confident-smart-asian-businessman-look-at-camera-and-picture-id1288538088?b=1&k=20&m=1288538088&s=170667a&w=0&h=3efMku7kSXUhpVrErAVVgxp6G91tRZ_5seygOn68RnE='}}
                    />
                  </TouchableOpacity>
                  <Text style={{textAlign: 'center', color: '#30467B'}}>
                  Allan
                  </Text>
                </View>
              </>
            )}
          </ScrollView>
        </View>

        <View>
          <Text style={styles.messages}>My Messages</Text>
          <ScrollView style={styles.messagecontainer}>
            { messages.length ? (
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
              tempmessages.map(e => (
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
                        source={{url: e.pic}}
                      />
                    </TouchableOpacity>
                    {/* description */}
                    <View style={styles.description}>
                      <Text style={styles.messageName}>{e.messageName}</Text>
                      <Text style={styles.messageDesc}>{e.messageDesc}</Text>
                    </View>
                    {/* notifs */}
                  </View>
                </TouchableOpacity>))
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

        <TouchableOpacity
          style={styles.calendarlogo}
          onPress={() => navigation.navigate('Calendar')}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/calendar-icon-grey.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.messagelogo}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/chat-icon-purple.png')}
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
    padding: 12,
    backgroundColor: 'white',
  },
  chatHeads: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 120,
    alignItems: 'center',
    overflow: 'hidden',
    borderBottomColor: '#DADADA',
    borderBottomWidth: 1,
  },
  chatHead: {
    width: 65,
    height: 65,
    borderRadius: 50,
    margin: 5,
    overflow: 'hidden',
  },
  upperNav: {
    position: 'relative',
    top: -15,
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
    height: '61%',
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
    bottom: 24,
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
