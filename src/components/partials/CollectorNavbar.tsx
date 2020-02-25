import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class UserNavbar extends React.Component
{
  render() {
    return( 
      <View style={styles.appbarContainer}>
        <Text style={styles.appbarText}>Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appbarContainer: {
    flex:1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30
  },
  appbarText: {
    textAlign:'center',
    fontFamily: 'product-sans-bold',
    fontSize: 30
  }
})