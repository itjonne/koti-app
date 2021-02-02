import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const Kuva = ({kuva, teksti}) => {
  return(
    <View style={{alignItems: 'center', padding: 10, justifyContent: 'center'}}>
      {kuva}
      <Text style={{fontSize: 40}}>{teksti.toUpperCase()}</Text>
    </View>
  )
}