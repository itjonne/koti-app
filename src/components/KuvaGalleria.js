import React, {useState} from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Alert, Image, Modal } from 'react-native';

import { CachedImage } from '../components/CachedImage';
import ImagePicker from '../components/ImagePicker';

export const KuvaGalleria = ({images, setImages}) => {
  const [imagePickerVisible, setImagePickerVisible] = useState(false);
  const [index, setIndex] = useState(-1);
  /*
  let array = [];
  for (let i = 0; i < 20; i++) {
    array.push('http://placekitten.com/300/300');
  }
  */
  const onPress = () => Alert.alert('Ei toimi vielä');

  const setImage = (index) => {
    setIndex(index);
    setImagePickerVisible(true);
  }

  const changeImage = (all_images) => {
    console.log("changing", all_images);
    console.log(index);
    let array = [];
    images ? array = Array.from(images) : array = [];
    if (index >= 0) {
      (array[index] = all_images[0]);
    } 
    setImages(array);
  }

  return(
    <View style={{flex: 1,backgroundColor: 'grey'}}>
      <View style={{alignItems: 'center'}}>
        <Text>Kuvat</Text>
      </View>
      <View style={{flex: 2}}>
        <FlatList
          data={images}
          renderItem={({index, item}) => (
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'column',
                margin: 1
              }}
              onPress={() => setImage(index)}>
              <Image
                style={styles.imageThumbnail}
                cacheKey={index.toString()}
                source={{uri: item}}
              />
            </TouchableOpacity>
          )}
          //Setting the number of column
          numColumns={4}
          keyExtractor={(item, index) => index}
        />
        {/*
        <CachedImage
          source={{ uri: 'http://placekitten.com/300/300' }}
          cacheKey={"kuva"}
          style={{height: 200, width: 200}} 
          />
        */ }
      </View>
      <Modal
      animationType="slide"
      transparent={false}
      visible={imagePickerVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
        <ImagePicker closeModal={() => setImagePickerVisible(false)} setImages={(images) => changeImage(images)}/>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
})