import React, { useState } from 'react';
import {View, Text, StyleSheet,  StatusBar} from 'react-native';
import Constants from 'expo-constants';


export default class UserHomeScreen extends React.Component
{

  render() {

    return (
      <View style={{flex:1}}>
        <View style={styles.container}>
          <View style={styles.subcontainer}>
            <Text style={{fontFamily: 'product-sans-bold',fontSize:72}}>Pizza 1</Text>
          </View>
          <View style={styles.subcontainer}>
            <Text>Pizza 1</Text>
          </View>
          <View style={styles.subcontainer}>
            <Text>Pizza 1</Text>
          </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'violet'
  },
  subcontainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    width: '80%'
  }
})