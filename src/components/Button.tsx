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
  TouchableOpacity
} from 'react-native';

const Button = ({ children, onPress }: {children: any, onPress: (args: any) => void }) =>
  <TouchableOpacity style={styles.button} onPress={onPress}>{children}</TouchableOpacity>

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "blue",
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'red'
  },
});
