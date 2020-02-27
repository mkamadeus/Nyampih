import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
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

  state = {
    email:'',
    password:'',
    rePass:'',
  }

  render (){
    return (
      <View style={styles.registerContainer}>
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

          <LoginForm
            text='PASSWORD'
            mode='password'
            value={this.state.rePass}
            placeholder='Retype Password'
            onChange={ (itemval)=>this.setState({rePass:itemval}) }
          />
        </KeyboardAvoidingView>


        <TouchableOpacity 
          style={styles.loginButton} 
          activeOpacity={0.7}
          onPress={() => this.props.onPressButton()}
          >
          <View >
            <Text style={styles.buttonText}>Register</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }

}