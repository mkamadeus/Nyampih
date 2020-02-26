import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class UserHomeScreen extends React.Component
{
  render() 
  {
    return (
      <ScrollView style={{flex:1}}>
        <View style={styles.contentContainer}>
          <View style={styles.jumbotron}>
            <View style={{flex:0.8,justifyContent:'center',padding:5}}>
              <Text style={{fontFamily: 'product-sans-bold',color:'#fff',fontSize:25}}>Home</Text>
            </View>
            <View style={{flex:2,justifyContent:'center', alignItems:'center', padding:5}}>
              <View style={{backgroundColor:'#E8E8E8',aspectRatio:1,flex:1,borderRadius:500,alignItems:'center',justifyContent:'center'}}>
                <Ionicons name="md-cafe" size={60} style={{color:'#BDBDBD'}} />
              </View>
            </View>
            <View style={{flex:2, alignItems:'center'}}>
              <Text style={{paddingVertical:5,fontFamily:'product-sans-bold',fontSize:25,letterSpacing:0.3,color:'#fff'}}>UPNORMAL COFFEE</Text>
              <View style={{flex:1,paddingVertical:5}}>
                <Text style={{color:'#fff',fontFamily:'product-sans-regular',letterSpacing:0.3,textAlign:'center'}}>Jln. Pisang Goreng Tepung No. 3</Text>
                <Text style={{color:'#fff',fontFamily:'product-sans-regular',letterSpacing:0.3,textAlign:'center'}}>Kecamatan Pohon Pisang</Text>
                <Text style={{color:'#fff',fontFamily:'product-sans-regular',letterSpacing:0.3,textAlign:'center'}}>Kota Banana Split</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jumbotron: {
    flex:1,
    width:'100%',
    backgroundColor: '#FC5667',
    alignContent:'center',
    justifyContent:'center',
    height:400,
    padding:20,
  }
});