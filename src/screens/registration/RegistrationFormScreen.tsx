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

export default class RegisFormScreen extends React.Component {
  state = {
    fullName : '',
    dateBirth : '',
    phone : '',
    adress : '',
    instance : '-Pilih-',
  }

  render () {
    let pickerVal
    return  (
      <ScrollView style={style.Container}>
        <KeyboardAvoidingView behavior='position'>
        <View>
          <Text style={[style.mediumText,{fontWeight:'bold'}]}>Formulir</Text>
          <Text style={[style.mediumText,{fontWeight:'bold'}]}>Registrasi</Text>
        </View>
        
        <View style={style.formContainer}>
          <TouchableOpacity
            style={style.profilePictCont}
          >
              <View style={style.profilePict}>
                <MaterialIcons name='add-a-photo' size={70} color='#a3a3a3'/>
              </View>
          </TouchableOpacity>
            
            <CustomForm 
              Text='Nama Lengkap'
              keyType='default'
              value = {this.state.fullName}
              onChange = { (itemVal) => this.setState({fullName:itemVal})}
              placeholder ='Nama Lengkap'
            />

            <CustomForm
              Text='Tanggal Lahir'
              keyType='numeric'
              value = {this.state.dateBirth}
              onChange = { (itemVal) => this.setState({dateBirth:itemVal})}
              placeholder ='HH-MM-YY'
            />

            <CustomForm
            Text='Nomor Telepon'
            keyType='numeric'
            value = {this.state.phone}
            onChange = { (itemVal) => this.setState({phone:itemVal})}
            placeholder ='Nomor Telepon'
            />

            <CustomForm
              Text='Alamat'
              keyType='default'
              value = {this.state.adress}
              onChange = { (itemVal) => this.setState({adress:itemVal})}
              placeholder ='Alamat'
            />

            <CustomPicker 
              Text='Instansi'
              value={this.state.instance}
              label={['Kafe','Restoran','Rumah','Lainnya']}//kalo punya cara buat ngefor biar dinamic
              mode = 'dialog'
              valChange = {(itemVal)=>this.setState({instance:itemVal })}
            />           
            </View>        
          </KeyboardAvoidingView>

          <TouchableOpacity 
          onPress={()=>{}}
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