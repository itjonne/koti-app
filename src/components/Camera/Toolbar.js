import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

export const Toolbar = ({changeType, takePicture}) => {
  return(
    <View style={{flex:1, flexDirection:"row",justifyContent:"space-between",margin:20}}>
    <TouchableOpacity
      style={{
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent',                  
      }}>
      <Ionicons
          name="ios-photos"
          style={{ color: "#fff", fontSize: 40}}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}
      onPress={() => takePicture()}>
      <FontAwesome
          name="camera"
          style={{ color: "#fff", fontSize: 40}}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}
      onPress={() => changeType()}>
      <MaterialCommunityIcons
          name="camera-switch"
          style={{ color: "#fff", fontSize: 40}}
      />
    </TouchableOpacity>
 </View>
  )
};