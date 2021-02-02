import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Tyo } from '../components/Tyo';
import { HomeContext } from '../util/HomeContext';
// Tiskit
// Pyykit
// Roskat
// Siivous

export const TyoContainer = () => {
  console.log("Työcontainer uudestaan")

  const {
    tiskit,
    pyykit,
    roskat,
    siivous,
    setTiskit,
    setPyykit,
    setRoskat,
    setSiivous
  } = useContext(HomeContext);

  return(
    <View style={styles.container}>
      <View style={styles.border}>
        <Tyo 
          nimi="Tiskit:"
          tilanne={tiskit}
          onPress={setTiskit}/>
        <Tyo 
          nimi="Pyykit:"
          tilanne={pyykit}
          onPress={setPyykit}/>
        <Tyo 
          nimi="Roskat:"
          tilanne={roskat}
          onPress={setRoskat}/>
        <Tyo 
          nimi="Siivous:"
          tilanne={siivous}
          onPress={setSiivous}/>          
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  border: {
    justifyContent: 'space-evenly',
    padding: 10,
  },
  center: {
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 10,
  },
})