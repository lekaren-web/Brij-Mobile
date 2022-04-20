import React, {Component, useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LoginScreen from './Login';
import EmailSignUp from './SignUpEmail';
import SignUp from './SignUpHow';
import EmailVerify from './EmailVerify';
import Verified from './Verified';
import Notifs from './Notifs';
import IamA from './IamA';
import LookingFor from './LookingFor';
import Myname from './Myname';
import Mybirthday from './Mybirthday';
import MyLocation from './MyLocation';
import MyProfile from './MyProfile';
import Explore from './Explore';
import Message from './Message';
import SignIn from './SignIn';
import Mygender from './Mygender';
import Disability from './Disability';
import Myethnicity from './Myethnicity';
import Mysexuality from './Mysexuality';
import MyInterests from './MyInterests';
import InclusionSurvey from './InclusionSurvey';
import AddPhotos from './AddPhotos';
import InclusivityAgreement from './InclusivityAgreement';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Auth, Hub, DataStore} from 'aws-amplify';
import {NavigationContainer} from '@react-navigation/native';
import Calendar from './Calendar'
import Forum from './Forum'
import Audiospace from './Audiospace'

const Stack = createNativeStackNavigator();

const StackNav = ({isUserLoading}) => {
  // state ={
  const [currentUser, setCurrentUser] = useState(null);
  const checkUser = async () => {
    // const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
    // setCurrentUser(authUser);
  };
  useEffect(() => {
    checkUser();
    console.log('in stack nav', isUserLoading)
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* {!currentUser ? (
          <> */}
            <Stack.Screen
              name="Home"
              component={LoginScreen}
              options={{title: 'Login'}}
            />
            <Stack.Screen
              name="SignUpHow"
              component={SignUp}
              options={{title: 'SignUpHow'}}
            />
            <Stack.Screen
              name="EmailSignUp"
              component={EmailSignUp}
              options={{title: 'EmailSignUp'}}
            />
            <Stack.Screen
              name="EmailVerify"
              component={EmailVerify}
              options={{title: 'EmailVerify'}}
            />
            <Stack.Screen
              name="Verified"
              component={Verified}
              options={{title: 'Verified'}}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{title: 'SignIn'}}
            />
            <Stack.Screen
              name="Notifs"
              component={Notifs}
              options={{title: 'Notifs'}}
            />
            <Stack.Screen
              name="IamA"
              component={IamA}
              options={{title: 'IamA'}}
            />
            <Stack.Screen
              name="LookingFor"
              component={LookingFor}
              options={{title: 'LookingFor'}}
            />
            <Stack.Screen
              name="Myname"
              component={Myname}
              options={{title: 'Myname'}}
            />
            <Stack.Screen
              name="Mybirthday"
              component={Mybirthday}
              options={{title: 'Mybirthday'}}
            />
            <Stack.Screen
              name="MyLocation"
              component={MyLocation}
              options={{title: 'MyLocation'}}
            />
            <Stack.Screen
              name="Mygender"
              component={Mygender}
              options={{title: 'Mygender'}}
            />
            <Stack.Screen
              name="Disability"
              component={Disability}
              options={{title: 'Disability'}}
            />
            <Stack.Screen
              name="Myethnicity"
              component={Myethnicity}
              options={{title: 'Myethnicity'}}
            />
            <Stack.Screen
              name="Mysexuality"
              component={Mysexuality}
              options={{title: 'Mysexuality'}}
            />
            <Stack.Screen
              name="MyInterests"
              component={MyInterests}
              options={{title: 'MyInterests'}}
            />
            <Stack.Screen
              name="InclusionSurvey"
              component={InclusionSurvey}
              options={{title: 'InclusionSurvey'}}
            />
            <Stack.Screen
              name="AddPhotos"
              component={AddPhotos}
              options={{title: 'AddPhotos'}}
            />
            <Stack.Screen
              name="InclusivityAgreement"
              component={InclusivityAgreement}
              options={{title: 'InclusivityAgreement'}}
            />
           {/* <Stack.Screen
              name="MyProfile"
              component={MyProfile}
              options={{title: 'MyProfile'}}
           />

            <Stack.Screen
              name="Explore"
              component={Explore}
              options={{title: 'Explore'}}
            /> */}
            {/* <Stack.Screen
              name="Message"
              component={Message}
              options={{title: 'Message'}}
            />
            <Stack.Screen
              name="Calendar"
              options={{title: 'Calendar'}}
            >
            {(props) => <Calendar {...props} isUserLoading={isUserLoading} />}</Stack.Screen>
            <Stack.Screen
              name="Forum"
              options={{title: 'Forum'}}
            >
            {(props) => <Forum {...props} isUserLoading={isUserLoading} />}</Stack.Screen>
            <Stack.Screen
              name="Audiospace"
              options={{title: 'Audiospace'}}
            >{(props) => <Audiospace {...props} isUserLoading={isUserLoading} />}</Stack.Screen> */}
          {/* </> */}
            <Stack.Screen
              name="MyProfile"
              options={{title: 'MyProfile'}}
            >
            {(props) => <MyProfile {...props} isUserLoading={isUserLoading} />}
            </Stack.Screen>
            {/* <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{title: 'SignIn'}}
            /> */}
            <Stack.Screen
              name="Explore"
              options={{title: 'Explore'}}

            >
            {(props) => <Explore {...props} isUserLoading={isUserLoading} />}</Stack.Screen>
            <Stack.Screen
              name="Message"
              options={{title: 'Message'}}
            >
            {(props) => <Message {...props} isUserLoading={isUserLoading} />}</Stack.Screen>
            <Stack.Screen
              name="Calendar"
              options={{title: 'Calendar'}}
            >
            {(props) => <Calendar {...props} isUserLoading={isUserLoading} />}</Stack.Screen>
            <Stack.Screen
              name="Forum"
              options={{title: 'Forum'}}
            >
            {(props) => <Forum {...props} isUserLoading={isUserLoading} />}</Stack.Screen>
            <Stack.Screen
              name="Audiospace"
              options={{title: 'Audiospace'}}
            >{(props) => <Audiospace {...props} isUserLoading={isUserLoading} />}</Stack.Screen>
           {/* <Stack.Screen
              name="Home"
              component={LoginScreen}
              options={{title: 'Login'}}
            /> */}
          
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// };

export default StackNav;

const styles = StyleSheet.create({});
