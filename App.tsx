import React from 'react'
import { View, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'

import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import CollectorNavbar from './src/components/partials/CollectorNavbar'
import CollectorHomeScreen from './src/screens/collector/CollectorHomeScreen'
import UserHomeScreen from './src/screens/user/UserHomeScreen'
import RegisFormScreen from './src/screens/registration/RegistrationFormScreen'
import LoginScreen from './src/screens/login/LoginScreen'
import RegisterScreen from './src/screens/register/RegisterScreen'
import ProfileScreen from './src/screens/profile/ProfileScreen'
import UserTransactionScreen from './src/screens/user/UserTransactionScreen'

const fetchFont = () => {
  return Font.loadAsync({
    'product-sans-regular' : require('./assets/fonts/ProductSans-Regular.ttf'),
    'product-sans-medium' : require('./assets/fonts/ProductSans-Medium.ttf'),
    'product-sans-bold' : require('./assets/fonts/ProductSans-Bold.ttf'),
  })
}

const Stack = createStackNavigator();

function UserScreen() {
  return(
    <Stack.Navigator
      initialRouteName='UserHome'
      headerMode='none'
    >
      <Stack.Screen
        name='UserHome'
        component={UserHomeScreenRoute}
      />
      <Stack.Screen
        name='UserTransaction'
        component={UserTransactionScreenRoute}
      />
    </Stack.Navigator>
  )
}

function LoginScreenRoute({ navigation }) {
  return (
    <LoginScreeen 
      onPressButton={()=>navigation.navigate('LoginRegister',{screen : 'Register'})}
      onLogin={()=>navigation.navigate('CollectorHome')}
      />
  )}

function UserHomeScreenRoute ({navigation, route})
{
  return (
    <UserHomeScreen stateForm={route.params} nextRoute={()=>navigation.navigate('UserTransactionScreen')} />
  )
}
function UserTransactionScreenRoute ({navigation, route})
{
  return (
    <UserTransactionScreen stateForm={route.params} backFunction={()=>navigation.goBack()} />
  )
}


export default function App() {

  // Font loading check
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
        initialRouteName = 'UserHomeScreen'
        headerMode = 'none' 
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
        <Stack.Screen 
          name="CollectorHome"
          component={CollectorHomeScreen} 
          options = {{
            headerTitle: props => (
                <CollectorNavbar {...props} />
            ),
          }}
          />
          <Stack.Screen
            name='UserHomeScreen'
            component={UserHomeScreenRoute}
          />
          <Stack.Screen
            name='UserTransactionScreen'
            component={UserTransactionScreenRoute}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}