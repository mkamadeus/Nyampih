import React from 'react'
import { StyleSheet, StatusBar } from 'react-native'

const styles = StyleSheet.create ({
  container : {
    flex : 1,
    backgroundColor : '#07CBC9',
    paddingTop : StatusBar.currentHeight,
  },
  registerContainer : {
    flex : 1,
    justifyContent : 'center',
    backgroundColor : '#07CBC9',
    paddingTop : StatusBar.currentHeight,
  },
  logoContainer : {
    width : 200,
    height : 200,
    borderRadius : 100,
    backgroundColor : '#07CBC9',
    alignSelf : 'center',
    margin : 40,
    elevation : 10,    
  },
  logo : {
    width : 200,
    height : 200,
    borderRadius : 100,
  },
  formArea : {
    alignSelf : 'center',
    padding: 10,
    fontFamily : 'product-sans-medium',
    fontSize : 16,
  },
  formsContainer : {
    alignItems : 'center',
    padding :20,
  },
  formBox : {
    height : 50,
    width : 280,
    borderRadius : 20,
    elevation : 10,
    alignContent : 'center',
    paddingHorizontal : 30,
    backgroundColor : '#f3f3f3',
  }, 
  textHeader : {
    fontFamily : 'product-sans-bold',
    fontSize : 26,
    color : '#fdd800',
    letterSpacing : 6,
    marginBottom : 2,
  },
  loginButton : {
    marginTop : 55,
    backgroundColor : '#FDD800',
    height : 40,
    width : 100,
    borderRadius : 30,
    elevation : 4,
    alignSelf : 'center',
    alignItems : 'center',
    justifyContent : 'center',
  },
  buttonText : {
    fontFamily : 'product-sans-bold',
    fontSize : 20,
    color : '#FC5667',
  },
  textContainer : {
    flexDirection : 'row',
    padding : 30,
    alignSelf : 'center'
  },
  whiteText : {
    fontFamily : 'product-sans-bold',
    color : '#fff',
    fontSize : 16,
  },
  
})

export default styles