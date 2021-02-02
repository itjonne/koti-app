import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { Permissions } from 'expo-permissions';
import { Audio } from 'expo-av';
import { TouchableOpacity } from 'react-native-gesture-handler';

const recordingOptions = {
  // android not currently in use, but parameters are required
  android: {
      extension: '.m4a',
      outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
      audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
      sampleRate: 44100,
      numberOfChannels: 2,
      bitRate: 128000,
  },
  ios: {
      extension: '.wav',
      audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
      sampleRate: 44100,
      numberOfChannels: 1,
      bitRate: 128000,
      linearPCMBitDepth: 16,
      linearPCMIsBigEndian: false,
      linearPCMIsFloat: false,
  },
};


const SpeechToText = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState(null);

  const startRecording = async () => {

    const { status } = await Audio.requestPermissionsAsync();

      
    if (status !== 'granted') return;
  
    if (isRecording) {
      stopRecording();
    } else {
      console.log("starting recording");
      setIsRecording(true);
      // some of these are not applicable, but are required
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: true,
    
      });
      const recording = new Audio.Recording();
      try {
        await recording.prepareToRecordAsync(recordingOptions);
        await recording.startAsync();
      } catch (error) {
        console.log(error);
        stopRecording();
      }
      setRecording(recording);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setIsRecording(false);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI(); 
    console.log('Recording stopped and stored at', uri);
    playSound(uri);
  }

  async function playSound(uri) {
    const sound = new Audio.Sound();
    console.log("playing sound")
    try {
      const soundUri = {uri: uri};
      console.log(soundUri);
      await sound.loadAsync({uri: uri});
      await sound.playAsync();
      // Your sound is playing!
      console.log("playing");
      // Don't forget to unload the sound from memory
      // when you are done using the Sound object
      await sound.unloadAsync();
      console.log("stopping");
    } catch (error) {
      console.log(error); 
    }

  }
  

  return(
    <View>
      <Text>Speech To Text</Text>
      <TouchableOpacity onPress={startRecording}>
        <Text>Touch to record</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SpeechToText;