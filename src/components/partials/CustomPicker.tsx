import React, { Children } from 'react';
import { 
  Text,
  View, 
  Picker
} from 'react-native';

import {styles} from './Form'

const CustomPicker = (props) => {
  return (
    <View>
      <View style={styles.formContainer}>
        <Text style={styles.titleText}>{props.Text}</Text>
        <View style={styles.formBox}>
          <Picker
            itemStyle = {styles.childContainer}
            style = {styles.formArea}
            selectedValue = {props.value}
            mode={props.mode}
            onValueChange={(itemVal) =>props.valChange(itemVal)}
          >
            <Picker.Item label='Cafe' value='Cafe'/>
            <Picker.Item label='Restoran' value='Restoran' />
            <Picker.Item label='Rumah' value='Rumah' />
            <Picker.Item label='Lainnya' value='Lainnya' />
          </Picker>
        </View>
      </View>
    </View>
    
  )
}

export default CustomPicker