import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { TyoButton } from './TyoButton';
import { Colors } from '../constants';

export const TyoButtons = ({tilanne, onPress}) => {
  return(
    <View style={styles.container}>
      <TyoButton 
        icon={<Feather name="check" size={30} color="black" />} 
        color={Colors.vihrea}
        selected={tilanne == 0} 
        onPress={() => onPress(0)}/>
      <TyoButton 
        icon={<AntDesign name="warning" size={30} color="black" />} 
        color={Colors.keltainen}
        selected={tilanne == 1}
        onPress={() => onPress(1)}/>
      <TyoButton 
        icon={<Feather name="x" size={30} color="black" />} 
        color={Colors.punainen}
        selected={tilanne == 2}
        onPress={() => onPress(2)}/>                
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
})