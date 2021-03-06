import React, {Component} from 'react';
import {IconButton, Colors} from 'react-native-paper';
import {
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text,
  Modal,
  Image,
  Alert
} from 'react-native';
import ScrollPicker from 'react-native-wheel-scroll-picker';
import moment from 'moment';
class Birthday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: '',
      modalVisible: false,
      age: 19,
      month: '',
      birthday: 'February 2, 2003',
      year: '',
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      days: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
      years: [
        '2004',
        '2003',
        '2002',
        '2001',
        '2000',
        '1999',
        '1998',
        '1997',
        '1996',
        '1995',
        '1994',
        '1993',
        '1992',
        '1991',
        '1990',
        '1989',
        '1988',
        '1987',
        '1986',
        '1985',
        '1984',
        '1983',
        '1982',
        '1981',
        '1980',
        '1979',
        '1978',
        '1977',
        '1976',
        '1975',
        '1974',
        '1973',
        '1972',
        '1971',
        '1970',
        '1969',
        '1968',
        '1967',
        '1966',
        '1965',
        '1964',
        '1963',
        '1962',
      ],
      reverseYear: [
        '2004',
        '2003',
        '2002',
        '2001',
        '2000',
        '1999',
        '1998',
        '1997',
        '1996',
        '1995',
        '1994',
        '1993',
        '1992',
        '1991',
        '1990',
        '1989',
        '1988',
        '1987',
        '1986',
        '1985',
        '1984',
        '1983',
        '1982',
        '1981',
        '1980',
        '1979',
        '1978',
        '1977',
        '1976',
        '1975',
        '1974',
        '1973',
        '1972',
        '1971',
        '1970',
        '1969',
        '1968',
        '1967',
        '1966',
        '1965',
        '1964',
        '1963',
        '1962',




        
      ]
  
    };
  }

  reverseYear(){
    this.state.years.reverse()
    this.setState({reverseYear: this.state.years.reverse() })
  }
  async editBirthday() {
    if (this.state.birthday) {
      this.props.navigation.navigate('MyLocation');
      // console.log('next')
    } else {
      Alert.alert('Please include your date of Birth');
    }
  }

  setAge() {
    if (
      this.state.day.length &&
      this.state.month.length &&
      this.state.year.length
    ) {
      
      this.state.birthday =
        this.state.month + ' ' + this.state.day + ', ' + this.state.year;
      //   const age =
      // (new Date() - new Date(this.state.birthday).getTime()) / 3.15576e10;
      //   this.state.age = Math.floor(age);

      this.state.birthday = new Date(
        this.state.month + ' ' + this.state.day + ', ' + this.state.year,
      ).toLocaleDateString();
      let from = moment(new Date(this.state.birthday).toDateString()).format(
        'YYYY-MM-DD',
      );
      let today = new Date();
      let nowyear = today.getFullYear();
      //    let nowmonth = today.getMonth();
      //    let nowday = today.getDate();

      let birthyear = new Date(from).getFullYear();

      const years = moment().diff(new Date(from), 'years');
      //   console.log(years);
      this.state.age = years;
      return years;
    } else {
      return this.state.age
    }
  }

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <View style={styles.container1}>
        <Text style={styles.TopicTitle}>My Birthday is</Text>
        {/* <View style={styles.inputGroup}> */}
        {/* <BirthdayPicker /> */}
        <View style={styles.container}>
          <ScrollPicker
            style={styles.MPicker}
            dataSource={this.state.months}
            selectedIndex={1}
            renderItem={(data, index, isSelected) => {
              //
            }}
            onValueChange={(data, selectedIndex) => {
              //
              this.setState({month: data});
              
            }}
            wrapperHeight={180}
            wrapperWidth={150}
            wrapperBackground={'transparent'}
            itemHeight={60}
            highlightColor={'#D9CEFB'}
            highlightBorderWidth={2}
            activeItemColor={'#30467B'}
            itemColor={'#D9CEFB'}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              
              this.setModalVisible(!this.state.modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  style={{position: 'absolute', right: 20, top: 10}}>
                  <Text
                    style={{fontSize: 30, fontWeight: '500', color: '#A58CF5'}}
                    onPress={() => this.setModalVisible(false)}>
                    x
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '600',
                    color: '#30467B',
                    marginBottom: 10,
                  }}>
                  Let???s double check!
                </Text>
                <Text style={{textAlign: 'center', color: '#8390B0'}}>
                  Please confirm the birthday you chose as it cannot be changed
                  later.
                </Text>
                <Text
                  style={{
                    marginTop: 20,
                    color: '#7F5AF0',
                    fontWeight: '600',
                    fontSize: 20,
                  }}>
                  {this.state.birthday}
                </Text>
                {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!this.state.modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 10,
                    fontWeight: 'bold',
                    color: '#30467B',
                    fontSize: 20,
                  }}>
                  Age: {this.state.age}
                </Text>
                <TouchableOpacity
                  style={styles.button2}
                  onPress={() => {
                    this.setModalVisible(false), this.editBirthday();
                    this.props.navigation.navigate('MyLocation', this.props.route.params)
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontSize: 18,
                    }}>
                    Confirm
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <ScrollPicker
            style={styles.DPicker}
            dataSource={this.state.days}
            selectedIndex={1}
            renderItem={(data, index, isSelected) => {
              //
            }}
            onValueChange={(data, selectedIndex) => {
              //
              this.setState({day: data});
            }}
            wrapperHeight={180}
            wrapperWidth={150}
            wrapperBackground={'transparent'}
            itemHeight={60}
            highlightColor={'#D9CEFB'}
            highlightBorderWidth={2}
            activeItemColor={'#30467B'}
            itemColor={'#D9CEFB'}
          />

          <ScrollPicker
            style={styles.YPicker}
            dataSource={this.state.reverseYear}
            selectedIndex={1}
            renderItem={(data, index, isSelected) => {
              //
            }}
            onValueChange={(data, selectedIndex) => {
              //
              this.setState({year: data});
              // console.log(data, selectedIndex)
            }}
            wrapperHeight={180}
            wrapperWidth={150}
            wrapperBackground={'transparent'}
            itemHeight={60}
            highlightColor={'#D9CEFB'}
            highlightBorderWidth={2}
            activeItemColor={'#30467B'}
            itemColor={'#D9CEFB'}
          />
        </View>
        <Text style={styles.TopicTitleage}>Age {this.setAge()}</Text>
        <Text style={styles.TopicTitle2}>This cannot be changed later</Text>
        <View style={{position: 'absolute', bottom: 30, right: 10}}>
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
            
               //  this.setModalVisible(true);
              if (this.state.age === 0){
                Alert.alert('Please include your birth date')
              } else {
                this.setModalVisible(!this.state.modalVisible);
                this.props.route.params.age = this.state.age
                this.props.route.params.birthday = this.state.birthday
              
              }
              
              
            }}>
            <Image source={require('../assets/arrow-right.png')}></Image>
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </View>
    );
  }
}
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
    backgroundColor: '#7F5AF0',
    borderWidth: 1,
    borderRadius: 50,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 15,
    marginTop: '20%',
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
    marginTop: '20%',
    color: 'black',
  },
  inputGroup: {
    backgroundColor: '#30467B',
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
  inputGroup: {
    backgroundColor: '#30467B',
  },
  TopicTitle: {
    width: '80%',
    fontSize: 37,
    marginBottom: 40,
    fontWeight: 'bold',
    color: '#30467B',
  },
  container1: {
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
  container: {
    flexDirection: 'row',
  },
  MPicker: {
    flex: 1,
  },
  DPicker: {
    flex: 1,
  },
  YPicker: {
    flex: 1,
  },
  TopicTitleage: {
    width: '100%',
    fontSize: 37,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#30467B',
    marginLeft: '35%',
    marginTop: '30%',
  },
  TopicTitle2: {
    width: '100%',
    fontSize: 14,
    marginBottom: 40,
    fontWeight: 'bold',
    color: '#30467BCC',
    marginLeft: '0%',
    textAlign: 'center',

    // marginTop:'30%'
  },
});
export default Birthday;
