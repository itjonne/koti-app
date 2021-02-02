import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { TyoButtons } from './TyoButtons';

export const Tyo = ({nimi, tilanne, onPress}) => {
  return(
    <View style={styles.container}>
        <Text style={styles.text}>{nimi}</Text>
        <View style={styles.right}>
          <TyoButtons tilanne={tilanne} onPress={onPress}/>  
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  right: {
    flex: 2,
    justifyContent: 'space-between',
  },
  text: {
    flex: 1,
    fontSize: 20,
  }
})