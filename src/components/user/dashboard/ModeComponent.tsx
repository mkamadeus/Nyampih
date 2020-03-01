import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ModeComponentProps {
  flexSize: number,
  bgColor:string,
  fontColor:string,
  iconName:string,
}

interface ModeComponentState {

}

export default class ModeComponent extends React.Component<ModeComponentProps,ModeComponentState> {
  render()
  {
    const {flexSize, bgColor, fontColor, iconName} = this.props;

    return (
      <View style={{flex:flexSize,backgroundColor:bgColor,aspectRatio:1,alignItems:'center',justifyContent:'center',margin:5,borderRadius:500}}>
        <Ionicons name={iconName} size={50*flexSize} style={{color:fontColor}} />
      </View>
    );
  }
}