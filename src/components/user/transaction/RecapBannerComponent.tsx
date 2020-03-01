import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface RecapBannerProps{
  iconName: string,
  backgroundColor: string,
  amount: number,
  price: string,
}

interface RecapBannerStates {}

export default class RecapBannerComponent extends React.Component<RecapBannerProps,RecapBannerStates>{
  render() 
  {
    const {iconName,backgroundColor,amount,price} = this.props;

    return (
      <View style={{flex:1,flexDirection:'row',backgroundColor:backgroundColor,paddingVertical:10,paddingHorizontal:20}}>
        <View style={{flex:2,aspectRatio:1,alignItems:'center',justifyContent:'center'}}>
          <Ionicons name={iconName} size={60} color="#fff" />
        </View>
        <View style={{flex:3,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontFamily:'product-sans-bold',fontSize:45,color:'#fff'}}>{amount} kg</Text>
        </View>
        <View style={{flex:4,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontFamily:'product-sans-bold',fontSize:20,color:'#fff'}}>Rp. {price},-</Text>
        </View>
      </View>
    )
  }
}