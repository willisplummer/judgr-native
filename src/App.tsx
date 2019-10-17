/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from 'src/screens/Login';
import SignupScreen from 'src/screens/Signup';
import HomeScreen from 'src/screens/Home';
import AuthLoadingScreen from 'src/screens/AuthLoading';

const AuthStack = createStackNavigator({
  Login: {screen: LoginScreen},
  Signup: {screen: SignupScreen},
});
const AppStack = createStackNavigator({
  Home: HomeScreen
})

const App = createAppContainer(
  createSwitchNavigator({
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);

export default App;
