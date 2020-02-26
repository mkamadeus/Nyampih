import React from 'react'
import { 
  View, 
  Text,
  Image, 
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native'

import styles from '../../components/login/LoginStyle'
import LoginForm from '../../components/login/LoginForm'


export default class LoginScreen extends React.Component {

  state ={
    email : '',
    password : '',
  }



  render (){
    return (
      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        <KeyboardAvoidingView behavior='position' style={styles.formsContainer}>

          <LoginForm
            text='EMAIL'
            mode='email-address'
            value={this.state.email}
            placeholder='Email'
            onChange={ (itemval)=>this.setState({email:itemval}) }
          />

          <LoginForm
            text='PASSWORD'
            mode='password'
            value={this.state.password}
            placeholder='Password'
            onChange={ (itemval)=>this.setState({password:itemval}) }
          />
          
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.loginButton} activeOpacity={0.7}>
          <View >
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.whiteText}>Not Registered ? </Text>
          <TouchableOpacity> 
            <Text style={styles.whiteText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }

}




