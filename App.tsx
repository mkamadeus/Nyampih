import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import UserNavbar from './src/components/partials/UserNavbar';
import UserHomeScreen from './src/screens/user/UserHomeScreen';
import RegisFormScreen from './src/screens/registration/RegistrationFormScreen'
import LoginScreeen from './src/screens/login/LoginScreen'
import { View } from 'react-native';

const Stack = createStackNavigator();

const fetchFont = () => {
  return Font.loadAsync({
    'product-sans-regular' : require('./assets/fonts/ProductSans-Regular.ttf'),
    'product-sans-medium' : require('./assets/fonts/ProductSans-Medium.ttf'),
    'product-sans-bold' : require('./assets/fonts/ProductSans-Bold.ttf'),
  })
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
    <View style={{flex:1}}>
      <LoginScreeen/>
    </View>
  );
};