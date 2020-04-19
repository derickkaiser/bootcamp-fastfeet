import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';

export default function ConfirmDelivery() {
  const [camera, setCamera] = useState();

  async function takePicture() {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.takePictureAsync(options);
      console.tron.log(data.uri);
    }
  }

  return (
    <View>
      <RNCamera
        ref={ref => setCamera(ref)}
        captureAudio={false}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
      />
      <View>
        <TouchableOpacity onPress={() => takePicture()}>
          <Text> SNAP </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

ConfirmDelivery.navigationOptions = ({navigation}) => ({
  headerTitle: () => <Header title="Confirmar entrega" border={true} />,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={20} color="#000" />
    </TouchableOpacity>
  ),
});
