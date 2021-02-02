import React, {useEffect} from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Colors } from '../constants';
import { onkoAntamatta } from '../util/laskeRuokaAika';

export const RuokaAika = ({nimi, annettu, icon, onPress}) => {
  let antamatta = false;
  useEffect(() => {
    console.log("Hilla useeffect")
    const tunti = new Date().getHours();
    antamatta = onkoAntamatta(tunti, nimi);
  })

  return(
    <TouchableOpacity style={annettu ? styles.annettu : ( antamatta ? styles.eiAnnettu : styles.antamatta) } onPress={onPress}>
      <Text style={styles.text}>{nimi}</Text>
      {icon}
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  annettu: {
    backgroundColor: Colors.vihrea,
    alignItems: 'center',
    paddingBottom: 10,
    width: 70,
  },
  eiAnnettu: {
    backgroundColor: Colors.punainen,
    alignItems: 'center',
    paddingBottom: 10,
    width: 70,
  },
  antamatta: {
    backgroundColor: Colors.keltainen,
    alignItems: 'center',
    paddingBottom: 10,
    width: 70,
  },
  text: {
    padding: 10,
    fontSize: 16
  }
})