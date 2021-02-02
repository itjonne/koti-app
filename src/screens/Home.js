import React, {useContext} from 'react';
import { StyleSheet, SafeAreaView, View, Text, Dimensions } from 'react-native';
import { Kuva } from '../components/Kuva';

import { TyoContainer } from '../components/TyoContainer';
import { Styles } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import { HomeContext } from '../util/HomeContext';

const {width, height} = Dimensions.get('window');

export default () => {
  const { isLoading } = useContext(HomeContext);

  return(
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Kuva
            kuva={<Ionicons  name="md-home-outline" size={width/2 -20} color="black" />} 
            teksti="Koti"
          />
        </View>
        { isLoading ? <Text>Loading..</Text> : <TyoContainer/>}
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
    backgroundColor: 'grey'
  },
})