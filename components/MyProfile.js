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
  Modal,
  SafeAreaView,
  Image,
  Icon,
  ImageBackground,
} from 'react-native';
import {
  SelectMultipleButton,
  SelectMultipleGroupButton,
} from 'react-native-selectmultiple-button';
import image from '../assets/profile.png';
import image2 from '../assets/profile2.png';
import {launchImageLibrary} from 'react-native-image-picker';
import Tags from 'react-native-tags';
import SoundCloudLogo from '../assets/soundcloud.png';
import Spotify from '../assets/spotify.png';
import insta from '../assets/insta.png';
import {Auth, DataStore} from 'aws-amplify';
import {User} from '../src/models';
import InstagramLogin from 'react-native-instagram-login';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import Chevron from 'react-chevron'
const MyProfile = props => {
  const [token, setToken] = useState('');
  const [bio, setBio] = useState('');
  const [photos, setphotos] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [interests, setinterests] = useState([]);
  const [profilePic, setProfilePic] = useState('');
  const [industry, setindustry] = useState([]);
  const [occupation, setoccupation] = useState([]);
  const [education, seteducation] = useState([]);
  const [yearsOfExperience, setyearsOfExperience] = useState(0);
  const [VaccinationStatus, setVaccinationStatus] = useState('');
  const [gender, setgender] = useState('');
  const [location, setlocation] = useState('');
  const [pronoun, setpronoun] = useState('');
  const [user, setUser] = useState(null);
  const [me, setMe] = useState(null);
  const [TestimonialEmail, setTestimonialEmail] = useState('');
  const basicInterests = ['Writing music', 'Producing beats', 'Singing'];
  const [testimonialmodalVisible, settestimonialmodalVisible] = useState(false);
  const setIgToken = data => {
    console.log('data', data);
    setToken(data.access_token);
  };
  const onClear = () => {
    CookieManager.clearAll(true).then(res => {
      this.setState({token: null});
    });
  };
  const [dbUser, setdbUser] = useState({});
  const clear = async() => {
    await DataStore.clear
  }
  useEffect(() => {
    console.log(props)
    const getCurrUser = async () => {
      const currentUser = await Auth.currentAuthenticatedUser();
      console.log('CURRENT', currentUser);
      const dbUsers = await DataStore.query(User, u =>
        u.sub('eq', currentUser.attributes.sub),
      );

      if (!dbUsers || dbUsers.length === 0) {
        return;
      }

      const dbUser = dbUsers[0];
      setdbUser(dbUser);
      setUser(dbUser);
      setBio(dbUser.bio);
      setinterests(dbUser.interests);
      setphotos(dbUser.pictures);
      setProfilePic(dbUser.profilePic);
      setindustry(dbUser.industry);
      setoccupation(dbUser.occupation);
      seteducation(dbUser.education);
      setyearsOfExperience(dbUser.yearsOfExperience);
      setVaccinationStatus(dbUser.VaccinationStatus);
      setgender(dbUser.gender);
      setlocation(dbUser.location);
      setpronoun(dbUser.pronoun);
      return;
    };
    getCurrUser();
  }, []);



  const save = async () => {
    const updatedUser = User.copyOf(user, updated => {
      updated.bio = bio;
      updated.pictures = pictures;
      updated.interests = interests;
      updated.profilePic = profilePic;
      updated.yearsOfExperience = yearsOfExperience;
      updated.VaccinationStatus = VaccinationStatus;
      updated.gender = gender;
      updated.location = location;
      updated.pronoun = pronoun;
      updated.name = props.route.params.name;
      updated.birthday = props.route.params.birthday;
      updated.age = props.route.params.age;
      updated.phone = '';
      updated.email = '';
      updated.enableNotifs = props.route.params.enableNotifs;
      updated.mentor = props.route.params.mentor;
      updated.mentee = props.route.params.mentee;
      updated.lookingFor = props.route.params.lookingFor;
      updated.gender = props.route.params.gender;
      updated.pronouns = '';
      updated.disability = props.route.params.disability;
      updated.disabilityVisible = props.route.params.disabilityVisible;
      updated.ethnicity = props.route.params.ethnicity;
      updated.ethnicityVisible = props.route.params.ethnicityVisible;
      updated.sexuality = props.route.params.sexuality;
      updated.sexualityVisible = props.route.params.sexualityVisible;
      updated.myInterest = [];
      updated.testimonials = [];
      updated.Org = false;
      updated.OrgName = '';
      updated.followList = [];
      updated.both = props.route.params.both;
      updated.inclusionSurvery = props.route.params.inclusionSurvery;
      updated.InclusivityAgreement = val;
      updated.sub = userAuth.attributes.sub;
      updated.premium = false;
      updated.freemium = true;
      updated.active = true;
    });

    await DataStore.save(updatedUser);
  };
  const basicslist = [
    {
      name: 'Industry',
      // .length
      item: industry.length
        ? industry.map(e => {
            return e.toUpperCase();
          })
        : 'Add',
    },
    {
      name: 'Occupation',
      // .length
      item: occupation.length
        ? occupation.map(e => {
            return e;
          })
        : 'Add',
    },
    {
      name: 'Education',
      item: education.length
        ? // .length
          education.map(e => {
            return e;
          })
        : 'Add',
    },
    {name: 'Years of experience', item: yearsOfExperience},
    {name: 'Vaccination status', item: VaccinationStatus},
    {name: 'Gender', item: gender},
    {name: 'Location', item: location},
  ];

  const accountsList = [
    {name: 'SoundCloud', logo: SoundCloudLogo, width: 33, height: 33},
    {name: 'Spotify', logo: Spotify, width: 38, height: 38},
    {name: 'Instagram', logo: insta, width: 29, height: 29},
  ];

  const signout = async () => {
    await Auth.signOut();
    await DataStore.clear
    props.navigation.navigate('Home');
  };

  // if (hasAccount) {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      {
        props?.isUserLoading ? 
        (<ActivityIndicator styles={{flexGrow: 1, height:'100%'}}/>)
        : (
      <ScrollView>
        <View style={styles.container}>
          {/* My Photos component */}
          <View>
            <Text style={styles.TopicTitle}>My Photos </Text>
            <View style={styles.outerPhoto}>
              <View style={styles.topPhotoRow}>
                <View style={styles.leftPhoto}>
                  <TouchableOpacity
                    onPress={() => {
                      handleChoosePhoto();
                    }}>
                    {user ? (
                      user.profilePic ? (
                        <ImageBackground
                          style={styles.bigPhoto}
                          source={{url: user.profilePic}}
                          resizeMode="cover"></ImageBackground>
                      ) : (
                        <ImageBackground
                          style={styles.bigPhoto}
                          source={image}
                          resizeMode="cover"></ImageBackground>
                      )
                    ) : (
                      <View></View>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.rightPhotos}>
                  {user ? (
                    user.pictures ? (
                      user.pictures.map(e => (
                        <>
                          <TouchableOpacity
                            onPress={() => {
                              handleChoosePhoto();
                            }}
                            style={styles.rightImage}>
                            <ImageBackground
                              style={{width: '100%', height: '100%'}}
                              source={{url: e.uri}}
                              resizeMode="cover"></ImageBackground>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              handleChoosePhoto();
                            }}
                            style={styles.rightImage}>
                            <ImageBackground
                              style={{width: '100%', height: '100%'}}
                              source={{url: e.uri}}
                              resizeMode="cover"></ImageBackground>
                            <Text>{e.uri}</Text>
                          </TouchableOpacity>
                        </>
                      ))
                    ) : (
                      <>
                        <TouchableOpacity
                          onPress={() => {
                            handleChoosePhoto();
                          }}
                          style={styles.rightImage}>
                          <Text style={styles.photoInput}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            handleChoosePhoto();
                          }}
                          style={styles.rightImage}>
                          <Text style={styles.photoInput}>+</Text>
                        </TouchableOpacity>
                      </>
                    )
                  ) : (
                    <View></View>
                  )}
                </View>

                {/* third component */}
              </View>
              <View style={styles.thirdPhotoComponent}>
                <TouchableOpacity
                  onPress={() => {
                    handleChoosePhoto();
                  }}
                  style={styles.innerThirdPhoto}>
                  <Text style={styles.photoInput}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    handleChoosePhoto();
                  }}
                  style={styles.innerThirdPhoto}>
                  <Text style={styles.photoInput}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    handleChoosePhoto();
                  }}
                  style={styles.innerThirdPhoto}>
                  <Text style={styles.photoInput}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* <View style={{ position: "absolute", bottom: 0, right: 0 }}>
              <IconButton
                style={{ backgroundColor: "#7F5AF0", width: 80, height: 45 }}
                icon="arrow-right"
                color={Colors.white}
                size={40}
                onPress={() => {
                  this.props.navigation.navigate("Explore");
                }}
              />
            </View> */}

          {/* About me component */}
          <View style={styles.aboutMe}>
            <Text style={styles.TopicTitle}>About Me</Text>
            <Text style={styles.topicDescription}>
              Tell others what you do.
            </Text>
            <TextInput
              multiline
              placeholderTextColor="#30467B99"
              style={styles.aboutMeInput}
              onChangeText={val => setBio(val)}
              placeholder={
                bio
                  ? bio
                  : 'Use this space to give a quick rundown of who you are and what you do.'
              }></TextInput>
          </View>

          {/* my interests component */}

          <View style={styles.myInterests}>
            <Text style={styles.TopicTitle}>My Interests</Text>
            <Text style={styles.topicDescription}>
              Share some fun things you enjoy.
            </Text>
            {/* input for interest tags */}

            <ScrollView horizontal={true} style={styles.tagInserts}>
              {interests.length ? (
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  style={{
                    width: '100%',
                    alignSelf: 'center',
                    justifyContent: 'space-evenly',
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  {interests.map(e => (
                    <Text
                      style={{
                        padding: 6,
                        margin: 10,
                        borderWidth: 0,
                        borderRadius: 14,
                        width: 140,
                        textAlign: 'center',
                        height: 30,
                        backgroundColor: '#E4DFFA',
                        overflow: 'hidden',
                        color: '#30467B99',
                      }}>
                      {e}
                    </Text>
                  ))}
                </TouchableOpacity>
              ) : (
                <View>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={{
                      width: '100%',
                      alignSelf: 'center',
                      justifyContent: 'space-evenly',
                      display: 'flex',
                      flexDirection: 'row',
                    }}>
                    {basicInterests.map(e => (
                      <Text
                        style={{
                          padding: 6,
                          margin: 10,
                          borderWidth: 0,
                          borderRadius: 14,
                          width: 140,
                          textAlign: 'center',
                          height: 30,
                          backgroundColor: '#E4DFFA',
                          overflow: 'hidden',
                          color: '#30467B99',
                        }}>
                        {e}
                      </Text>
                    ))}
                  </TouchableOpacity>
                </View>
              )}
            </ScrollView>
          </View>

          {/*  Testimonials component */}

          <View style={styles.Testimonals}>
            <Text style={styles.TopicTitle}>Testimonals</Text>
            <Text style={styles.topicDescription}>
              phone a friend (or collegue).
            </Text>
            <TouchableOpacity>
              <TextInput
                onChangeText={val => {
                  setTestimonialEmail(val);
                }}
                style={{
                  height: 40,
                  borderWidth: 2,
                  borderColor: '#D9CEFB',
                  padding: 10,
                  borderRadius: 10,
                  width: '85%',
                  justifyContent: 'center',
                }}
                placeholder="example@email.com"></TextInput>
              <TouchableOpacity
                onPress={() => settestimonialmodalVisible(true)}>
                <Text
                  style={{
                    position: 'relative',
                    left: '90%',
                    bottom: 45,
                    fontSize: 30,
                    color: '#A58CF5',
                    fontWeight: '300',
                  }}>
                  +
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          {/* My Basics */}

          <View style={styles.basics}>
            <Text style={[styles.TopicTitle, {marginBottom: 10}]}>
              My basics
            </Text>
            {basicslist.map(e => (
              <View key={e.name} style={styles.basicsEach}>
                <Text style={styles.basicText}>{e.name}</Text>
                <TouchableOpacity styles={styles.basicButtons}>
                  <Text style={styles.basicAdd}>
                    {e.item ? e.item : 'Add'}
                    <Text style={{fontSize: 20, fontWeight: '100'}}>
                      {' >'}
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* my pronouns */}
          <View style={styles.pronounContainer}>
            <Text style={styles.TopicTitle}>My pronouns</Text>
            <Text style={styles.topicDescription}>
              Let us know how to address you.
            </Text>
            <TextInput
              multiline
              placeholderTextColor="#30467B99"
              style={styles.pronounInput}
              onChangeText={val => setBio(val)}
              placeholder={pronoun ? pronoun : 'example: she/her'}></TextInput>
          </View>

          {/* Created Account */}
          <View style={styles.createdAccount}>
            <Text style={styles.TopicTitle}>Connected Accounts</Text>
            <Text style={styles.topicDescription}>Show off your skills.</Text>

            {/*  Component for accounts  */}
            <View style={{display: 'flex', flexDirection: 'column'}}>
              {/*  each account */}

              {/* {accountsList.map(e => (
                
              ))} */}

              <TouchableOpacity>
                <View style={styles.eachAccount}>
                  {/* first component */}
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                    {/* logo */}
                    <ImageBackground
                      style={{width: '100%', height: '100%'}}
                      source={SoundCloudLogo}></ImageBackground>
                  </View>
                  {/* second component */}
                  <View style={{marginLeft: 10, marginRight: 10}}>
                    <Text style={styles.accountTopic}>
                      Connect your Spotify
                    </Text>
                    <Text style={{color: '#30467B99', width: 230}}>
                      Choose your top five. Your profile will be visible to
                      other users.
                    </Text>
                  </View>
                  {/* third component */}
                  <View style={styles.circle}></View>
                  <View style={styles.accoutSelect}>
                    {/* top5 from accounts */}
                    <TouchableOpacity style={styles.top5}>
                      <Text style={styles.top5input}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.top5}>
                      <Text style={styles.top5input}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.top5}>
                      <Text style={styles.top5input}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.top5}>
                      <Text style={styles.top5input}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.top5}>
                      <Text style={styles.top5input}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.eachAccount}>
                  {/* first component */}
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                    {/* logo */}
                    <ImageBackground
                      style={{width: '100%', height: '100%'}}
                      source={Spotify}></ImageBackground>
                  </View>
                  {/* second component */}
                  <View style={{marginLeft: 10, marginRight: 10}}>
                    <Text style={styles.accountTopic}>
                      Connect your SoundCloud
                    </Text>
                    <Text style={{color: '#30467B99', width: 230}}>
                      Choose your top five. Your profile will be visible to
                      other users.
                    </Text>
                  </View>
                  {/* third component */}
                  <View style={styles.circle}></View>
                  <View style={styles.accoutSelect}>
                    {/* top5 from accounts */}
                    <TouchableOpacity style={styles.top5}>
                      <Text style={styles.top5input}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.top5}>
                      <Text style={styles.top5input}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.top5}>
                      <Text style={styles.top5input}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.top5}>
                      <Text style={styles.top5input}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.top5}>
                      <Text style={styles.top5input}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
              {/* setModalVisible(true) */}
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.eachAccount}>
                  {/* first component */}
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                    {/* logo */}
                    <ImageBackground
                      style={{width: '100%', height: '100%'}}
                      source={insta}></ImageBackground>
                  </View>
                  {/* second component */}
                  <View style={{marginLeft: 10, marginRight: 10}}>
                    <Text style={styles.accountTopic}>
                      Connect your Instagram
                    </Text>
                    <Text style={{color: '#30467B99', width: 230}}>
                      Choose your top five. Your profile will be visible to
                      other users.
                    </Text>
                  </View>
                  {/* third component */}
                  <View style={styles.circle}></View>
                  <View style={styles.accoutSelect}>
                    {/* top5 from accounts */}
                    <TouchableOpacity style={styles.top5}>
                      <Text style={styles.top5input}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.top5}>
                      <Text style={styles.top5input}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.top5}>
                      <Text style={styles.top5input}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.top5}>
                      <Text style={styles.top5input}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.top5}>
                      <Text style={styles.top5input}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {/* <InstagramLogin
              modalVisible={modalVisible}
              appId="your-app-id"
              appSecret="your-app-secret"
              redirectUrl="your-redirect-Url"
              scopes={['user_profile', 'user_media']}
              onLoginSuccess={val => seToken(val)}
              onLoginFailure={data => console.log(data)}
            /> */}
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={testimonialmodalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              settestimonialmodalVisible(!testimonialmodalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.testimonialmodalView}>
                <TouchableOpacity
                  onPress={() => settestimonialmodalVisible(false)}
                  style={{position: 'absolute', right: 20, top: 20}}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '600',
                      color: '#30467B99',
                    }}>
                    X
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 23,
                    fontWeight: '600',
                    color: '#30467B',
                    marginBottom: 30,
                  }}>
                  A Testimonial request will be sent to :
                </Text>
                <Text
                  style={{fontSize: 20, color: '#30467B99', fontWeight: '600'}}>
                  {TestimonialEmail} 🥳
                </Text>

                <ScrollView></ScrollView>

                {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
              </View>
            </View>
          </Modal>
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
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={{position: 'absolute', right: 20, top: 20}}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '600',
                      color: '#30467B99',
                    }}>
                    X
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: '600',
                    color: '#30467B',
                    marginBottom: 10,
                  }}>
                  What are some things you enjoy?
                </Text>
                <Text
                  style={{
                    textAlign: 'left',
                    color: '#8390B0',
                    marginBottom: 20,
                  }}>
                  Scroll to view more options
                </Text>
                <ScrollView>
                  <SelectMultipleGroupButton
                    multiple={true}
                    group={[
                      {value: 'Creative Direction'},
                      {value: 'Performer'},
                      {value: 'Engineer'},
                      {value: 'PR'},
                      {value: 'Sound Designer'},
                      {value: 'Audio Engineer'},
                      {value: 'Graphic Designer'},
                      {value: 'Producer'},
                      {value: 'A&R'},
                      {value: 'Publisher'},
                      {value: 'Manager'},
                      {value: 'Mixer'},
                      {value: 'Promoter'},
                      {value: 'Photographer'},
                      {value: 'Accompanist'},
                      {value: 'Arranger'},
                      {value: 'Security'},
                      {value: 'Director'},
                      {value: 'Composer'},
                      {value: 'Record Executive'},
                      {value: 'Album Cover Designer'},
                      {value: 'Artist Development'},
                      {value: 'Artist Relations'},
                      {value: 'Entertainment Law'},
                    ]}
                    defaultSelectedIndexes={[0]}
                    textStyle={{fontSize: 18, textAlign: 'center'}}
                    buttonViewStyle={{
                      alignItems: 'flex-start',
                      borderWidth: 2,
                      borderRadius: 27,
                      borderColor: '#7F5AF0',
                      textAlign: 'center',
                      margin: 3,
                    }}
                    highLightStyle={{
                      textColor: '#30467B',
                      backgroundColor: 'transparent',
                      borderRadius: 27,
                      borderWidth: 1,
                      borderColor: '#7F5AF0',
                      textAlign: 'center',
                      fontsize: 14,
                      borderTintColor: 'transparent',
                      textTintColor: 'white',
                      backgroundTintColor: '#7F5AF0',
                    }}
                    containerViewStyle={{
                      width: '100%',
                      justifyContent: 'flex-start',
                      alignContent: 'center',
                    }}
                    onSelectedValuesChange={
                      selectedValues => {
                        // setArr(selectedValues);
                        // setNextPage('#7F5AF0');
                      }
                      // this._groupButtonOnSelectedValuesChange(selectedValues)
                    }
                  />
                </ScrollView>

                {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
              </View>
            </View>
          </Modal>
          <View>
            <TouchableOpacity onPress={() => signout()}>
              <Text>Sign out</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 100,
              position: 'relative',
              left: '80%',
              bottom: -10,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#7F5AF0',
                width: 70,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}
              color={Colors.white}
              size={40}
              onPress={() => {
                // save()
                props.navigation.navigate('Explore');
              }}>
              <Image source={require('../assets/arrow-right.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
  )}
    </SafeAreaView>
  );
};
// }
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16,
  },
  TopicTitle: {
    color: '#30467B',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 40,
  },
  outerPhoto: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 370,
    borderRadius: 10,
    margin: 0,
    marginTop: 20,
    padding: 10,
  },
  topPhotoRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftPhoto: {
    width: '65%',
    height: 238,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bigPhoto: {
    width: '100%',
    height: '100%',
  },
  rightPhotos: {
    display: 'flex',
    flexDirection: 'column',
    height: 200,
    width: '35%',
    borderRadius: 10,
    padding: 0,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightImage: {
    width: '85%',
    height: '57%',
    borderRadius: 10,
    marginBottom: 12,
    overflow: 'hidden',
    backgroundColor: '#D9CEFB80',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdPhotoComponent: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '33%',
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  innerThirdPhoto: {
    borderRadius: 10,
    backgroundColor: '#D9CEFB80',
    width: '30%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoInput: {
    fontSize: 35,
    color: '#A58CF5',
    fontWeight: '300',
  },
  aboutMe: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  topicDescription: {
    fontSize: 16,
    fontWeight: '400',
    color: '#30467BCC',
    marginTop: 5,
    marginBottom: 5,
  },
  aboutMeInput: {
    padding: 5,
    borderWidth: 2,
    height: 90,
    borderRadius: 10,
    borderColor: '#D9CEFB',
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
  },
  pronounInput: {
    display: 'flex',
    padding: 5,
    borderWidth: 2,
    height: 35,
    borderRadius: 10,
    borderColor: '#D9CEFB',
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    color: 'grey',
  },

  myInterests: {
    display: 'flex',
    flexDirection: 'column',
  },
  tagContainer: {
    borderWidth: 2,
    borderColor: '#D9CEFB',
    padding: 3,
    borderRadius: 10,
    overflow: 'scroll',
    width: '100%',
  },
  tagInserts: {
    marginTop: 10,
    height: 50,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: '#D9CEFB',
  },
  Testimonals: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: -15,
  },
  TestimonalsTags: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  basics: {
    display: 'flex',
    flexDirection: 'column',
  },
  basicsEach: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 5,
  },
  basicText: {
    color: '#30467B',
    fontSize: 16,
    fontWeight: '500',
  },
  basicAdd: {
    color: '#30467B',
    fontWeight: '400',
    fontSize: 16,
  },
  basicButtons: {
    display: 'flex',
    flexDirection: 'row',
  },
  pronounContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  pronouns: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    height: 50,
    borderWidth: 2,
    borderColor: '#D9CEFB',
  },
  eachAccount: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#D9CEFB',
    height: 170,
    borderRadius: 11,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  accountCenterContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  accountTopic: {
    color: '#30467B',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 5,
    width: 230,
  },
  circle: {
    width: 23,
    height: 23,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#D9CEFB',
  },
  accoutSelect: {
    width: '100%',
    height: 70,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3,
  },
  top5: {
    width: 60,
    height: 60,
    backgroundColor: '#D9CEFB80',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  top5input: {
    fontSize: 25,
    color: '#A58CF5',
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
    height: 500,
  },
  testimonialmodalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 200,
    width: '90%',
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

export default MyProfile;
