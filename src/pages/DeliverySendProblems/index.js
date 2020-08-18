import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import api from '~/services/api';
import Button from '~/components/Button';

import { Container, HeaderBackground, TextField } from './styles';
import BodyInfo from '~/components/BodyInfo';

const DeliverySendProblems = ({ route, navigation }) => {
  const { deliveryId } = route?.params;
  const [description, setDescription] = useState('');

  const handleSendProblem = async () => {
    try {
      await api.post(`/delivery/${deliveryId}/problems`, {
        description,
      });
      setDescription('');
      Alert.alert('Cadastro realizado com sucesso!');
      navigation.navigate('Details', {
        deliveryId,
      });
    } catch (err) {
      Alert.alert('Falha no cadastro', err.response.data.error);
    }
  };

  return (
    <Container>
      <HeaderBackground />
      <BodyInfo style={{ marginTop: 30 }}>
        <TextField
          multiline
          numberOfLines={8}
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          textAlignVertical
          value={description}
          onChangeText={setDescription}
        />
      </BodyInfo>
      <Button style={{ width: '90%' }} onPress={handleSendProblem}>
        Enviar
      </Button>
    </Container>
  );
};

export default DeliverySendProblems;

DeliverySendProblems.propTypes = {
  route: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired,
};
