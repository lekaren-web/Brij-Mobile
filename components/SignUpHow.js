import React, { Component }  from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  BackgroundImage
} from 'react-native';
// import { Icon } from 'react-native-elements';
class SignUpHow extends Component {
    constructor() {
        super();
}

render(){
  return (
    <View styles={{backgroundColor: '#7F5AF0'}}>
      <StatusBar styles={{backgroundColor: '#7F5AF0'}} />
      {/* outercontainer */}
      <View style={styles.outercontainer}>
        {/* component1*/}
        <View style={styles.container1}>
          <Image
            style={styles.logoImage}
            source={require('../assets/NAL-light.png')}
          />
          <Text style={styles.brijText}>brij</Text>
        </View>
        {/* descripttion */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            The music industry’s mentorship hub for Artists{' '}
          </Text>
        </View>

        {/* bottom Container*/}
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.signin}>
          {/* <Icon
          style={{marginRight: 20, padding: 0,height: 20, width: 25 }}
            color= 'white'
          name='email' />  */}
            <Text style={styles.signinText} onPress={() => this.props.navigation.navigate('EmailSignUp')}>SIGN UP WITH EMAIL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signin}>
          {/* <Icon
          style={{marginRight: 20, padding: 0,height: 20, width: 25 }}
            color= 'white'
          name='phone' />  */}
            <Text style={styles.signinText}>SIGN UP WITH PHONE NUMBER</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{color: 'white', textAlign: 'center', margin: 20}}>Trouble Signing In?</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <BackgroundImage source={}>
        </BackgroundImage> */}
    </View>
  )
    }
};

const styles = StyleSheet.create({
  signinText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
  },
  signin: {
    width:'93%',
    height: 50,
    backgroundColor: 'transparent',
    borderWidth: .7,
    borderColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  bottomContainer: {
      width: '100%',
    padding: 10,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionContainer: {
    width: '80%',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
  },
  outercontainer: {
    backgroundColor: '#7F5AF0',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 80,
    height: 90,
  },
  container1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -170,
  },
  brijText: {
    color: '#FEFEFE',
    fontWeight: '600',
    fontSize: 45,
  },
});
export default SignUpHow;
