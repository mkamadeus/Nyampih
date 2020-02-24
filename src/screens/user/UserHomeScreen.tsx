import React from 'react';
import {View, Text, StyleSheet,  ScrollView, Image} from 'react-native';
import ProfileComponent from '../../components/user/dashboard/ProfileComponent';
import ProfileBanner from '../../components/user/dashboard/ProfileBanner'

export default class UserHomeScreen extends React.Component
{

  render() {

    return (
      <ScrollView style={{flex:1,backgroundColor:'#fff'}}>
        <View style={styles.contentContainer}>
          <ProfileComponent gender={"M"}/>
          <View style={styles.profileContainer}>
            <ProfileBanner titleText="You've collected" bannerColor="#07CBC9" iconContainer="#FDD800" iconColor="#BEA92B" amount={7.9} lore="kg of trash!"/>
          </View>
          <View style={styles.profileContainer}>
            <ProfileBanner titleText="You have" bannerColor="#FC5667" iconContainer="#FDD800" iconColor="#BEA92B" amount={817} lore="eco- points!" />
          </View>
          <View style={styles.subcontainer}>
            <Text>Pizza 1</Text>
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
  profileContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'80%',
    paddingHorizontal:2,
    paddingVertical:10  
  },
  subcontainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    width: '80%',
  }
})