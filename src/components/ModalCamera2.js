import React, {useState, useEffect, useRef} from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

import { Toolbar } from '../components/Camera/Toolbar';

export const ModalCamera2 = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  let cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Helper functions

  const changeType = () => {
    type === Camera.Constants.Type.back
    ? setType(Camera.Constants.Type.front)
    : setType(Camera.Constants.Type.back)
  }

  const takePicture = async () => {
    if (cameraRef) {
      let photo;
      try {
        photo = await cameraRef.current.takePictureAsync();
      } catch (error) {
        console.log(error);
      } 
      console.log(photo);
    }
  };
  // End of helpers

  if (hasPermission === null) {
    return <View></View>
  } else if (hasPermission === false) {
    return <Text>No permission granted</Text>
  }
  return(
    <View style={styles.container}>
      <Camera 
        style={styles.camera} 
        type={type}
        ref={cameraRef}>    
        <Toolbar changeType={changeType} takePicture={takePicture}/>
      </Camera>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  }
})