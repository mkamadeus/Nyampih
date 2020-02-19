import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class ProfilePicture extends React.Component
{
  render() {
    return (
      <View>
        <Image
          style={styles.imageStyles}
          source={require('../../images/profile_picture.jpg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyles: {
    resizeMode:'stretch',
    width: '50%',
    height: '50%'
  }
})