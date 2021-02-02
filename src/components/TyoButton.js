import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export const TyoButton = ({icon, selected, color, onPress}) => {
  return(
    <TouchableOpacity style={selected ? [{...styles.button, backgroundColor: color}] : styles.button} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 30,
  },
  selected: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 30,
  }
})