import React from 'react';
import { 
  ScrollView,
  Text,
  View, 
  KeyboardAvoidingView, 
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import ImagePicker from 'react-native-image-picker'

import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import CustomForm from '../../components/partials/Form'
import CustomPicker from '../../components/partials/CustomPicker'
import { BaseRouter } from '@react-navigation/native';

export default class Profile extends React.Component {
  state = {
    fullName : this.props.stateForm.fullName,
    phone : this.props.stateForm.phone,
    address : this.props.stateForm.address,
  }
  
  render () {
    let pickerVal
    return  (
      <ScrollView style={style.Container}>
        <KeyboardAvoidingView behavior='position'>
        <View>
          <Text style={[style.mediumText,{fontWeight:'bold'}]}>Halaman</Text>
          <Text style={[style.mediumText,{fontWeight:'bold'}]}>Profile</Text>
        </View>
        
        <View style={style.formContainer}>
          <TouchableOpacity
            style={style.profilePictCont}
          >
              <View style={style.profilePict}>
                <MaterialIcons name='person' size={70} color='#a3a3a3'/>
              </View>
          </TouchableOpacity>
            
            <CustomForm 
              Text='Nama Lengkap'
              value = {this.state.fullName}
              edit={false}
              align='center'
            />
            
            <CustomForm
            Text='Nomor Telepon'
            value = {this.state.phone}
            edit={false}
            align='center'
            />

            <CustomForm
              Text='Alamat'
              value = {this.state.address}
              edit={false}
              align='center'
            />
            </View>        
          </KeyboardAvoidingView>

          <TouchableOpacity 
          onPress={()=>{this.props.onPressButton()}}
          style={{height : 100, justifyContent : 'center',alignContent:'center'}}>
            <View 
            style={[style.button,
            {
            position : 'relative',
            top : -30,
            left : 260}]}>
              <Ionicons name="ios-arrow-forward" size={70}  style={style.icon} />
            </View>
          </TouchableOpacity>
      </ScrollView>
    )
  }
}

const style = StyleSheet.create ({
  Container : {
    flex :1,
    padding : 10,
    backgroundColor : '#fff',
  },
  formContainer : {
    flex :1,
    padding : 20,
    alignContent: 'center',
    alignItems : 'center',
    backgroundColor : '#fff',
  },
  profilePictCont : {
    padding : 20,
    paddingTop : 10,
  },
  profilePict : {
    width : 150,
    height : 150,
    borderRadius : 75,
    elevation : 4,
    backgroundColor : '#F3F3F3',
    justifyContent : 'center',
    alignItems : 'center'
  }, 
  mediumText : {
    fontSize : 38,
  },
  button : {
    justifyContent:'center',
    alignContent : 'center',
    marginTop : 40,
    backgroundColor : '#f3f3f3',
    flexDirection : 'row',
    height : 70,
    width : 70,
    borderRadius : 35,
    elevation : 4,
  },
  icon : {
    color : '#FC5667',
  }
})