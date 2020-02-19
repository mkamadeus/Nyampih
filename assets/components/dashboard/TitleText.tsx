import React from 'react';
import { StyleSheet, Text } from 'react-native';


export default class TitleText extends React.Component
{
  render()
  {
    return(
      <Text style={styles.title}>
          Home
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: 40
  }
});