// screens/AddUserScreen.js
import React, {Component, useState} from 'react';
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
import Auth from 'aws-amplify'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import Chevron from 'react-chevron'
const MyProfile = (props) => {
  // constructor() {
  //   super();
  // this.state = {
  // isLoading: false,
  const basicslist = [
    'Industry',
    'Occupation',
    'Education',
    'Years of experience',
    'Vaccination status',
    'Gender',
    'Location',
  ];

  const accountsList = [
      {name: 'SoundCloud', logo: SoundCloudLogo, width: 33, height: 33},
      {name: 'Spotify', logo: Spotify, width: 38, height: 38},
      {name: 'Instagram', logo: insta, width: 29, height: 29},
    ],
    // [photo, setPhoto] : React.useState(null)
    // };

   
  setModalVisible = visible => {
      this.setState({modalVisible: visible});
    };

  chandleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      // console.log(response);
      if (response) {
        setPhoto(response);
      }
    });
  };

  const [aboutMe, setAboutMe] = useState('');
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
            <Text style={styles.TopicTitle}>My Photos</Text>
            <View style={styles.outerPhoto}>
              <View style={styles.topPhotoRow}>
                <View style={styles.leftPhoto}>
                  <TouchableOpacity
                    onPress={() => {
                      handleChoosePhoto();
                    }}>
                    <ImageBackground
                      style={styles.bigPhoto}
                      source={image}
                      resizeMode="cover"></ImageBackground>
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
              onChangeText={(val) => setAboutMe(val)}
              placeholder="Use this space to give a quick rundown of who you are and what you do."></TextInput>
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
                initialTags={['Writing music', 'Producing beats', 'Singing']}
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
                <Text style={styles.basicText}>{e}</Text>
                <TouchableOpacity styles={styles.basicButtons}>
                  <Text style={styles.basicAdd}>
                    Add
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
            <Tags
              style={[styles.tagContainer, {marginTop: 10}]}
              initialText=""
              textInputProps={{
                placeholder: 'Add your pronouns',
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
            style={{width: 100, position: 'relative', left: '75%', bottom: 0}}>
            <IconButton
              style={{backgroundColor: 'lightgray', width: 80, height: 45}}
              icon="arrow-right"
              color={Colors.white}
              size={40}
              onPress={() => {
                //   uncomment the alert when data is connected
                // alert('Please select at least 3');
                this.props.navigation.navigate('Explore');
              }}
            />
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
