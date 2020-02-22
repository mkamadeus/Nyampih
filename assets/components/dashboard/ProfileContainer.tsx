import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class ProfileContainer extends React.Component
{
  render() {
    return (
      <View style={styles.profileContainer}>
        <View style={{flex: 1}} />
        <View style={styles.imageContainer}>
          <Text>dwdwwd</Text>
        </View>
        <View style={{flex: 1}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    width: "100%",
    textAlign: "center",
    padding: 5
  },
  imageContainer: {
    flex: 2,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'red'
  }
})