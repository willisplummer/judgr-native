import React from 'react';
import {
  Text
} from 'react-native';

const Link = ({ onPress, children }: { onPress: () => void, children: string }) => (
  <Text style={{color: 'blue'}} onPress={onPress}>
    {children}
  </Text>
)

export default Link
