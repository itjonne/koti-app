import React, {useState} from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import { Kamera } from "../components/Kamera";
import { KuvaGalleria } from '../components/KuvaGalleria';

export default Galleria = () => {
  const [images, setImages] = useState([]);

  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 2}}>
        <KuvaGalleria images={images} setImages={setImages}/>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Kamera setImages={setImages}/>
      </View>
    </SafeAreaView>
  )
}