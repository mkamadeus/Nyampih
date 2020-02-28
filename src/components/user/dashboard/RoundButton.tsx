import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

interface RoundButtonProps {
  onPress: Function;
  buttonColor: string;
  iconName: string;
}

interface RoundButtonState {}

export default class extends React.Component<RoundButtonProps,RoundButtonState>
{
  constructor(props){
    super(props);
  }

  render() {
    const {onPress,buttonColor,iconName} = this.props;

    return (
      <View style={{flex:1,aspectRatio:1}}>
        <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor: buttonColor, borderRadius:500,padding:5,elevation:4}} onPress={onPress}>
          <Ionicons name={iconName} size={40} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }
}