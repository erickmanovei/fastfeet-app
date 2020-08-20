import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import PropTypes from 'prop-types';
import FormData from 'form-data';
import api from '~/services/api';
import Button from '~/components/Button';

import { Container, HeaderBackground } from './styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    marginTop: 40,
    marginBottom: 10,
    width: '90%',
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  preview: {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 10,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

const DeliveryConfirm = ({ route, navigation }) => {
  const { deliveryId } = route?.params;
  const cameraRef = useRef(null);
  const [file, setFile] = useState({});

  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setFile(data);
    }
  };

  const handleSend = async () => {
    try {
      const data = new FormData();
      data.append('file', {
        uri: file.uri,
        name: 'signature.jpg',
        type: 'image/jpg',
      });

      await api
        .put(`/deliveries/${deliveryId}/deliver`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          Alert.alert('Confirmação realizada!');
          navigation.navigate('Delivery');
        })
        .catch((error) => {
          Alert.alert('Falha na confirmação', error.message);
        });
    } catch (err) {
      Alert.alert('Falha na confirmação', err.response.data.error);
    }
  };

  return (
    <Container>
      <HeaderBackground />
      <View style={styles.container}>
        {file?.uri ? (
          <View
            style={{
              zIndex: 9,
              width: '100%',
              height: '100%',
              alignItems: 'center',
              position: 'absolute',
            }}
          >
            <Image
              style={{
                zIndex: 9,
                width: '100%',
                height: '100%',
                alignItems: 'center',
                position: 'absolute',
              }}
              source={file}
            />

            <TouchableOpacity
              onPress={() => setFile({})}
              style={{
                zIndex: 10,
                backgroundColor: '#fff',
                borderRadius: 5,
                padding: 15,
                paddingHorizontal: 20,
                alignSelf: 'center',
                margin: 20,
              }}
            >
              <Text style={{ fontSize: 14 }}> TIRAR OUTRA FOTO </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <RNCamera
            ref={cameraRef}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            captureAudio={false}
            androidCameraPermissionOptions={{
              title: 'Permissão para usar câmera',
              message: 'Precisamos de permissão para uso da câmera',
              buttonPositive: 'Permitir',
              buttonNegative: 'Cancelar',
            }}
          />
        )}
        <View
          style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}
        >
          <TouchableOpacity onPress={takePicture} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> TIRAR FOTO </Text>
          </TouchableOpacity>
        </View>
      </View>
      {file?.uri ? (
        <Button style={{ width: '90%', marginBottom: 20 }} onPress={handleSend}>
          Enviar
        </Button>
      ) : null}
    </Container>
  );
};

export default DeliveryConfirm;

DeliveryConfirm.propTypes = {
  route: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired,
};
