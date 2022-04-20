/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  RefreshControl,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import StackNav from './components/StackNav';
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (

//   );
// };
import {Auth, Hub, DataStore} from 'aws-amplify';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import {
  withAuthenticator,
  Authenticator,
  SignIn,
} from 'aws-amplify-react-native';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const App = () => {
  const [isUserLoading, setisUserloading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  useEffect(() => {
    const listener = Hub.listen('datastore', async hubData => {
      const {event, data} = hubData.payload;
      if (event === 'modelSynced' && data.model.name === 'User') {
        console.log(`User model has synced!!`);
        setisUserloading(false);
      }
      // await DataStore.start()

      return () => listener();
    });
  }, []);
  return (
    <View
      style={{flexGrow: 1}}
      >
      <StackNav isUserLoading={isUserLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const signUpConfig = {
  header: 'My Customized Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'My username',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password',
    },
    {
      label: 'PhoneNumber',
      key: 'phone_number',
      required: true,
      displayOrder: 3,
      type: 'string',
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 4,
      type: 'string',
    },
  ],
};
const usernameAttributes = 'My user name';

export default App
//   {
//     signUpConfig,
//     usernameAttributes,
//   },
// );

// {
//   signUpConfig,
//   usernameAttributes
// })
