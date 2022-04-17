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
import image from '../assets/profile.png';
import image2 from '../assets/profile2.png';
import {launchImageLibrary} from 'react-native-image-picker';
import Tags from 'react-native-tags';
import SoundCloudLogo from '../assets/soundcloud.png';
import Spotify from '../assets/spotify.png';
import insta from '../assets/insta.png';
import {Auth, DataStore} from 'aws-amplify';
import {User} from '../src/models';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import Chevron from 'react-chevron'
const MyProfile = props => {
  const [bio, setBio] = useState('');
  const [photos, setphotos] = useState('');
  const [interests, setinterests] = useState(['Writing music', 'Producing beats', 'Singing']);
  const [profilePic, setProfilePic] = useState('');
  const [industry, setindustry] = useState();
  const [occupation, setoccupation] = useState();
  const [education, seteducation] = useState();
  const [yearsOfExperience, setyearsOfExperience] = useState(0);
  const [VaccinationStatus, setVaccinationStatus] = useState('');
  const [gender, setgender] = useState('');
  const [location, setlocation] = useState('');
  const [pronoun, setpronoun] = useState('');
  const [user, setUser] = useState(null);
  const [me, setMe]= useState(null)
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
      const dbUser = dbUsers[0];
      setUser(dbUser)
      setBio(dbUser.bio);
      setphotos(dbUser.pictures);
      setinterests(dbUser.interests);
      setProfilePic(dbUser.profilePic);
      setindustry(dbUser.industry);
      setoccupation(dbUser.occupation);
      seteducation(dbUser.education);
      setyearsOfExperience(dbUser.yearsOfExperience);
      setVaccinationStatus(dbUser.VaccinationStatus);
      setgender(dbUser.gender);
      setlocation(dbUser.location);
      setpronoun(dbUser.pronoun);
      
    };
    getCurrUser();
  }, []);

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
      const dbUser = dbUsers[0];
      setUser(dbUser)
      setBio(dbUser.bio);
      setphotos(dbUser.pictures);
      setinterests(dbUser.interests);
      setProfilePic(dbUser.profilePic);
      setindustry(dbUser.industry);
      setoccupation(dbUser.occupation);
      seteducation(dbUser.education);
      setyearsOfExperience(dbUser.yearsOfExperience);
      setVaccinationStatus(dbUser.VaccinationStatus);
      setgender(dbUser.gender);
      setlocation(dbUser.location);
      setpronoun(dbUser.pronoun);
      
    };
    getCurrUser();
  }, []);

  const save = async () => {
const updatedUser = User.copyOf(user, updated => {
      updated.bio = bio
      updated.pictures = pictures
      updated.interests = interests
      updated.profilePic = profilePic
      updated.yearsOfExperience = yearsOfExperience
      updated.VaccinationStatus = VaccinationStatus
      updated.gender = gender
      updated.location = location
      updated.pronoun = pronoun
 updated.name = props.route.params.name
updated.birthday = props.route.params.birthday
updated.age = props.route.params.age
updated.phone = ''
updated.email = ''
updated.enableNotifs = props.route.params.enableNotifs
updated.mentor = props.route.params.mentor
updated.mentee = props.route.params.mentee
updated.lookingFor = props.route.params.lookingFor
updated.gender = props.route.params.gender
updated.pronouns = ''
updated.disability = props.route.params.disability
updated.disabilityVisible = props.route.params.disabilityVisible
updated.ethnicity = props.route.params.ethnicity
updated.ethnicityVisible = props.route.params.ethnicityVisible
updated.sexuality = props.route.params.sexuality
updated.sexualityVisible = props.route.params.sexualityVisible
updated.myInterest = []
updated.testimonials = []
updated.Org = false
updated.OrgName = ''
updated.followList = []
updated.both = props.route.params.both
updated.inclusionSurvery = props.route.params.inclusionSurvery
updated.InclusivityAgreement = val
updated.sub = userAuth.attributes.sub
updated.premium = false
updated.freemium = true
updated.active = true
})

await DataStore.save(updatedUser)
    // console.log(props.route.params);
    //      /* Models in DataStore are immutable. To update a record you must use the copyOf function
    //  to apply updates to the item’s fields rather than mutating the instance directly */
   
   
    // await DataStore.save(
    //   User.copyOf(CURRENT_USERDATA, item => {
    //     item.InclusivityAgreement = false;
    //     // Update the values on {item} variable to update DataStore entry
    //   }),
    // );
  };
  const basicslist = [
    {name: 'Industry', item: industry},
    {name: 'Occupation', item: occupation},
    {name: 'Education', item: education},
    {name: 'Years of experience', item: yearsOfExperience},
    {name: 'Vaccination status', item: VaccinationStatus},
    {name: 'Gender', item: gender},
    {name: 'Location', item: location},
  ];

  const accountsList = [
      {name: 'SoundCloud', logo: SoundCloudLogo, width: 33, height: 33},
      {name: 'Spotify', logo: Spotify, width: 38, height: 38},
      {name: 'Instagram', logo: insta, width: 29, height: 29},
    ],
    setModalVisible = visible => {
      this.setState({modalVisible: visible});
    };

  //  handleUploadPhoto(){
  //     fetch(`${SERVER_URL}/api/upload`, {
  //       method: 'POST',
  //       body: createFormData(photo, { userId: '123' }),
  //     })
  //       .then((response) => response.json())
  //       .then((response) => {
  //         console.log('response', response);
  //       })
  //       .catch((error) => {
  //         console.log('error', error);
  //       });
  //   };

  // render() {
  //   if (isLoading) {
  //     return (
  //       <View style={styles.preloader}>
  //         <ActivityIndicator size="large" color="#9E9E9E" />
  //       </View>
  //     );
  //   }

  // if (hasAccount) {
  return (
    <SafeAreaView>
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
                    {profilePic ? (
                      <ImageBackground
                        style={styles.bigPhoto}
                        source={profilePic}
                        resizeMode="cover"></ImageBackground>
                    ) : (
                      <ImageBackground
                        style={styles.bigPhoto}
                        source={image}
                        resizeMode="cover"></ImageBackground>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.rightPhotos}>
                  <TouchableOpacity
                    onPress={() => {
                      handleChoosePhoto();
                    }}
                    style={styles.rightImage}>
                    <ImageBackground
                      style={{width: '100%', height: '100%'}}
                      source={image2}
                      resizeMode="cover"></ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      handleChoosePhoto();
                    }}
                    style={styles.rightImage}>
                    <Text style={styles.photoInput}>+</Text>
                  </TouchableOpacity>
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
              <Tags
                style={styles.tagContainer}
                initialText=""
                textInputProps={{
                  placeholder: 'Share some things you enjoys',
                }}
                initialTags={
                  interests.length
                    ? interests
                    : ['Writing music', 'Producing beats', 'Singing']
                }
                onChangeTags={tags => console.log(tags)}
                onTagPress={(index, tagLabel, event, deleted) =>
                  console.log(
                    index,
                    tagLabel,
                    event,
                    deleted ? 'deleted' : 'not deleted',
                  )
                }
                containerStyle={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  width: '60%',
                }}
                inputStyle={{backgroundColor: '#E4DFFA'}}
                renderTag={({
                  tag,
                  index,
                  onPress,
                  deleteTagOnPress,
                  readonly,
                }) => (
                  <TouchableOpacity
                    style={{
                      padding: 7,
                      paddingLeft: 12,
                      paddingRight: 12,
                      borderRadius: 50,
                      backgroundColor: '#E4DFFA',
                      margin: 5,
                      overflow: 'scroll',
                    }}
                    key={`${tag}-${index}`}
                    onPress={onPress}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#30467B99',
                        fontWeight: '500',
                      }}>
                      {tag}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </ScrollView>
          </View>

          {/*  Testimonials component */}

          <View style={styles.Testimonals}>
            <Text style={styles.TopicTitle}>Testimonals</Text>
            <Text style={styles.topicDescription}>
              phone a friend (or collegue).
            </Text>
            <Tags
              style={{
                borderWidth: 2,
                borderColor: '#D9CEFB',
                padding: 3,
                borderRadius: 10,
                overflow: 'scroll',
                width: 320,
                marginTop: 10,
              }}
              initialText=""
              textInputProps={{
                placeholder: 'Add email address for a testimonial link',
              }}
              initialTags={[]}
              onChangeTags={tags => console.log(tags)}
              onTagPress={(index, tagLabel, event, deleted) =>
                console.log(
                  index,
                  tagLabel,
                  event,
                  deleted ? 'deleted' : 'not deleted',
                )
              }
              containerStyle={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                width: '60%',
              }}
              inputStyle={{backgroundColor: '#E4DFFA'}}
              renderTag={({
                tag,
                index,
                onPress,
                deleteTagOnPress,
                readonly,
              }) => (
                <TouchableOpacity
                  style={{
                    padding: 7,
                    paddingLeft: 12,
                    paddingRight: 12,
                    borderRadius: 50,
                    backgroundColor: '#E4DFFA',
                    margin: 5,
                    overflow: 'scroll',
                  }}
                  key={`${tag}-${index}`}
                  onPress={onPress}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#30467B99',
                      fontWeight: '500',
                    }}>
                    {tag}
                  </Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity>
              <Text
                style={{
                  position: 'relative',
                  left: '94%',
                  bottom: 45,
                  fontSize: 30,
                  color: '#A58CF5',
                  fontWeight: '300',
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>

          {/* My Basics */}

          <View style={styles.basics}>
            <Text style={[styles.TopicTitle, {marginBottom: 10}]}>
              My basics
            </Text>
            {basicslist.map(e => (
              <View style={styles.basicsEach}>
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
            placeholder={pronoun ? pronoun : 'example: she/her'}
            >

            </TextInput>
          </View>

          {/* Created Account */}
          <View style={styles.createdAccount}>
            <Text style={styles.TopicTitle}>Connected Accounts</Text>
            <Text style={styles.topicDescription}>Show off your skills.</Text>

            {/*  Component for accounts  */}
            <View style={{display: 'flex', flexDirection: 'column'}}>
              {/*  each account */}

              {accountsList.map(e => (
                <View style={styles.eachAccount}>
                  {/* first component */}
                  <View
                    style={{
                      width: e.width,
                      height: e.height,
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                    {/* logo */}
                    <ImageBackground
                      style={{width: '100%', height: '100%'}}
                      source={e.logo}></ImageBackground>
                  </View>
                  {/* second component */}
                  <View style={{marginLeft: 10, marginRight: 10}}>
                    <Text style={styles.accountTopic}>
                      Connect your {e.name}
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
              ))}
            </View>
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
                props.navigation.navigate('Explore')
              }}>
              <Image source={require('../assets/arrow-right.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    display:'flex',
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
    fontColor: 'grey'
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
});

export default MyProfile;
