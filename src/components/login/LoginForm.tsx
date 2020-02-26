import React from 'react'
import {
  View,
  Text,
  TextInput,
} from 'react-native'
import styles from './LoginStyle'



const LoginForm = (props) =>  {
  let mode = props.mode
  if(mode=='password') {
    return (
      <View style={styles.formsContainer}>
        <Text style={styles.textHeader}>{props.text}</Text>
        <View style={styles.formBox}>
          <TextInput
            style={styles.formArea}
            keyboardType='default'
            secureTextEntry = {true}
            value={props.value}
            placeholder={props.placeholder}
            onChangeText={(itemVal)=>(props.onChange(itemVal))}
          />
        </View>
      </View>   
    ) 
  }
  else {
    return (
      <View style={styles.formsContainer}>
        <Text style={styles.textHeader}>{props.text}</Text>
        <View style={styles.formBox}>
          <TextInput
            style={styles.formArea}
            keyboardType={props.mode}
            value={props.value}
            placeholder={props.placeholder}
            onChangeText={(itemVal)=>(props.onChange(itemVal))}
          />
        </View>
      </View>
    )
  }
}

export default LoginForm