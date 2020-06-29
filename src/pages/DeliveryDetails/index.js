import React, { useEffect } from 'react';
import { Text } from 'react-native';

import { Container, HeaderBackground } from './styles';

// eslint-disable-next-line react/prop-types
const DeliveryDetails = ({ route }) => {
  // eslint-disable-next-line react/prop-types
  const { deliveryId } = route.params;
  useEffect(() => {}, []);

  return (
    <Container>
      <HeaderBackground />
      <Text>{deliveryId}</Text>
    </Container>
  );
};

export default DeliveryDetails;
