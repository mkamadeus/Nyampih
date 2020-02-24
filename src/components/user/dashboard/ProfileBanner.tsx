import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface BannerProps {
  bannerColor: string,
  iconContainer: string,
  iconColor: string,
  titleText: string,
  amount: number,
  lore: string
};

interface BannerState {

}

export default class ProfileBanner extends React.Component<BannerProps, BannerState>
{

  render()
  {
    const {titleText, bannerColor, iconContainer, iconColor, amount, lore} = this.props;

    return (
      <View style={[styles.bannerContainer, {backgroundColor: bannerColor}]}>
        <View style={[styles.iconContainer, {backgroundColor: iconContainer}]}>
          <Ionicons name="md-trash" size={60} style={{color: iconColor}} />
        </View>
        <View style={styles.verdictContainer}>
          <Text style={styles.titleText}>{titleText}</Text>
          <View style={styles.amountContainer}>
            <Text style={styles.amountText}>{amount}</Text>
    <Text style={styles.kgText}>{lore}</Text>
          </View>
        </View>
      </View>
    )  
  }

  
}

const styles = StyleSheet.create({
  bannerContainer: {
    flex:1,
    alignSelf:'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding:10,
    borderRadius:10,
  },
  iconContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    margin:10,
    borderRadius:500,
    aspectRatio:1,
    elevation:5
  },
  verdictContainer: {
    flex:2.3,
    justifyContent:'center',
    padding:10,
  },
  titleText: {
    fontFamily: 'product-sans-bold',
    fontSize:20,
    textAlign:'right',
    color:'#fff',
    letterSpacing: 0.3
  },
  amountContainer: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    paddingHorizontal:10,
  },
  amountText: {
    fontFamily:'product-sans-bold',
    fontSize: 50,
    paddingHorizontal: 10,
    textAlign:"right",
    color:'#fff'
  },
  kgText: {
    fontFamily: 'product-sans-bold',
    width:45,
    textAlign:'right',
    color:'#fff',
    paddingHorizontal: 1
  }
});