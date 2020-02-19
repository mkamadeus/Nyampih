import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import TitleText from './assets/components/dashboard/TitleText';
import ProfilePicure from './assets/components/dashboard/ProfilePicture';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TitleText />
        </View>
        <View>
          <ProfilePicure />
        </View>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F',
    paddingVertical: 50,
    paddingHorizontal:20
  },
});
