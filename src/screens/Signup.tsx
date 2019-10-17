/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';
import TextInput from 'src/components/TextInput'
import Button from 'src/components/Button'
import Link from 'src/components/Link'

const Login = ({ navigation }: { navigation: { navigate: (target: string, props?: object) => void } }) => (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>JUDGR Signup</Text>
        <TextInput placeholder="email"/>
        <TextInput placeholder="username"/>
        <TextInput placeholder="password" secureTextEntry/>
        <Button onPress={() => navigation.navigate('Home')}><Text>Create Account</Text></Button>
        <Link onPress={() => navigation.navigate('Login')}>Log in!</Link>
      </SafeAreaView>
    </>
);

export default Login;
