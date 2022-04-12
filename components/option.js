import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOption: this.props.options[0],
    };
  }
  updateActiveOption = activeOption => {
    this.setState({
      activeOption,
    });
  };
  render() {
    return (
      <View>
        {this.props.options.map((option, index) => (
          <TouchableOpacity
            style={{
              width: 163,
              borderWidth: 1.3,
              borderRadius: 50,
              borderStyle: 'solid',
              borderColor: '#7F5AF0',
              padding: 13,
              paddingLeft: 10,
              paddingRight: 10,
              textAlign: 'center',
              margin: 5,
              backgroundColor: this.state.activeOption === option ? '#7F5AF0' : 'transparent'
            }}
            onPress={() => {
              this.props.onChange(option);
              this.updateActiveOption(option);
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: this.state.activeOption === option ? 'white' : '#30467B',
              }}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default Option;
