import React, {useRef, useEffect, useState} from 'react';
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
  BackgroundImage,
  Animated,
} from 'react-native';
import {Auth, DataStore} from 'aws-amplify';
import {User} from '../src/models';
import {useNavigation} from '@react-navigation/native'
const Login = () => {
  const navigation = useNavigation()
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const wordslist = ['here', 'there'];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  }, [fadeAnim]);

  function words() {
    setTimeout(
      () =>
        wordslist.map(e => {
          return e;
        }),
      1000,
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: '#7F5AF0'}}>
      <View styles={{backgroundColor: '#7F5AF0'}}>
        <StatusBar styles={{backgroundColor: '#7F5AF0'}} />

        {/* outercontainer */}

        <View style={styles.outercontainer}>

          {/* component1*/}
          <View style={styles.container1}>
            {/* <Image
            style={styles.logoImage}
            source={require('../assets/NAL-light.png')}
          /> */}
            <Text style={styles.brijText}>Welcome to brij.</Text>
          </View>

          {/* descripttion */}

          <View style={styles.descriptionContainer}>
            <Animated.View // Special animatable View
              style={{
                opacity: fadeAnim, // Bind opacity to animated value
              }}>
              <Text style={styles.description}>
                The music industry’s mentorship hub for Artists.
              </Text>
            </Animated.View>
          </View>

          {/* bottom Container*/}
          <View style={styles.bottomContainer}>
            {/* <View style={styles.bottomTextDescContainer}>
            <Text style={styles.bottomTextDesc}>
              By continuing you agree to terms of use and privacy policy
            </Text>
          </View> */}

            <TouchableOpacity
              style={styles.createAccount}
              onPress={() => navigation.navigate('SignUpHow')}>
              <Text 
              style={styles.createAccountText}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signin}
              onPress={() => navigation.navigate('SignIn')}>
              <Text 
              style={styles.signinText}>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text 
              style={{color: 'white', textAlign: 'center', margin: 20}}>
                By continuing you agree to Terms of Use and Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <BackgroundImage source={}>
        </BackgroundImage> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomTextDescContainer: {
    alignItems: 'center',
    width: '100%',
  },
  bottomTextDesc: {
    color: 'white',
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 16,
    padding: 15,
  },
  createAccountText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#30467B',
    fontWeight: '600',
  },
  createAccount: {
    width: '95%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
  signinText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
  signin: {
    width: '95%',
    height: 50,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    padding: 10,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  descriptionContainer: {
    width: '98%',
    justifyContent: 'center',
  },
  description: {
    fontSize: 25,
    color: 'white',
    fontWeight: '600',
    textAlign: 'left',
    marginTop: 0,
    padding: 30,
  },
  outercontainer: {
    backgroundColor: '#7F5AF0',
    height: '100%',
    width: '100%',
    paddingTop: 50,
  },
  logoImage: {
    width: 100,
    height: 90,
  },
  container1: {
    display: 'flex',
    flexDirection: 'row',
  },
  brijText: {
    color: '#FEFEFE',
    fontWeight: '600',
    fontSize: 46,
    width: 230,
    marginTop: 70,
    paddingLeft: 30,
  },
});

export default Login;
