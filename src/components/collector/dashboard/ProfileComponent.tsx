import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

interface ProfileProps {
  gender: string;
};

export default class ProfileComponent extends React.Component<ProfileProps>
{


  render() {
    return (
      <View style={styles.profileContainer}>
        <View style={styles.profilePictureContainer}>
          <Image 
            source= {require('../../../../assets/images/profile.jpg')}
            style={styles.profilePicture} 
          />
        </View>
        <View>
          <Text style={styles.welcomeText}>{this.props.gender==="M" ? "Mr." : "Mrs."}</Text>
          <Text style={styles.nameText}>Jeho Sweg</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  profileContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    padding: 15,
  },
  profilePictureContainer: {
    padding: 15,
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  welcomeText: {
    fontFamily:'product-sans-bold',
    fontSize:15,
    textAlign:'center',
    color: '#949494'
  },
  nameText: {
    fontFamily:'product-sans-bold',
    fontSize:40,
    paddingBottom: 15,
    textAlign:'center',
    letterSpacing: 0.3
  },
})