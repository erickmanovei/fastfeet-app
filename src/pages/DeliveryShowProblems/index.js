import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import { format, parseISO } from 'date-fns';
import api from '~/services/api';

import {
  Container,
  HeaderBackground,
  Title,
  ListItem,
  BodyContent,
  Description,
  Date,
} from './styles';
import BodyInfo from '~/components/BodyInfo';

const DeliveryShowProblems = ({ route }) => {
  const { deliveryId } = route?.params;
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const listProblems = async () => {
      try {
        const { data } = await api.get(`/delivery/${deliveryId}/problems`);
        const problemsFormatted = data.map((e) => ({
          ...e,
          createdAt: format(parseISO(e.createdAt), 'dd/MM/yyyy'),
        }));
        setProblems(problemsFormatted);
      } catch (err) {
        Alert.alert('Falha na listagem', err.response.data.error);
      }
    };
    listProblems();
  }, []);

  return (
    <Container>
      <HeaderBackground />
      <Title>
        Encomenda
        {` ${deliveryId}`}
      </Title>
      <ListItem
        data={problems}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <BodyInfo>
            <BodyContent>
              <Description>{item.description}</Description>
              <Date>{item.createdAt}</Date>
            </BodyContent>
          </BodyInfo>
        )}
      />
    </Container>
  );
};

export default DeliveryShowProblems;

DeliveryShowProblems.propTypes = {
  route: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
