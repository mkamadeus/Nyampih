import React from 'react';
import { 
  ScrollView,
  Text,
  View, 
  KeyboardAvoidingView, 
  StyleSheet,
  Picker
} from 'react-native';

import CustomForm from './Form'
import CustomPicker from './CustomPicker'
import styles from './Form'
import { TouchableOpacity } from 'react-native-gesture-handler';

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
          <Text style={style.mediumText}>Formulir</Text>
          <Text style={style.mediumText}>Registrasi</Text>
        </View>
        
        <View style={style.formContainer}>

          <View style={style.profilePictCont}>
            <View style={style.profilePict}></View>
          </View>

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

          <TouchableOpacity style={{height : 140}}>
          <View style={style.button}>
            <View style={style.sampleButton}></View>
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
    backgroundColor : '#FFF',
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
    backgroundColor : 'yellow'
  }, 
  mediumText : {
    fontSize : 38,
  },
  button : {
    marginTop : 40,
    position : 'relative',
    top : -30,
    left : 120,
    flexDirection : 'row',
    alignSelf : 'center' 
  },
  sampleButton : {
    width : 100,
    height : 100,
    borderRadius : 50,
    backgroundColor : 'yellow'
  }
})