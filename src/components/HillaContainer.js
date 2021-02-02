import React, {useContext} from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { RuokaAika } from '../components/RuokaAika';
import { HomeContext } from '../util/HomeContext';
import { Tyo } from '../components/Tyo';

export const HillaContainer = () => {
  const {
    aamuRuoka,
    paivaRuoka,
    iltaRuoka,
    hiekka,
    setAamuRuoka,
    setPaivaRuoka,
    setIltaRuoka,
    setHiekka,
  } = useContext(HomeContext);

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.center}>Hillan ruokailut:</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 20}}>
          <RuokaAika 
            nimi="Aamu" 
            annettu={aamuRuoka}
            icon={<Feather name="sunrise" size={24} color="black" />}
            onPress={() => setAamuRuoka(!aamuRuoka)} 
          />
          <RuokaAika 
            nimi="Päivä" 
            annettu={paivaRuoka}
            icon={<Feather name="sun" size={24} color="black" />}
            onPress={() => setPaivaRuoka(!paivaRuoka)}  
          />
          <RuokaAika 
            nimi="Ilta" 
            annettu={iltaRuoka}
            icon={<Feather name="sunset" size={24} color="black" />} 
            onPress={() => setIltaRuoka(!iltaRuoka)} 
          /> 
        </View>
        <Text style={styles.center}>Hillan Hiekat:</Text>
        <View >
        <Tyo 
          nimi="Hiekan putsaus"
          tilanne={hiekka}
          onPress={setHiekka}/>
        </View>         
      </View>  
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  center: {
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 10,
  },
  border: {
    padding: 10,
  }
})