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
  Image,
  Alert
} from 'react-native';

const IamA = props => {
  let [setMentor] = useState();
  let [setMentee] = useState();
  let [setBoth] = useState();
  let mentor = false;
  let mentee = false;
  let both = false;
  const [nextPage, setNextPage] = useState('lightgrey');
  let [backgroundColorMentor, setbackgroundColorMentor] =
    useState('transparent');
  let [colorMentor, setcolorMentor] = useState('#7F5AF0');

  let [backgroundColorMentee, setbackgroundColorMentee] =
    useState('transparent');
  let [colorMentee, setcolorMentee] = useState('#7F5AF0');

  let [backgroundColorBoth, setbackgroundColorBoth] = useState('transparent');
  let [colorBoth, setcolorBoth] = useState('#7F5AF0');

 const [select , setSelect] = useState(false)
 const [ user , setUser ] = useState({})
  // number that maps to value in array

  // async componentDidMount() {
  //   console.log(props.route.params)
  // }

  const editMM = val => {
    switch (val) {
      case 'mentor':
        mentor = true;
        mentee = false;
        both = false;
        setUser({mentor: mentor, mentee: mentee, both: both, enableNotifs: props.route.params.enableNotifs})
        setSelect(true)
        setbackgroundColorMentor('#7F5AF0'), setcolorMentor('white');
        setbackgroundColorMentee('transparent'), setcolorMentee('#7F5AF0');
        setbackgroundColorBoth('transparent'), setcolorBoth('#7F5AF0');
        
        break;
      case 'mentee':
        mentee = true;
        mentor = false;
        both = false;
        setUser({mentor: mentor, mentee: mentee, both: both, enableNotifs: props.route.params.enableNotifs})
        setSelect(true)
        setbackgroundColorMentee('#7F5AF0'), setcolorMentee('white');
        setbackgroundColorMentor('transparent'), setcolorMentor('#7F5AF0');
        setbackgroundColorBoth('transparent'), setcolorBoth('#7F5AF0');

        break;
      case 'both':
        both = true;
        mentee = false;
        mentor = false;
        setUser({mentor: mentor, mentee: mentee, both: both, enableNotifs: props.route.params.enableNotifs})
        setSelect(true)
        setbackgroundColorBoth('#7F5AF0'), setcolorBoth('white');
        setbackgroundColorMentor('transparent'), setcolorMentor('#7F5AF0');
        setbackgroundColorMentee('transparent'), setcolorMentee('#7F5AF0');
        break;
      default:
        mentor = false;
        mentee = false;
        both = false;
        setUser({mentor: mentor, mentee: mentee, both: both, enableNotifs: props.route.params.enableNotifs})
        setSelect(false)
        setbackgroundColorMentee('transparent'), setcolorMentee('#7F5AF0');
        setbackgroundColorBoth('transparent'), setcolorBoth('#7F5AF0');
        setbackgroundColorMentor('transparent'), setcolorMentor('#7F5AF0');
    }
    if( mentor || mentee || both ){
      setNextPage('#7F5AF0')
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.TopicTitle}>I am a</Text>
      <TouchableOpacity
        style={{
          backgroundColor: backgroundColorMentor,
          textAlign: 'center',
          borderRadius: 50,
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'center',
          padding: 13,
          marginTop: '5%',
          color: colorMentor,
          borderWidth: 1,
          borderColor: '#7F5AF0',
        }}
        onPress={() => editMM('mentor')}>
        <Text
          style={{
            color: colorMentor,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '700',
          }}>
          mentor
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: backgroundColorMentee,
          textAlign: 'center',
          borderRadius: 50,
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'center',
          padding: 13,
          marginTop: '5%',
          color: colorMentee,
          borderWidth: 1,
          borderColor: '#7F5AF0',
        }}
        onPress={() => editMM('mentee')}>
        <Text
          style={{
            color: colorMentee,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '700',
          }}>
          mentee
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: backgroundColorBoth,
          textAlign: 'center',
          borderRadius: 50,
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'center',
          padding: 13,
          marginTop: '5%',
          color: colorBoth,
          borderWidth: 1,
          borderColor: '#7F5AF0',
        }}
        onPress={() => editMM('both')}>
        <Text
          style={{
            color: colorBoth,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '700',
          }}>
          both
        </Text>
      </TouchableOpacity>
      <View style={{position: 'absolute', bottom: 26, right: 10}}>
        
        <TouchableOpacity
                style={{
                  backgroundColor: nextPage,
                  width: 70,
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                }}
                color={Colors.white}
                size={40}
                onPress={() => {
                  {      
                    if (select) {
                      // console.log(props.route.params.enableNotifs)
                      props.navigation.navigate('LookingFor', user);
                    } 
                    if (!select) {
                      Alert.alert('Please select one');
                      return;
                    }}
                }}>
                <Image source={require('../assets/arrow-right.png')}></Image>
              </TouchableOpacity>
      </View>
    </View>
  );
};
// }
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    color: 'white',
    backgroundColor: 'black',
  },
  button2: {
    textAlign: 'center',
    borderColor: '#7F5AF0',
    borderWidth: 1,
    borderRadius: 50,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 15,
    marginTop: '5%',
    color: 'white',
  },
  button3: {
    textAlign: 'center',
    borderColor: '#7F5AF0',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 50,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 15,
    marginTop: 20,
    color: 'black',
  },
  inputGroup: {
    backgroundColor: '#30467B',
  },
  TopicTitle: {
    width: '100%',
    fontSize: 40,
    marginBottom: 70,
    fontWeight: 'bold',
    color: '#30467B',
  },
  TopicTitle2: {
    width: '100%',
    fontSize: 40,
    marginBottom: 40,
    fontWeight: 'bold',
    color: '#30467B',
  },
  container: {
    flex: 1,
    padding: 35,
    height: '100%',
    // alignSelf: "center"
    // justifyContent: "center"
    paddingTop: 200,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    // marginBottom: 420,
    margin: 0,
    // backgroundColor: 'red'F
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
});
export default IamA;
