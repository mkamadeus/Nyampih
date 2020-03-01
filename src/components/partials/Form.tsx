import React from 'react'
import { 
  View, 
  StyleSheet, 
  TextInput, 
  Text 
} from 'react-native'


const CustomForm = (props) => {

  return (
    <View>
      <View style={styles.formContainer}>
        <Text style={styles.titleText}>{props.Text}</Text>
        <View style = {styles.formBox}>
          <TextInput
            style = {[styles.formArea,{textAlign: props.align}]}
            keyboardType = {props.keyType} 
            value = {props.value}
            onChangeText = {(itemVal) => props.onChange(itemVal)}
            placeholder = {props.placeholder}
            editable = {props.edit}
          />
        </View>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  formContainer : {
    alignItems:'center',
    padding : 5,
  },
  formBox : {
    backgroundColor : '#F3F3F3',
    width : 300,
    height : 40,
    borderRadius : 7,
    paddingHorizontal : 20,
    marginTop : 10,
    elevation : 4,

  },
  titleText :{ 
    fontSize : 26,
    color : '#fdd800',
    fontFamily: 'product-sans-bold',
  },
  formArea : {
    height : 40,
    fontFamily: 'product-sans-bold',
  },
  childContainer : {
    fontSize : 26,
    fontFamily: 'product-sans-bold',
  }
})


export default CustomForm