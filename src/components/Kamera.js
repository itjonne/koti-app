import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, Alert, Modal } from 'react-native';

import { Camera } from 'expo-camera';
import { ModalCamera } from './ModalCamera';
import ImagePicker from './ImagePicker';


export const Kamera = ({setImages}) => {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [modalVisible, setModalVisible] = useState(false);
  const [imagePickerVisible, setImagePickerVisible] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);
  
  const onPress = async () => {
    return await Camera.requestPermissionsAsync();
  }

  const startCamera = async () => {
    await onPress().then(({status}) => {
      setCameraPermission(status === 'granted'); // TODO: Lue miksi tää ei toimi näin?! Miksi null?
      if (status === 'granted') {
        setModalVisible(true);
        setCameraOpen(true);
      } else {
        Alert.alert("Ei oikeuksia?!");
      }
    }); 
  }  

  const openCamera = () => {
    console.log("starting/closing camera");
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  const closeCamera = () => {
    setCameraOpen(false);
  }
  
  const closeModal = () => {
    setImagePickerVisible(false);
  }
  
  useEffect(() => {
    console.log(cameraOpen, modalVisible);
    /*
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
    */
  }, []);  

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
      <View>
        <TouchableOpacity style={{height: 50, width: 50}} onPress={() => setImagePickerVisible(true)}>
          <Text>ImagePicker</Text>
        </TouchableOpacity>
        <Modal
      animationType="slide"
      transparent={false}
      visible={imagePickerVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
        <ImagePicker closeModal={closeModal} setImages={setImages}/>
        </Modal>
      </View>
      {
        cameraOpen 
        ? <ModalCamera closeCamera={closeCamera}type={type} modalVisible={modalVisible} setModalVisible={setModalVisible} />
        : <Text>No Camera</Text>
      }
      <View >
        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey', height: 100, width: 100, borderRadius: 50}} type={type} >
          <TouchableOpacity style={{height: 80, width: 80, borderRadius: 40, backgroundColor: 'darkgrey'}} onPress={startCamera}></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}