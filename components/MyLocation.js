// screens/AddUserScreen.js
import React, {Component, useState} from 'react';
import {IconButton, Colors} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
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
} from 'react-native';
import states from '../data/states.json'
// import RNLocation from 'react-native-location';

const Mylocation = props => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(states);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>My Location</Text>
        <Text style={styles.subHeading}>
          Find your current city. You’re able to change this at any time.
        </Text>
        {/* <DropDownPicker
          style={{
            borderWidth: 0,
            backgroundColor: 'transparent',
            marginTop: 40,
            borderBottomWidth: 2,
            borderColor:'#30467B'
          }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          showBadgeDot={false}
          theme="LIGHT"
          multiple={false}
          mode="BADGE"
          badgeColors={['#e76f51','#00b4d8','#e9c46a','#e76f51','#8ac926','#00b4d8','#e9c46a']}
        /> */}
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={{backgroundColor: 'transparent', borderWidth: 0, marginTop: 40, borderBottomWidth: 2, borderBottomColor:'#30467B'}}
        />
        <View style={{position: 'absolute', bottom: '10%', right: 0}}>
          <IconButton
            style={{backgroundColor: 'lightgray', width: 80, height: 45}}
            icon="arrow-right"
            color={Colors.white}
            size={40}
            onPress={() => {
              //   uncomment the alert when data is connected
              // alert('Please insert your name before continuing');
              props.route.params.location = value
              props.navigation.navigate('Mygender', props.route.params);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    margin: 20,
    height: '100%',
  },
  heading: {
    fontSize: 36,
    color: '#30467B',
    fontWeight: '600',
    // position: "absolute",
    // top: '20%',
    marginBottom: 10,
    marginTop: '50%',
  },
  subHeading: {
    color: '#30467BCC',
    fontSize: 12,
  },
  input: {
    marginTop: '30%',
    borderBottomWidth: 1,
    borderBottomColor: '#30467B',
  },
});
export default Mylocation;
