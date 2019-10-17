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
  StyleSheet,
  TextInput
} from 'react-native';

const StyledTextInput = (props: {[key: string]: any}) => <TextInput style={styles.textInput} {...props} />

export default StyledTextInput;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'silver',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});
