import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UserHomeScreen from './src/screens/user/UserHomeScreen';

const navigator = createStackNavigator(
  {
    UserHome: UserHomeScreen,
  },
  {
    initialRouteName: 'UserHome',
    headerMode: 'none'
  }
);

export default createAppContainer(navigator);