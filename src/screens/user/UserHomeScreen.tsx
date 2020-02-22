import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default class UserHomeScreen extends React.Component
{

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Text>Pizza 1</Text>
        </View>
        <View style={styles.subcontainer}>
          <Text>Pizza 1</Text>
        </View>
        <View style={styles.subcontainer}>
          <Text>Pizza 1</Text>
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
    margin:50,
    width: '80%'
  }
})