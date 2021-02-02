import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { HillaContainer } from '../components/HillaContainer';
import { Kuva } from '../components/Kuva';
import { Colors, Styles } from '../constants';

const {width, height} = Dimensions.get('window');

export default () => {
  return(
    <SafeAreaView style={styles.container}> 
      <Kuva
        kuva={<Image style={styles.image} resizeMode='contain' source={{uri: 'http://placekitten.com/300/300'}} />} 
        teksti="Hilla"
      /> 
      <HillaContainer />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    ...Styles.container,
  },
  image: {
    height: width/2 -10,
    width: width/2 - 10,
    borderRadius: Math.round(width + height - 10) / 2,
    borderWidth: 3,
  },
})