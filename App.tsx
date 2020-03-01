import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import UserNavbar from './src/components/partials/UserNavbar'
import UserHomeScreen from './src/screens/user/UserHomeScreen'
import RegisFormScreen from './src/screens/registration/RegistrationFormScreen'
import LoginScreeen from './src/screens/login/LoginScreen'
import RegisterScreen from './src/screens/register/RegisterScreen'
import ProfileScreen from './src/screens/profile/ProfileScreen'

import { View, Switch } from 'react-native';



const fetchFont = () => {
  return Font.loadAsync({
    'product-sans-regular' : require('./assets/fonts/ProductSans-Regular.ttf'),
    'product-sans-medium' : require('./assets/fonts/ProductSans-Medium.ttf'),
    'product-sans-bold' : require('./assets/fonts/ProductSans-Bold.ttf'),
  })
}

const Stack = createStackNavigator();

function LoginRegister() {
  return (
    <Stack.Navigator
      initialRouteName = 'Login'
      headerMode = 'none'
    >
      <Stack.Screen 
        name='Login'
        component={LoginScreenRoute}
      />
      <Stack.Screen
        name='Register'
        component={RegisterScreenRoute}
      />
    </Stack.Navigator>
  )
}

function LoginScreenRoute({ navigation }) {
  return (
    <LoginScreeen onPressButton={()=>navigation.navigate('LoginRegister',{screen : 'Register'})} />
  )
}

function RegisterScreenRoute ({ navigation }) {
  return (
    <RegisterScreen onPressButton={()=>navigation.navigate('RegistrationForm')}/>
  )
}

function RegisFormScreenRoute ({ navigation }) {
  let formState
  return (
    <RegisFormScreen onPressButton={(itemState)=>navigation.navigate('ProfileScreen',itemState)}/>
  )
}

function ProfileRoute ({ navigation, route }) {
  return (
    <ProfileScreen stateForm={route.params} onPressButton={()=>navigation.navigate('HomeScreen')}/>
  )
}

function HomeRoute ({ navigation, route }) {
  return (
    <UserHomeScreen/>
  )
}


export default function App() {
  const [dataLoaded, setDataLoaded] = React.useState(false);

  if(!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={()=> setDataLoaded(true)}
      />
    );
  }
  
    return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = 'LoginRegister'
        headerMode = 'screen' 
      >
        <Stack.Screen 
          name='LoginRegister'
          component={LoginRegister}
          options={{
            headerShown : false,
          }} 
        />
        <Stack.Screen
          name='RegistrationForm'
          options={{
            headerTitle :'Formulir Registrasi'
          }}
          component={RegisFormScreenRoute}
        />
        <Stack.Screen
          name='ProfileScreen'
          options={{
            headerTitle :'Profile'
          }}
          component={ProfileRoute}
        />
        <Stack.Screen
          name='HomeScreen'
          options={{
            headerTitle :'Home'
          }}
          component={HomeRoute}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}