import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { format } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import {
  Container,
  HeaderBackground,
  Title,
  Description,
  LineSpace,
  LeftButton,
  CenterButton,
  RightButton,
  TextButton,
} from './styles';
import BodyInfo from '~/components/BodyInfo';

// eslint-disable-next-line react/prop-types
const DeliveryDetails = ({ route }) => {
  // eslint-disable-next-line react/prop-types
  const { deliveryId } = route.params;

  const [delivery, setDelivery] = useState({});

  useEffect(() => {
    const getDelivery = async () => {
      const { data } = await api.get(`/deliveries/${deliveryId}`);
      setDelivery(data);
    };
    getDelivery();
  }, []);

  const getStatus = () => {
    if (delivery.canceled_at) {
      return 'Cancelada';
    }
    if (!delivery.start_date) {
      return 'Aguardando Retirada';
    }
    if (!delivery.end_date) {
      return 'Retirada';
    }
    return 'Entregue';
  };

  return (
    <Container>
      <HeaderBackground />
      <BodyInfo
        title="Informações da Entrega"
        icon="local-shipping"
        style={{ marginTop: 30 }}
      >
        <Title>DESTINATÁRIO</Title>
        <Description>{delivery?.recipient?.name}</Description>
        <LineSpace />
        <Title>ENDEREÇO DE ENTREGA</Title>
        <Description>{`${delivery?.recipient?.address}, ${delivery?.recipient?.address_number}, ${delivery?.recipient?.city}-${delivery?.recipient?.state}, ${delivery?.recipient?.zip}`}</Description>
        <LineSpace />
        <Title>PRODUTO</Title>
        <Description>{delivery?.product}</Description>
      </BodyInfo>
      <BodyInfo
        title="Situação da Entrega"
        icon="event"
        style={{ marginTop: 5 }}
      >
        <Title>STATUS</Title>
        <Description>{getStatus()}</Description>
        <LineSpace />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Title>DATA DE RETIRADA</Title>
            <Description>
              {delivery.start_date
                ? format(new Date(delivery.start_date), 'dd/MM/yyyy')
                : '--/--/----'}
            </Description>
          </View>
          <View>
            <Title>DATA DE ENTREGA</Title>
            <Description>
              {delivery.end_date
                ? format(new Date(delivery.end_date), 'dd/MM/yyyy')
                : '--/--/----'}
            </Description>
          </View>
        </View>
      </BodyInfo>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <LeftButton>
          <Icon name="highlight-off" size={30} color="#E74040" />
          <TextButton style={{ textAlign: 'center' }}>
            Informar Problema
          </TextButton>
        </LeftButton>
        <CenterButton>
          <Icon name="info-outline" size={30} color="#E7BA40" />
          <TextButton style={{ textAlign: 'center' }}>
            Visualizar Problemas
          </TextButton>
        </CenterButton>
        <RightButton>
          <Icon name="check-circle" size={30} color="#7D40E7" />
          <TextButton style={{ textAlign: 'center' }}>
            Confirmar Entrega
          </TextButton>
        </RightButton>
      </View>
    </Container>
  );
};

export default DeliveryDetails;
